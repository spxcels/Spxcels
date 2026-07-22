"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import PhoneHeroCard from "@/features/phones/components/PhoneHeroCard";
import SpecsRenderer from "@/features/phones/components/SpecsRenderer";

import type {
  PhoneModel,
  PhoneSpecificationSection,
} from "@/features/phones/types";

interface SuggestedPhone {
  id: number;
  name: string;
  slug: string;
  cardImage?: string | null;

  brand: {
    name: string;
  };
}

interface Props {
  model: PhoneModel;
}

export default function PhoneDetailsClient({
  model,
}: Props) {
  const [suggestions, setSuggestions] = useState<
    SuggestedPhone[]
  >([]);

  useEffect(() => {
    let mounted = true;

    async function loadSuggestions() {
      try {
        const response = await fetch(
          `/api/devices/suggestions?q=${encodeURIComponent(
            model.name,
          )}&id=${model.id}`,
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (mounted) {
          setSuggestions(
            Array.isArray(data) ? data : [],
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadSuggestions();

    return () => {
      mounted = false;
    };
  }, [model.id, model.name]);

  const sections: PhoneSpecificationSection[] =
    model.specs?.sections ?? [];

  // TEMPORARY DEBUG
  console.log("Phone Model:", model);
  console.log("Quick Specs:", model.quickSpecs);
  console.log("Sections:", sections);

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10">
      {/* Hero */}
      <PhoneHeroCard model={model} />

      {/* Specifications */}
      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Specifications
        </h2>

        {sections.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 py-20 text-center">
            <h3 className="text-xl font-semibold">
              Specifications not available
            </h3>

            <p className="mt-2 text-zinc-500">
              This phone does not have any specifications yet.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <div
                key={`${section.title}-${sectionIndex}`}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
              >
                <div className="border-b bg-zinc-50 px-6 py-5">
                  <h3 className="text-xl font-semibold">
                    {section.title}
                  </h3>
                </div>

                <div className="p-6">
                  {section.fields.map(
                    (field, fieldIndex) => (
                      <div
                        key={`${section.title}-${field.label}-${fieldIndex}`}
                        className="grid grid-cols-12 gap-4 border-b py-4 last:border-b-0"
                      >
                        <div className="col-span-3 font-medium text-zinc-500">
                          {field.label}
                        </div>

                        <div className="col-span-9 text-zinc-900">
                          <SpecsRenderer
                            data={field.value}
                          />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Similar Phones */}
      {suggestions.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Similar Phones
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suggestions.map((phone) => (
              <Link
                key={phone.id}
                href={`/products/phones/${phone.slug}`}
                className="rounded-xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                  {phone.cardImage ? (
                    <img
                      src={phone.cardImage}
                      alt={phone.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                      No Image
                    </div>
                  )}
                </div>

                <h3 className="mt-3 line-clamp-2 font-semibold">
                  {phone.name}
                </h3>

                <p className="text-sm text-zinc-500">
                  {phone.brand.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}