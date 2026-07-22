"use client";

import Link from "next/link";
import { motion } from "motion/react";

import type { NavigationItem as NavigationItemType } from "./types";

interface NavigationItemProps {
  item: NavigationItemType;
  scrolled?: boolean;
}

export default function NavigationItem({
  item,
  scrolled = false,
}: NavigationItemProps) {
  return (
    <Link
      href={item.href}
      className={`group relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
        scrolled
          ? "text-muted-foreground hover:text-foreground"
          : "text-muted-foreground/90 hover:text-foreground"
      }`}
    >
      {item.name}

      <motion.span
        className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
      />
    </Link>
  );
}