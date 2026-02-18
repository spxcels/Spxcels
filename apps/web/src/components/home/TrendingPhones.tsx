import Link from "next/link";

const phones = [
  {
    id: 1,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    slug: "galaxy-s25-ultra",
    image: "/images/phones/s25-ultra.jpg",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    slug: "iphone-15-pro",
    image: "/images/phones/iphone15pro.jpg",
  },
  {
    id: 3,
    name: "Galaxy A75",
    brand: "Samsung",
    slug: "galaxy-a75",
    image: "/images/phones/a75.jpg",
  },
];

export default function TrendingPhones() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            🔥 Trending Phones
          </h2>

          <Link
            href="/phones"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            View all →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {phones.map((phone) => (
            <Link
              key={phone.id}
              href={`/phones/${phone.slug}`}
              className="group overflow-hidden border rounded-xl bg-card hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  {phone.brand}
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  {phone.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
