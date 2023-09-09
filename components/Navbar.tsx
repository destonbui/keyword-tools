"use client";

import { useState, useContext } from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeToggleButton from "./theme/ThemeToggleButton";
import { ThemeContext, ThemeContextType } from "./theme/ThemeContext";
import { usePathname } from "next/navigation";

interface Props {}
const NavbarClient = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const pathname = usePathname();
  return (
    <Navbar
      isBordered
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <span className="font-bold text-xl">Keyword Tools</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggleButton />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar menu */}
      <NavbarMenu
        className={`${
          theme === "dark" ? "bg-white/5" : "bg-black/5"
        } flex items-center`}
      >
        <div className="w-full lg:px-6 pt-3 lg:pt-6 max-w-[1024px]">
          <NavbarMenuItem>
            <Link
              color={
                pathname === "/cong-cu-doi-sanh" ? "primary" : "foreground"
              }
              className={`${theme}`}
              href="#"
              size="lg"
            >
              Công Cụ Đối Sánh
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
export default NavbarClient;
