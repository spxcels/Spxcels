import Link from "next/link";

export default function FeaturedComparison() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border bg-card p-8 md:p-10 shadow-md hover:shadow-lg transition">
          {/* TITLE */}
          <p className="text-sm font-medium text-muted-foreground mb-2">
            ⚡ Featured Comparison
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            Galaxy S25 Ultra vs iPhone 15 Pro
          </h2>

          <p className="mt-2 text-muted-foreground max-w-2xl">
            Compare flagship specs, cameras, battery life,
            and performance side by side — and decide which
            phone fits you better.
          </p>

          {/* BUTTON */}
          <div className="mt-6">
            <Link
              href="/compare"
              className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Compare Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
