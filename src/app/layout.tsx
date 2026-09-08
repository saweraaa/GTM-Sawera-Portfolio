import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { SITE } from "@/content/site";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Providers } from "@/components/layout/Providers";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cursor } from "@/components/layout/Cursor";
import { Grain } from "@/components/visual/Grain";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, GTM Engineer and AI Systems Builder`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Sawera Nadeem",
    "GTM engineer",
    "go to market engineer",
    "B2B lead generation",
    "outbound systems",
    "HubSpot CRM consultant",
    "Apollo.io",
    "Instantly cold email",
    "healthcare SaaS sales",
    "retrieval augmented generation",
    "MERN stack trainer Pakistan",
    "web development trainer Faisalabad",
  ],
  alternates: { canonical: SITE.url },
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name}, GTM Engineer and AI Systems Builder`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, GTM Engineer`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#171115" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <JsonLd data={[personSchema, websiteSchema, professionalServiceSchema]} />
        <Providers>
          <SkipLink />
          <ScrollProgress />
          <Cursor />
          <Grain />
          <SmoothScroll>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
