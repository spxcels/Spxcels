"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import DesktopActions from "./DesktopActions";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    setScrolled(latest > 60);

    if (Math.abs(diff) < 4) {
      return;
    }

    if (open) {
      setHideHeader(false);
      return;
    }

    if (latest < 40) {
      setHideHeader(false);
      return;
    }

    setHideHeader(diff > 0);
  });

  function toggleMobileMenu() {
    setOpen((previous) => !previous);
  }

  function closeMobileMenu() {
    setOpen(false);
  }

  return (
    <motion.header
      animate={{
        y: hideHeader ? -80 : 0,
      }}
      transition={{
        duration: 0.28,
        ease: "easeOut",
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo scrolled={scrolled} />

        <Navigation scrolled={scrolled} />

        <DesktopActions />

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <MobileMenuButton
            open={open}
            onToggle={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu
        open={open}
        onNavigate={closeMobileMenu}
      />
    </motion.header>
  );
}