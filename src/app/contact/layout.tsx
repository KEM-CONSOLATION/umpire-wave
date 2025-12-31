import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Umpire Wave Studios. Contact us for music production, film services, artist management, and multimedia solutions.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
