import { useEffect, useState } from "react";
import { auto } from "@/api/auto";
import type { PhoneModelDraft } from "../NewPhoneModel";

type PhoneBrand = {
  id: number;
  name: string;
};

type Props = {
  form: PhoneModelDraft;
  update: <K extends keyof PhoneModelDraft>(
    key: K,
    value: PhoneModelDraft[K]
  ) => void;

  cardFile: File | null;
  setCardFile: (file: File | null) => void;

  cardPreview: string | null;
  setCardPreview: (value: string | null) => void;
};

export default function BasicInfoSection({
  form,
  update,
  cardFile,
  setCardFile,
  cardPreview,
  setCardPreview,
}: Props) {
  const [brands, setBrands] = useState<PhoneBrand[]>([]);

  /* ===============================
     LOAD BRANDS
  =============================== */
  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await auto.list("phone_brands");
        setBrands(data);
      } catch (err) {
        console.error("Failed to load brands", err);
      }
    };

    loadBrands();
  }, []);

  /* ===============================
     CLEANUP PREVIEW URL
  =============================== */
  useEffect(() => {
    return () => {
      if (cardPreview) {
        URL.revokeObjectURL(cardPreview);
      }
    };
  }, [cardPreview]);

  return (
    <section className="p-6 space-y-6 bg-white border rounded-lg">
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">
          Basic Information
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Identity, variants, and listing image
        </p>
      </div>

      {/* CORE FIELDS */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium">
            Brand
          </label>
          <select
            value={form.brandId ?? ""}
            onChange={(e) =>
              update(
                "brandId",
                e.target.value
                  ? Number(e.target.value)
                  : null
              )
            }
            className="w-full px-3 py-2 mt-1 border rounded-lg"
          >
            <option value="">Select brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        {/* Model Name */}
        <div>
          <label className="block text-sm font-medium">
            Model Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              update("name", e.target.value)
            }
            className="w-full px-3 py-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium">
            Slug
          </label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) =>
              update("slug", e.target.value)
            }
            className="w-full px-3 py-2 mt-1 border rounded-lg"
          />
        </div>
      </div>

      {/* CARD IMAGE */}
      <div>
        <label className="block text-sm font-medium">
          Card Image
        </label>
        <p className="text-xs text-gray-500">
          Used in product listings
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setCardFile(file);

            if (file) {
              setCardPreview(
                URL.createObjectURL(file)
              );
            } else {
              setCardPreview(null);
            }
          }}
          className="mt-2"
        />

        {cardFile && (
          <p className="mt-1 text-xs text-gray-500">
            Selected: {cardFile.name}
          </p>
        )}

        {cardPreview && (
          <div className="mt-3">
            <p className="mb-1 text-xs text-gray-500">
              Preview
            </p>
            <img
              src={cardPreview}
              alt="Card preview"
              className="object-cover w-40 h-40 border rounded-lg"
            />
          </div>
        )}
      </div>

      {/* COLORS */}
      <div>
        <label className="block text-sm font-medium">
          Colors
        </label>
        <p className="text-xs text-gray-500">
          Comma separated (e.g. Black, Blue)
        </p>
        <input
          type="text"
          value={form.colors}
          onChange={(e) =>
            update("colors", e.target.value)
          }
          className="w-full px-3 py-2 mt-1 border rounded-lg"
        />
      </div>

      {/* VARIANTS */}
      <div>
        <label className="block text-sm font-medium">
          Variants
        </label>
        <p className="text-xs text-gray-500">
          Comma separated (e.g. 8GB/128GB)
        </p>
        <input
          type="text"
          value={form.variants}
          onChange={(e) =>
            update("variants", e.target.value)
          }
          className="w-full px-3 py-2 mt-1 border rounded-lg"
        />
      </div>
    </section>
  );
}
