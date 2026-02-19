"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

interface Brand {
  id: number;
  name: string;
}

interface Model {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  colors?: string[];
  variants?: string[];
  brandId: number;
  brand: Brand;
}

interface PhonesPageProps {
  brands: Brand[];
  models: Model[];
}

export default function PhonesPage({ brands, models }: PhonesPageProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [rotation, setRotation] = useState<
    { [key: number]: { x: number; y: number } }
  >({});

  // remove duplicates
  const uniqueModelsMap = new Map<string, Model>();
  models.forEach((model) => {
    if (!uniqueModelsMap.has(model.slug)) {
      uniqueModelsMap.set(model.slug, model);
    }
  });

  const uniqueModels = Array.from(uniqueModelsMap.values());

  const filteredModels = selectedBrand
    ? uniqueModels.filter((m) => m.brand.name === selectedBrand)
    : uniqueModels;

  return (
    <div className="flex flex-col min-h-screen gap-8 px-4 py-10 mx-auto md:flex-row sm:px-10 max-w-7xl bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="sticky self-start hidden w-56 space-y-2 md:block top-20">
        <h2 className="text-sm font-semibold text-gray-600 uppercase dark:text-gray-400">
          Filter
        </h2>

        <button
          onClick={() => setSelectedBrand(null)}
          className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${
            !selectedBrand
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
          }`}
        >
          All Brands
        </button>

        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setSelectedBrand(brand.name)}
            className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${
              selectedBrand === brand.name
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
            }`}
          >
            {brand.name}
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1">
        <div className="sticky top-0 z-30 flex items-center justify-between px-2 py-3 mb-6 border-b border-gray-200 bg-gray-50 dark:bg-gray-950 dark:border-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
            {selectedBrand || "All Phones"}
          </h1>

          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg md:hidden">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredModels.map((model) => {
            const imgSrc = model.image || "/placeholder-phone.png";

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
                  boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
                }}
                style={{
                  rotateX: rotation[model.id]?.x || 0,
                  rotateY: rotation[model.id]?.y || 0,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const rotateX = ((y / rect.height) - 0.5) * -8;
                  const rotateY = ((x / rect.width) - 0.5) * 8;

                  setRotation((prev) => ({
                    ...prev,
                    [model.id]: { x: rotateX, y: rotateY },
                  }));
                }}
                onMouseLeave={() =>
                  setRotation((prev) => ({
                    ...prev,
                    [model.id]: { x: 0, y: 0 },
                  }))
                }
              >
                <Link
                  href={`/phones/${model.slug}`}
                  className="group relative flex items-center gap-5 p-4 bg-white border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-800 rounded-xl overflow-hidden"
                >
                  {/* ✨ Glass reflection */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-120%] group-hover:translate-x-[300%] transition-transform duration-1000" />
                  </div>

                  {/* IMAGE */}
                  <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
                    <Image
                      src={imgSrc}
                      alt={model.name}
                      width={80}
                      height={80}
                      unoptimized
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <motion.div className="transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                      {model.name}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {model.brand.name}
                    </p>

                    <div className="mt-2 space-y-1 opacity-90 group-hover:opacity-100 transition">
                      {model.variants?.length ? (
                        <p className="text-xs leading-tight text-gray-700 dark:text-gray-300">
                          <strong>Variants:</strong>{" "}
                          {model.variants.join(" | ")}
                        </p>
                      ) : null}

                      {model.colors?.length ? (
                        <p className="text-xs leading-tight text-gray-700 dark:text-gray-300">
                          <strong>Colors:</strong>{" "}
                          {model.colors
                            .map(
                              (c) =>
                                c.charAt(0).toUpperCase() + c.slice(1)
                            )
                            .join(" | ")}
                        </p>
                      ) : null}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
