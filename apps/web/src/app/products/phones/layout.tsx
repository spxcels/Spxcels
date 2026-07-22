// apps/web/app/phones/layout.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Page Transition */}
      <motion.main
        className="flex-1 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
