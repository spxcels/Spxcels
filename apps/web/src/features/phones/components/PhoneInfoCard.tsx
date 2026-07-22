import Image from "next/image";

import { getQuickSpecs } from "@/features/phones/utils/getQuickSpecs";

import type { PhoneModel } from "@/features/phones/types";

interface Props {
  model: PhoneModel;
}

export default function PhoneInfoCard({
  model,
}: Props) {
  const quickSpecs = getQuickSpecs(model.specs);

  return (
    <section className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <div className="overflow-hidden rounded-3xl border bg-white p-6">
        {model.cardImage ? (
          <Image
            src={model.cardImage}
            alt={model.name}
            width={320}
            height={320}
            className="mx-auto h-auto w-full object-contain"
            priority
          />
        ) : (
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400">
            No Image
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            {model.brand.name}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {model.name}
          </h1>
        </div>

        {quickSpecs.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickSpecs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border bg-white p-5"
              >
                <p className="text-sm text-zinc-500">
                  {spec.label}
                </p>

                <p className="mt-2 text-lg font-semibold">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {model.colors.length > 0 && (
          <div>
            <h2 className="mb-3 text-lg font-semibold">
              Available Colors
            </h2>

            <div className="flex flex-wrap gap-2">
              {model.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {model.variants.length > 0 && (
          <div>
            <h2 className="mb-3 text-lg font-semibold">
              Variants
            </h2>

            <div className="flex flex-wrap gap-2">
              {model.variants.map((variant) => (
                <span
                  key={variant}
                  className="rounded-full border bg-zinc-50 px-4 py-2 text-sm"
                >
                  {variant}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}