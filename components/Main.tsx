"use client";

import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./theme/ThemeContext";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <main
      className={`${theme} min-h-screen flex flex-col items-center text-foreground bg-background`}
    >
      {children}
    </main>
  );
};
export default Main;
