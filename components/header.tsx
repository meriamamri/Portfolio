"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import DesktopNav from "@/components/desktopNav";
import MobileNav from "@/components/mobileNav";
import Logo from "@/components/ui/logo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
