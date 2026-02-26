"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Sun,
  Moon,
  Smartphone,
  Gift,
  ArrowLeftRight,
  X,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

/* ================= THEME ICON ================= */

const ThemeIcon = ({ isDark }: { isDark: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return isDark ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <AnimatePresence mode="wait">
      {isDark ? (
        <motion.div
          key="sun"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={18} />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={18} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ================= HEADER ================= */

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const { scrollY } = useScroll();

  /* ================= SMART SCROLL LOGIC ================= */

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = latest - prev;

    // header background
    setScrolled(latest > 60);

    // ignore tiny mobile jitter
    if (Math.abs(diff) < 4) return;

    /* ⭐ AUTO CLOSE MENU WHEN SCROLLING */
    if (open) {
      setOpen(false);
      setHideHeader(false);
      return;
    }

    // near top → always visible
    if (latest < 40) {
      setHideHeader(false);
      return;
    }

    // scroll down → hide
    if (diff > 0) {
      setHideHeader(true);
    } else {
      // scroll up → show
      setHideHeader(false);
    }
  });

  /* ================= THEME ================= */

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  /* ================= NAV ITEMS ================= */

  const navItems = [
    { name: "Phones", href: "/phones", icon: <Smartphone size={16} /> },
    { name: "Compare", href: "/compare", icon: <ArrowLeftRight size={16} /> },
    { name: "Donate", href: "/donate", icon: <Gift size={16} /> },
  ];

  /* ================= UI ================= */

  return (
    <motion.header
      animate={{ y: hideHeader ? -80 : 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full will-change-transform transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 max-w-6xl px-6 mx-auto">
        {/* LOGO */}
        <Link
          href="/"
          className={`font-bold text-lg tracking-tight transition ${
            scrolled ? "text-foreground" : "text-foreground/90"
          }`}
        >
          Spxcels
        </Link>

        {/* DESKTOP NAV */}
        <nav className="items-center hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-muted-foreground/90 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="items-center hidden gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="p-2 transition rounded-md hover:bg-muted"
          >
            <ThemeIcon isDark={isDark} />
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 transition rounded-md hover:bg-muted"
          >
            <ThemeIcon isDark={isDark} />
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 transition rounded-md hover:bg-muted"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-4 space-y-3 border-b md:hidden bg-background/90 backdrop-blur-lg border-border/40"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium transition text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}