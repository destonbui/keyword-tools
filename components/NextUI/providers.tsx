"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeContextProvider } from "../theme/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </NextUIProvider>
  );
}
