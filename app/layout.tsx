import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/components/NextUI/providers";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Ads keyword tools",
  description: "Tools for Google Ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
