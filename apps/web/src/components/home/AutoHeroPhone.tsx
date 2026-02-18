"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ================= TYPES ================= */

type Phone = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  brand: { name: string };
};

/* ================= BRAND GLOW ================= */

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

  /* ================= MAGNETIC ================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(mouseX, { stiffness: 120, damping: 18 });

  const glareX = useTransform(mouseX, [-20, 20], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-20, 20], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - (rect.left + rect.width / 2)) / 25;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 25;

    mouseX.set(x);
    mouseY.set(-y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ================= LOAD ================= */

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/devices");
      const data = await res.json();
      setPhones((data.devices || []).slice(0, 3));
    };

    load();
  }, []);

  /* ================= ROTATE ================= */

  useEffect(() => {
    if (phones.length <= 1) return;

    const i = setInterval(() => {
      setIndex((p) => (p + 1) % phones.length);
    }, 5000);

    return () => clearInterval(i);
  }, [phones]);

  if (!phones.length) return null;

  const phone = phones[index];
  const glow =
    brandGlow[phone.brand?.name] || "from-primary/20 to-transparent";

  /* ================= UI ================= */

  return (
    <section className="px-6 pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 md:p-10 shadow-md">

          {/* CINEMATIC BACKGROUND LAYER */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute inset-0 bg-gradient-to-br ${glow}`}
          />

          {/* FLOATING PARTICLES */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/20"
                initial={{
                  x: Math.random() * 600,
                  y: Math.random() * 300,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative flex flex-col md:flex-row items-center gap-8"
            >
              {/* HERO IMAGE */}
              <motion.div
                className="relative w-full md:w-1/2 flex justify-center perspective-[1200px]"
                onMouseMove={handleMove}
                onMouseLeave={resetMouse}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  src={phone.image || "/images/phones/a75.jpg"}
                  alt={phone.name}
                  className="max-h-72 object-contain drop-shadow-2xl relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* GLASS REFLECTION */}
                <motion.div
                  style={{ left: glareX, top: glareY }}
                  className="absolute w-40 h-40 rounded-full bg-white/20 blur-3xl"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <p className="text-sm text-muted-foreground">
                  🔥 Flagship Spotlight
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
