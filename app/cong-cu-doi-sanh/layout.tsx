import { DoiSanhInputContextProvider } from "@/components/cong-cu-doi-sanh/DoiSanhInputContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công Cụ Đối Sánh",
  description: "Tools for Google Ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DoiSanhInputContextProvider>{children}</DoiSanhInputContextProvider>
    </>
  );
}
