"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import AcmeLogo from "@icons/AcmeLogo";
import ThemeSwitcher from "@components/ThemeSwitcher";

const NavigasiBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Jadwal Pengganti",
      url: "/jadwal-pengganti",
    },
    {
      title: "Tentang",
      url: "/tentang",
    },
    {
      title: <ThemeSwitcher/>
    }
  ];
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
          <NavbarBrand>
            <Link href="/" className="text-black">
              <AcmeLogo />
              <p className="font-bold text-inherit">Jadwal Kuliah</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link color={index === 0 ? "primary" : "foreground"} className="w-full" href={item.url}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 0 ? "primary" : "foreground"} className="w-full" href={item.url} size="lg">
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavigasiBar;
