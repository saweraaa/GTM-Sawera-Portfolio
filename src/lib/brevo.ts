const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const BREVO_CONTACTS = "https://api.brevo.com/v3/contacts";

type Address = { email: string; name?: string };

type SendArgs = {
  to: Address[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: Address;
  tags?: string[];
};

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

export async function sendEmail({
  to,
  subject,
  htmlContent,
  textContent,
  replyTo,
  tags,
}: SendArgs) {
  const apiKey = requireEnv("BREVO_API_KEY");

  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        email: requireEnv("BREVO_SENDER_EMAIL"),
        name: process.env.BREVO_SENDER_NAME ?? "Website",
      },
      to,
      subject,
      htmlContent,
      textContent,
      replyTo,
      tags,
    }),
    // Never let a hung provider hold a serverless function open.
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Brevo send failed, ${res.status}: ${detail.slice(0, 400)}`);
  }

  return res.json().catch(() => ({}));
}

/** Optional. Adds the sender to a Brevo list so enquiries build an audience. */
export async function upsertContact(email: string, name: string, company?: string) {
  const listId = process.env.BREVO_CONTACT_LIST_ID;
  if (!listId) return;

  await fetch(BREVO_CONTACTS, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": requireEnv("BREVO_API_KEY"),
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name.split(" ")[0], COMPANY: company ?? "" },
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
    signal: AbortSignal.timeout(8_000),
  }).catch(() => {
    // Contact sync is best-effort. It must never fail the enquiry.
  });
}
