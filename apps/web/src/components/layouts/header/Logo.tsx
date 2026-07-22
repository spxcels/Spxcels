"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface LogoProps {
  scrolled?: boolean;
}

export default function Logo({
  scrolled = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group flex items-center gap-3"
    >
      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-sky-500/25"
      >
        S
      </motion.div>

      <div className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight transition-colors ${
            scrolled
              ? "text-foreground"
              : "text-foreground/90"
          }`}
        >
          Spexcel
        </span>

        <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Product Explorer
        </span>
      </div>
    </Link>
  );
}