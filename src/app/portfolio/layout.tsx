import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio",
  description:
    "View Umpire Wave Studios' portfolio of creative projects including music productions, films, photography, and multimedia content.",
  path: "/portfolio",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
