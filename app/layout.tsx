import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google"; // Changed from Geist to Outfit for better design match
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"], // Import necessary weights
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dilshajinfotech.tech'),
  title: {
    default: "Dilshaj Infotech | Global Technology & Digital Innovation",
    template: "%s | Dilshaj Infotech",
  },
  description:
    "Dilshaj Infotech is a next-generation global technology company driving impact, innovation, and digital excellence. We build high-performance digital products, scalable software solutions, and immersive digital experiences for businesses worldwide.",
  keywords: [
    "Dilshaj Infotech",
    "Technology Company",
    "Software Development",
    "Web Development",
    "Digital Innovation",
    "IT Solutions",
    "Next.js Developers",
    "Global Tech Firm",
    "Digital Transformation",
  ],
  authors: [{ name: "Dilshaj Infotech Team", url: "https://dilshajinfotech.tech" }],
  creator: "Dilshaj Infotech",
  publisher: "Dilshaj Infotech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dilshajinfotech.tech",
    title: "Dilshaj Infotech | Global Technology & Digital Innovation",
    description:
      "Dilshaj Infotech is a next-generation global technology company driving impact, innovation, and digital excellence. We build high-performance digital products.",
    siteName: "Dilshaj Infotech",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dilshaj Infotech - Innovation & Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilshaj Infotech | Global Technology & Digital Innovation",
    description:
      "Dilshaj Infotech is a next-generation global technology company driving impact, innovation, and digital excellence.",
    images: ["/logo.png"],
    creator: "@dilshajinfotech",
  },

  alternates: {
    canonical: "https://dilshajinfotech.tech",
  },
};

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Preloader />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dilshaj Infotech",
              url: "https://dilshajinfotech.tech",
              logo: "https://dilshajinfotech.tech/logo.png",
              description:
                "Dilshaj Infotech is a next-generation global technology company driving impact, innovation, and digital excellence.",
              sameAs: [
                "https://www.linkedin.com/company/dilshajinfotech",
                "https://twitter.com/dilshajinfotech",
                "https://www.instagram.com/dilshajinfotech",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
