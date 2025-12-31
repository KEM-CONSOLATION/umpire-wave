import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Films",
  description:
    "Discover Umpire Wave Studios' film productions including BTS content, featured films, and Chronicles of Oga Solo series.",
  path: "/films",
});

export default function FilmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
