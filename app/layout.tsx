import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SchemaScript } from "@/components/SchemaScript";
import { getSiteHeadSchemas } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.schemaUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.schemaUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 512,
        height: 512,
        alt: siteConfig.imageAlt.og,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImagePath],
  },
  verification: {
    google: "_w8f5c9b5rTdVguyTWR9KysN7oSKRBmrfr0pCsCMlW0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = siteConfig.gaId;

  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <SchemaScript schema={getSiteHeadSchemas()} />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="flex min-h-screen flex-col">
        <PhoneClickTracker />
        <Navigation />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
