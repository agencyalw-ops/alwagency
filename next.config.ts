import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Fonts are self-hosted via next/font (no Google Fonts CDN), and the only
// cross-origin calls this app makes are anchor navigations (wa.me,
// instagram.com, linkedin.com) plus the Meta Pixel (connect.facebook.net /
// www.facebook.com) for ad tracking. Everything else — API routes, images,
// styles — is same-origin, so the policy stays tight.
const csp = [
  "default-src 'self'",
  // 'unsafe-inline' is required for the JSON-LD <script> tag, Next.js's
  // hydration bootstrap, and the Meta Pixel init snippet; 'unsafe-eval' is
  // only needed for dev-mode HMR.
  `script-src 'self' 'unsafe-inline' https://connect.facebook.net${isDev ? " 'unsafe-eval'" : ""}`,
  // Inline `style={{...}}` attributes are used throughout the app.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  // www.facebook.com is where fbevents.js sends its /tr tracking pings.
  "connect-src 'self' https://www.facebook.com https://connect.facebook.net",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;