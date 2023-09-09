"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ThemeToggleButton from "./theme/ThemeToggleButton";

interface Props {}
const NavbarClient = (props: Props) => {
  return (
    <Navbar>
      <NavbarBrand>Keyword Tools</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggleButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default NavbarClient;
