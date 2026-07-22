import { motion, type Variants } from "motion/react";
import Image from "next/image";

import type { PhoneModel } from "../types/model";

interface PhoneHeroCardProps {
  model: PhoneModel;
}

type QuickSpec = PhoneModel["quickSpecs"][number];

const QUICK_SPEC_LABELS = ["Chipset", "CPU", "GPU", "Battery"] as const;

function findQuickSpec(
  specs: PhoneModel["quickSpecs"],
  label: string,
): QuickSpec | undefined {
  return specs.find(
    (spec) => spec.label.toLowerCase() === label.toLowerCase(),
  );
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const quickSpecsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const quickSpecCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function QuickSpecCard({ spec }: { spec: QuickSpec }) {
  return (
    <motion.div
      variants={quickSpecCardVariants}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-5 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-transparent" />

      <div className="relative z-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          {spec.label}
        </p>

        <p className="mt-4 text-xl font-semibold leading-relaxed text-zinc-900">
          {spec.value}
        </p>

        {spec.subtitle && (
          <p className="mt-2 text-sm text-zinc-500">{spec.subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-md"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PhoneHeroCard({ model }: PhoneHeroCardProps) {
  const quickSpecs = QUICK_SPEC_LABELS.map((label) =>
    findQuickSpec(model.quickSpecs, label),
  ).filter(isDefined);

  return (
    <motion.section
      className="relative overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[140px]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-300/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="relative grid gap-10 lg:grid-cols-[420px_1fr]">
        {/* Image */}
        <div className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/30 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.16)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

          <div className="relative aspect-[4/5]">
            {model.cardImage ? (
              <Image
                src={model.cardImage}
                alt={model.name}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl bg-zinc-100 text-zinc-500">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
              {model.brand.name}
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight text-zinc-900 xl:text-6xl">
              {model.name}
            </h1>
          </div>

          {/* Quick specs */}
          {quickSpecs.length > 0 && (
            <motion.div
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
              variants={quickSpecsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {quickSpecs.map((spec) => (
                <QuickSpecCard key={spec.label} spec={spec} />
              ))}
            </motion.div>
          )}

          {/* Variants & colors */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/35 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-transparent" />

            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              <ListPanel title="Variants" items={model.variants} />
              <ListPanel title="Colors" items={model.colors} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
