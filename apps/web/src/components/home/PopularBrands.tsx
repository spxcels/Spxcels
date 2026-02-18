import Link from "next/link";

const brands = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Xiaomi",
  "Nothing",
  "Motorola",
];

export default function PopularBrands() {
  return (
    <section className="px-6 py-16 md:py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-6">
          ⭐ Popular Brands
        </h2>

        {/* BRAND CHIPS */}
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/phones?brand=${encodeURIComponent(
                brand
              )}`}
              className="px-5 py-2 rounded-full border bg-card text-sm font-medium hover:bg-muted transition"
            >
              {brand}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
