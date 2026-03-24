import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Coolmore Logistics | Freight Brokerage",
    template: "%s | Coolmore Logistics",
  },
  description:
    "Memphis-based freight brokerage providing reliable capacity, fair pricing, and dependable support for FTL, LTL, and expedited shipments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
