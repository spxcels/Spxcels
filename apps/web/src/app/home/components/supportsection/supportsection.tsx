"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section className="max-w-5xl px-4 py-20 mx-auto">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-8 border shadow-sm bg-card rounded-3xl"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Support Spxcels ❤️
        </h2>

        <p className="max-w-2xl mt-4 leading-relaxed text-muted-foreground">
          We’re building Spxcels to make phone comparison simple and honest.
          If you love the project, you can support us and help keep development alive.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/donate"
            className="px-6 py-3 text-white transition bg-black rounded-full hover:scale-105"
          >
            Donate with PayPal
          </Link>

          <Link
            href="/donate"
            className="px-6 py-3 transition border rounded-full hover:bg-muted"
          >
            ☕ Buy me a coffee
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Every small support helps us build faster 🚀
        </p>
      </motion.div>
    </section>
  );
}