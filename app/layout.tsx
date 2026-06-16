import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SchemaScript } from "@/components/SchemaScript";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/schema";
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
  icons: {
    icon: "/icon-512.png",
    apple: "/icon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.schemaUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <SchemaScript schema={getLocalBusinessSchema()} />
        <SchemaScript schema={getWebSiteSchema()} />
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
