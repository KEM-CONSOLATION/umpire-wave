import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Our Services",
  description:
    "Explore Umpire Wave Studios' comprehensive multimedia services including artist management, music production, film production, photography, and more.",
  path: "/service",
});

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
