import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Artistes",
  description:
    "Discover the exceptional musicians and performers at Umpire Wave Studios creating unforgettable sounds and experiences.",
  path: "/artistes",
});

export default function ArtistesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
