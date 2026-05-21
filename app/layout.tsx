import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://coolmorelogistics.com"),
  title: {
    default: "Coolmore Logistics | Freight Brokerage",
    template: "%s | Coolmore Logistics",
  },
  description:
    "Memphis-based freight brokerage providing reliable capacity, fair pricing, and dependable support for FTL, LTL, and expedited shipments.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coolmore Logistics",
    title: "Coolmore Logistics | Freight Brokerage",
    description:
      "Memphis-based freight brokerage providing reliable capacity, fair pricing, and dependable support for FTL, LTL, and expedited shipments.",
  },
  twitter: {
    card: "summary",
    title: "Coolmore Logistics | Freight Brokerage",
    description:
      "Memphis-based freight brokerage providing reliable capacity, fair pricing, and dependable support for FTL, LTL, and expedited shipments.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Coolmore Logistics",
              description:
                "Memphis-based freight brokerage providing reliable capacity, fair pricing, and dependable support for FTL, LTL, and expedited shipments.",
              url: "https://coolmorelogistics.com",
              telephone: "901-300-0240",
              email: "support@coolmorelogistics.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5100 Poplar Ave Suite 2219",
                addressLocality: "Memphis",
                addressRegion: "TN",
                postalCode: "38137",
                addressCountry: "US",
              },
              areaServed: "US",
            }),
          }}
        />
      </body>
    </html>
  );
}
