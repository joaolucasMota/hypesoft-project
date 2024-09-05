import type { Metadata } from "next";
import { Inter } from "next/font/google";
import OpenGraphImage from "/public/opengraph_banner.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hypesoft code challenge",
  description: "A code challenge made for Hypesoft",
  openGraph: {
    title: "Hypesoft code challenge",
    description: "A code challenge made for Hypesoft",
    url: "...",
    siteName: "Hypesoft code challenge",
    images: [
      {
        url: OpenGraphImage.src,
        width: 1920,
        height: 1080,
        alt: "Image of challenge homepage",
      },
    ],
    locale: "pt-BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
