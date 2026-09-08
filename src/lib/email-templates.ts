import { SITE } from "@/content/site";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const shell = (inner: string) => `
<div style="margin:0;padding:32px 16px;background:#faf6f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid rgba(36,26,32,0.12);border-radius:14px;overflow:hidden;">
    <tr><td style="height:4px;background:#b33a63;"></td></tr>
    <tr><td style="padding:32px;">${inner}</td></tr>
    <tr><td style="padding:18px 32px;background:#f1e8e2;font-size:12px;color:#6e5c63;">
      Sent from <a href="${SITE.url}" style="color:#b33a63;text-decoration:none;">${SITE.url.replace(/^https?:\/\//, "")}</a>
    </td></tr>
  </table>
</div>`;

export function notificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6e5c63;width:120px;vertical-align:top;">${escape(label)}</td>
      <td style="padding:8px 0;font-size:15px;color:#241a20;">${escape(value)}</td>
    </tr>`;

  return shell(`
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#c79a5b;">New enquiry</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:400;color:#3d1e36;">${escape(data.name)} got in touch</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${data.company ? row("Company", data.company) : ""}
      ${row("Interest", data.projectType)}
      ${data.budget ? row("Budget", data.budget) : ""}
    </table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(36,26,32,0.12);">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6e5c63;">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#241a20;white-space:pre-wrap;">${escape(data.message)}</p>
    </div>
    <p style="margin:28px 0 0;">
      <a href="mailto:${escape(data.email)}?subject=Re:%20your%20enquiry"
         style="display:inline-block;padding:12px 24px;background:#b33a63;color:#ffffff;border-radius:999px;text-decoration:none;font-size:14px;">
        Reply to ${escape(data.name.split(" ")[0])}
      </a>
    </p>
  `);
}

export function autoReplyEmail(name: string) {
  return shell(`
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#c79a5b;">Received</p>
    <h1 style="margin:0 0 20px;font-size:26px;font-weight:400;color:#3d1e36;">Thank you, ${escape(name.split(" ")[0])}</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#241a20;">
      Your message has arrived and I have it in front of me. I reply to everything personally,
      usually within one working day.
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#241a20;">
      If it is urgent, replying directly to this email reaches me fastest.
    </p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#241a20;">
      In the meantime, the six-stage breakdown of how I build outbound systems is here:
      <a href="${SITE.url}/gtm-engineering" style="color:#b33a63;">${SITE.url.replace(/^https?:\/\//, "")}/gtm-engineering</a>
    </p>
    <p style="margin:0;font-size:15px;line-height:1.7;color:#241a20;">
      Sawera Nadeem<br>
      <span style="color:#6e5c63;font-size:13px;">GTM Engineer, Faisalabad, Pakistan</span>
    </p>
  `);
}
