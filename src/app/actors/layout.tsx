import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Actors",
  description:
    "Meet the talented actors at Umpire Wave Studios who bring stories to life on screen with exceptional performances.",
  path: "/actors",
});

export default function ActorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
