"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, X } from "lucide-react";

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
  const [showFilter, setShowFilter] = useState(false);

  // ✅ Remove duplicate models by slug
  const uniqueModelsMap = new Map<string, Model>();
  models.forEach((model) => {
    if (!uniqueModelsMap.has(model.slug)) {
      uniqueModelsMap.set(model.slug, model);
    }
  });
  const uniqueModels = Array.from(uniqueModelsMap.values());

  // ✅ Filter by selected brand
  const filteredModels = selectedBrand
    ? uniqueModels.filter((m) => m.brand.name === selectedBrand)
    : uniqueModels;

  return (
    <div className="flex flex-col min-h-screen gap-8 px-4 py-10 mx-auto transition-colors duration-300 md:flex-row sm:px-10 max-w-7xl bg-gray-50 dark:bg-gray-950">
      {/* ✅ Sidebar (Desktop - Sticky) */}
      <aside className="sticky self-start flex-shrink-0 hidden w-56 space-y-2 md:block top-20">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-600 uppercase dark:text-gray-400">
            Filter
          </h2>
          {selectedBrand && (
            <button
              onClick={() => setSelectedBrand(null)}
              className="text-xs text-blue-600 hover:underline dark:text-blue-400"
            >
              Clear
            </button>
          )}
        </div>

        <button
          onClick={() => setSelectedBrand(null)}
          className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${!selectedBrand
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
        >
          All Brands
        </button>

        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setSelectedBrand(brand.name)}
            className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${selectedBrand === brand.name
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
          >
            {brand.name}
          </button>
        ))}

        {/* ✅ Clear Button at bottom */}
        {selectedBrand && (
          <button
            onClick={() => setSelectedBrand(null)}
            className="w-full py-2 mt-3 text-sm font-medium text-gray-700 transition bg-gray-100 rounded-lg dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-300"
          >
            Clear Filter
          </button>
        )}
      </aside>

      {/* ✅ Mobile Filter Overlay */}
      {showFilter && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setShowFilter(false)}
          ></div>
          <div className="fixed top-24 left-4 w-[15rem] bg-white dark:bg-gray-900 shadow-xl rounded-xl p-4 z-50 md:hidden space-y-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase dark:text-gray-300">
                Filter
              </h3>
              <button
                onClick={() => setShowFilter(false)}
                className="text-gray-600 dark:text-gray-400"
              >
                <X size={18} />
              </button>
            </div>

            <button
              onClick={() => {
                setSelectedBrand(null);
                setShowFilter(false);
              }}
              className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${!selectedBrand
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
            >
              All Brands
            </button>

            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => {
                  setSelectedBrand(brand.name);
                  setShowFilter(false);
                }}
                className={`w-full px-4 py-2 rounded-lg text-left text-sm transition ${selectedBrand === brand.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ✅ Main Section */}
      <main className="flex-1">
        <div className="sticky top-0 z-30 flex items-center justify-between px-2 py-3 mb-6 border-b border-gray-200 bg-gray-50 dark:bg-gray-950 dark:border-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
            {selectedBrand || "All Phones"}
          </h1>

          {/* ✅ Filter Button (Mobile) */}
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white transition bg-blue-600 rounded-lg shadow-sm md:hidden hover:bg-blue-700"
          >
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* ✅ Phone Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredModels.map((model) => {
            const imgSrc = model.image || "/placeholder-phone.png";

            return (
              <Link
                key={model.id}
                href={`/phones/${model.slug}`}
                className="flex items-center gap-5 p-4 transition bg-white border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-800 rounded-xl hover:shadow-md"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
                  <Image
                    src={imgSrc}
                    alt={model.name}
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                    {model.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {model.brand.name}
                  </p>

                  {/* ✅ Compact Specs */}
                  <div className="mt-2 space-y-1">
                    {model.variants?.length ? (
                      <p className="text-xs leading-tight text-gray-700 dark:text-gray-300">
                        <strong>Variants:</strong> {model.variants.join(" | ")}
                      </p>
                    ) : null}

                    {model.colors?.length ? (
                      <p className="text-xs leading-tight text-gray-700 dark:text-gray-300">
                        <strong>Colors:</strong>{" "}
                        {model.colors
                          .map(
                            (color) =>
                              color.charAt(0).toUpperCase() + color.slice(1)
                          )
                          .join(" | ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}