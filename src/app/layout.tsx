import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { generateMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import StructuredData from "@/components/StructuredData";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...generateMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Umpire-Wave-FavIcon.svg" type="image/svg+xml" />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#E7BF44" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData />
      </head>
      <body className={`${jost.className} } antialiased`}>
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
