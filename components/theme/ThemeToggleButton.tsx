"use client";

import { useContext, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

interface Props {}
const ThemeToggleButton = (props: Props) => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <Switch
      isSelected={theme === "dark" ? false : true}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      defaultSelected={false}
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
};
export default ThemeToggleButton;
