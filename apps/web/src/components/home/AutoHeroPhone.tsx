"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ================= TYPES ================= */

type Phone = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  brand: {
    name: string;
  };
};

/* ================= BRAND GLOW MAP ================= */

const brandGlow: Record<string, string> = {
  Samsung: "from-blue-500/20 to-transparent",
  Apple: "from-zinc-400/20 to-transparent",
  Xiaomi: "from-orange-500/20 to-transparent",
  OnePlus: "from-red-500/20 to-transparent",
  Nothing: "from-gray-400/20 to-transparent",
  Google: "from-emerald-500/20 to-transparent",
};

export default function AutoHeroPhone() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [index, setIndex] = useState(0);

  /* ================= LOAD PHONES ================= */

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/devices");
        const data = await res.json();

        // top trending phones
        setPhones((data.devices || []).slice(0, 3));
      } catch (err) {
        console.error("Hero phone load failed", err);
      }
    };

    load();
  }, []);

  /* ================= AUTO ROTATE ================= */

  useEffect(() => {
    if (phones.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [phones]);

  if (!phones.length) return null;

  const phone = phones[index];

  const glow =
    brandGlow[phone.brand?.name] ||
    "from-primary/20 to-transparent";

  /* ================= UI ================= */

  return (
    <section className="px-6 pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl border bg-card p-6 md:p-10 shadow-md overflow-hidden">
          {/* ADAPTIVE GLOW */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${glow} pointer-events-none`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative flex flex-col md:flex-row items-center gap-8"
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.img
                  src={
                    phone.image || "/images/phones/a75.jpg"
                  }
                  alt={phone.name}
                  className="max-h-72 object-contain"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <p className="text-sm text-muted-foreground">
                  🔥 Trending Now
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {phone.name}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {phone.brand?.name}
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/phones/${phone.slug}`}
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/compare"
                    className="px-6 py-3 rounded-full bg-muted hover:bg-muted/80 transition"
                  >
                    Compare
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
