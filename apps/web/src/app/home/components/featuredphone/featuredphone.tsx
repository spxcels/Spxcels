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
  brand: {
    name: string;
  };
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

export default function FeaturedPhone() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= MAGNETIC EFFECT ================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const glareX = useTransform(mouseX, [-20, 20], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-20, 20], ["0%", "100%"]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - (rect.left + rect.width / 2)) / 25;

    const y =
      (event.clientY - (rect.top + rect.height / 2)) / 25;

    mouseX.set(x);
    mouseY.set(-y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ================= LOAD FEATURED DEVICES ================= */

  useEffect(() => {
    let mounted = true;

    const loadFeaturedPhones = async () => {
      try {
        const response = await fetch("/api/devices");

        if (!response.ok) {
          throw new Error("Failed to load featured phones.");
        }

        const data = await response.json();

        if (!mounted) return;

        setPhones((data.devices ?? []).slice(0, 3));
      } catch (error) {
        console.error(error);

        if (mounted) {
          setPhones([]);
        }
      }
    };

    loadFeaturedPhones();

    return () => {
      mounted = false;
    };
  }, []);

  /* ================= AUTO ROTATE ================= */

  useEffect(() => {
    if (phones.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % phones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [phones]);

  if (phones.length === 0) {
    return null;
  }

  const phone = phones[currentIndex];

  const glow =
    brandGlow[phone.brand?.name] ??
    "from-primary/20 to-transparent";

  /* ================= UI ================= */

  return (
    <section className="px-6 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-md md:p-10">
          {/* BACKGROUND GLOW */}

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className={`absolute inset-0 bg-gradient-to-br ${glow}`}
          />

          {/* FLOATING PARTICLES */}

          <div className="pointer-events-none absolute inset-0">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute h-2 w-2 rounded-full bg-white/20"
                initial={{
                  x: Math.random() * 600,
                  y: Math.random() * 300,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={phone.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative flex flex-col items-center gap-8 md:flex-row"
            >
              {/* PHONE IMAGE */}

              <motion.div
                className="relative flex w-full justify-center perspective-[1200px] md:w-1/2"
                onMouseMove={handleMouseMove}
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
                  className="relative z-10 max-h-72 object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  style={{
                    left: glareX,
                    top: glareY,
                  }}
                  className="absolute h-40 w-40 rounded-full bg-white/20 blur-3xl"
                />
              </motion.div>

              {/* CONTENT */}

              <div className="w-full md:w-1/2">
                <p className="text-sm text-muted-foreground">
                  🔥 Flagship Spotlight
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  {phone.name}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {phone.brand.name}
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/phones/${phone.slug}`}
                    className="rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/compare"
                    className="rounded-full bg-muted px-6 py-3 transition hover:bg-muted/80"
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