import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Umpire Wave Studios - a culture-driven multimedia powerhouse redefining African creativity through music, film, and visual arts.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
