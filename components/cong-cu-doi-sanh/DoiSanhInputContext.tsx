"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface DoiSanhInputContextType {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const DoiSanhInputContext =
  createContext<null | DoiSanhInputContextType>(null);

export function DoiSanhInputContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [input, setInput] = useState<string>("");
  return (
    <DoiSanhInputContext.Provider value={{ input, setInput }}>
      {children}
    </DoiSanhInputContext.Provider>
  );
}
