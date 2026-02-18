"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  Sun,
  Moon,
  Search,
  Smartphone,
  Gift,
  ArrowLeftRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  id: number;
  name: string;
  slug?: string;
  brand?: { id: number; name: string; slug: string };
  type: "model" | "brand";
}

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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

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

  /* ================= SEARCH ================= */

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setDropdownOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await fetch(
        `/api/search?search=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();
      setSearchResults(data.results || []);
      setDropdownOpen(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  /* ================= NAV ITEMS ================= */

  const navItems = [
    { name: "Phones", href: "/phones", icon: <Smartphone size={16} /> },
    { name: "Compare", href: "/compare", icon: <ArrowLeftRight size={16} /> },
    { name: "Donate", href: "/donate", icon: <Gift size={16} /> },
  ];

  /* ================= UI ================= */

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          Spxcel
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <ThemeIcon isDark={isDark} />
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
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
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden border-t border-border/40 bg-background/90 backdrop-blur-lg px-6 py-4 space-y-3"
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
