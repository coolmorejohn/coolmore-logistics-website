import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Coolmore Logistics for a freight quote. Call 901-300-0240 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to get started? Reach out and we'll be in touch."
        subtitleClassName="text-lg md:text-xl text-gray-300"
      />
      <ContactForm />
    </>
  );
}
