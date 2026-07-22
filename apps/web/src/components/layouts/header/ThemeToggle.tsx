"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    setIsDark((previous) => {
      const next = !previous;

      document.documentElement.classList.toggle(
        "dark",
        next,
      );

      localStorage.setItem(
        "theme",
        next ? "dark" : "light",
      );

      return next;
    });
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted"
    >
      {!mounted ? (
        isDark ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )
      ) : (
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{
                rotate: 90,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotate: -90,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Sun size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{
                rotate: -90,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotate: 90,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Moon size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}