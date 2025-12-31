import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Music",
  description:
    "Explore Umpire Wave Studios' music productions including Wave Sessions and Rising Stars - showcasing the best of African music talent.",
  path: "/music",
});

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
