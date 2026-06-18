import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SchemaScript } from "@/components/SchemaScript";
import { getHomePageHeadSchemas, getSiteHeadSchemas } from "@/lib/schema";
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
    default: `${siteConfig.name} | Greenville, SC`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "US-SC",
    "geo.placename": siteConfig.locationLabel,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
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
  const pathname = headers().get("x-pathname");
  const isHome = pathname === "/";

  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <SchemaScript schema={getSiteHeadSchemas()} />
        {isHome ? <SchemaScript schema={getHomePageHeadSchemas()} /> : null}
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
        <Script id="lovable-tracking" strategy="afterInteractive">
          {`
            (function(){
              var s=Math.random().toString(36).slice(2);
              try{s=sessionStorage.getItem('_sid')||s;sessionStorage.setItem('_sid',s);}catch(e){}
              var p=location.pathname+location.search;
              var r=document.referrer||'';
              var i=new Image();
              i.src='${siteConfig.lovable.pixelUrl}?p='+encodeURIComponent(p)+'&r='+encodeURIComponent(r)+'&s='+s+'&t='+Date.now();
            })();
          `}
        </Script>
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
