type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Small in-memory sliding window. Good enough for a portfolio contact form
 * on a single serverless region. If the site ever needs stronger guarantees,
 * swap the Map for Upstash Redis behind the same function signature.
 */
export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { ok: false, remaining: 0, retryAfter: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count };
}
