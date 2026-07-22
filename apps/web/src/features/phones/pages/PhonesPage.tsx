"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

/* ================= TYPES ================= */

interface Brand {
  id: number;
  name: string;
}

interface Model {
  id: number;
  name: string;
  slug: string;
  cardImage?: string | null;
  colors?: string[];
  variants?: string[];
  brandId: number;
  brand: Brand;
}

interface PhonesPageProps {
  brands: Brand[];
  models: Model[];
}

/* ================= COMPONENT ================= */

export default function PhonesPage({
  brands,
  models,
}: PhonesPageProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const [rotation, setRotation] = useState<
    Record<number, { x: number; y: number }>
  >({});

  /* ================= DATA ================= */

  const uniqueModels = Array.from(
    new Map(models.map((m) => [m.slug, m])).values(),
  );

  const filteredModels = selectedBrand
    ? uniqueModels.filter(
        (m) => m.brand.name === selectedBrand,
      )
    : uniqueModels;

  /* ================= ROTATION ================= */

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -8;

    const rotateY =
      ((x / rect.width) - 0.5) * 8;

    setRotation((prev) => ({
      ...prev,
      [id]: {
        x: rotateX,
        y: rotateY,
      },
    }));
  }

  function resetRotation(id: number) {
    setRotation((prev) => ({
      ...prev,
      [id]: {
        x: 0,
        y: 0,
      },
    }));
  }

  /* ================= RENDER ================= */

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-10 md:flex-row">
      {/* ================= SIDEBAR ================= */}

      <aside className="sticky top-20 hidden w-56 space-y-2 self-start md:block">
        <h2 className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-400">
          Filter
        </h2>

        <BrandButton
          active={!selectedBrand}
          onClick={() => setSelectedBrand(null)}
        >
          All Brands
        </BrandButton>

        {brands.map((brand) => (
          <BrandButton
            key={brand.id}
            active={selectedBrand === brand.name}
            onClick={() =>
              setSelectedBrand(brand.name)
            }
          >
            {brand.name}
          </BrandButton>
        ))}
      </aside>

      {/* ================= MAIN ================= */}

      <main className="flex-1">
        {/* HEADER */}

        <div className="sticky top-0 z-30 mb-6 flex items-center justify-between border-b border-gray-200 bg-gray-50 px-2 py-3 dark:border-gray-800 dark:bg-gray-950">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
            {selectedBrand || "All Phones"}
          </h1>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white md:hidden">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredModels.map((model) => {
            const imgSrc =
              model.cardImage ??
              "/placeholder-phone.png";

            return (
              <motion.div
                key={model.id}
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 45px rgba(0,0,0,0.2)",
                }}
                style={{
                  rotateX:
                    rotation[model.id]?.x ?? 0,
                  rotateY:
                    rotation[model.id]?.y ?? 0,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={(e) =>
                  handleMouseMove(e, model.id)
                }
                onMouseLeave={() =>
                  resetRotation(model.id)
                }
              >
                <Link
                  href={`/products/phones/${model.slug}`}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  {/* Shine */}

                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
                  </div>

                  {/* Image */}

                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={imgSrc}
                      alt={model.name}
                      width={80}
                      height={80}
                      unoptimized
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Info */}

                  <div className="transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                      {model.name}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {model.brand.name}
                    </p>

                    <div className="mt-2 space-y-1 opacity-90 transition group-hover:opacity-100">
                      {model.variants?.length ? (
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          <strong>Variants:</strong>{" "}
                          {model.variants.join(" | ")}
                        </p>
                      ) : null}

                      {model.colors?.length ? (
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          <strong>Colors:</strong>{" "}
                          {model.colors
                            .map(
                              (color) =>
                                color
                                  .charAt(0)
                                  .toUpperCase() +
                                color.slice(1),
                            )
                            .join(" | ")}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/* ================= BRAND BUTTON ================= */

function BrandButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg px-4 py-2 text-left text-sm transition ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
      }`}
    >
      {children}
    </button>
  );
}