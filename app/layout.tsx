import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/components/NextUI/providers";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

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
        <Providers>
          <Main>
            <Navbar />
            <div className="w-full max-w-[1024px] px-6 pt-6">{children}</div>
          </Main>
        </Providers>
      </body>
    </html>
  );
}
