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
        >
          <Sun size={18} />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
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
  const [hideMobileControls, setHideMobileControls] = useState(false);

  /* ================= SCROLL DETECT ================= */

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;

    setScrolled(latest > 60);

    // Hide on scroll down, show on scroll up
    if (latest > prev && latest > 80) {
      setHideMobileControls(true);
    } else {
      setHideMobileControls(false);
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
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className={`font-bold text-lg tracking-tight transition ${
            scrolled ? "text-foreground" : "text-foreground/90"
          }`}
        >
          Spxcel
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
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
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <ThemeIcon isDark={isDark} />
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <motion.div
          className="md:hidden flex items-center gap-2"
          animate={{
            y: hideMobileControls ? -40 : 0,
            opacity: hideMobileControls ? 0 : 1,
          }}
          transition={{ duration: 0.22 }}
        >
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted"
          >
            <ThemeIcon isDark={isDark} />
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md hover:bg-muted"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden bg-background/90 backdrop-blur-lg px-6 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}