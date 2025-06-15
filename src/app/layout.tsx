import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import whatsappIcon from "../assets/WhatsApp.svg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARO Tech Vision | Web Development & Digital Solutions",
  description:
    "Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions. Get a free consultation today.",
  keywords:
    "web development, e-commerce, software development, digital solutions, custom websites, remote development team",
  authors: [{ name: "Aro Tech Vision" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aro-tech-vision.nl",
    title: "Aro Tech Vision | Web Development & Digital Solutions",
    description:
      "Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions.",
    siteName: "Aro Tech Vision",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aro Tech Vision | Web Development & Digital Solutions",
    description:
      "Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aro Tech Vision",
              url: "https://aro-tech-vision.nl",
              logo: "https://aro-tech-vision.nl/logo.png",
              description:
                "Expert web development and digital solutions company",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Park",
                addressLocality: "Amsterdam",
                postalCode: "00000",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31-20-1234567",
                contactType: "customer service",
                email: "arotechvision@gmail.com",
                availableLanguage: ["English", "Dutch"],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>

        <a
          href="https://wa.me/31631104755"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed bottom-4 right-4 z-50
            flex items-center space-x-3
            bg-white bg-opacity-90 backdrop-blur-md
            px-4 py-2 rounded-full shadow-lg
            hover:shadow-xl transition-shadow
          "
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src={whatsappIcon}
            alt="WhatsApp"
            width={40}
            height={40}
            className="!bg-transparent"
          />
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            Need a website?<div>We're here to help!</div>
          </span>
        </a>

        <Footer />
      </body>
    </html>
  );
}
