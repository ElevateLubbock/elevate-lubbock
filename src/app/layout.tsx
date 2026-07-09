import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevatelubbock.com"),
  title: {
    default: "Elevate Lubbock | Premium Websites for Local Businesses",
    template: "%s | Elevate Lubbock",
  },
  description:
    "Elevate Lubbock builds modern, trustworthy websites for local businesses in Lubbock, Texas. Strategy, design, and development built to help visitors become customers.",
  keywords: [
    "Lubbock web design",
    "Lubbock website design",
    "websites for local businesses",
    "small business websites Lubbock",
    "Elevate Lubbock",
  ],
  authors: [{ name: "Elevate Lubbock" }],
  creator: "Elevate Lubbock",
  publisher: "Elevate Lubbock",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elevate Lubbock | Premium Websites for Local Businesses",
    description:
      "Modern, trustworthy websites for local businesses in Lubbock, Texas.",
    url: "https://elevatelubbock.com",
    siteName: "Elevate Lubbock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Lubbock | Premium Websites for Local Businesses",
    description:
      "Modern, trustworthy websites for local businesses in Lubbock, Texas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
       <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Elevate Lubbock",
      url: "https://elevatelubbock.com",
      image: "https://elevatelubbock.com/brand/elevate-icon.svg",
      description:
        "Elevate Lubbock builds modern websites that help local businesses earn trust and grow.",
      areaServed: {
        "@type": "City",
        name: "Lubbock",
        addressRegion: "TX",
        addressCountry: "US",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lubbock",
        addressRegion: "TX",
        addressCountry: "US",
      },
      priceRange: "$$",
    }),
  }}
/>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
