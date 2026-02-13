import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auto } from "@/api/auto";

/* =========================
   TYPES (PRISMA-ALIGNED)
========================= */

type PhoneBrand = {
  id: number;
  name: string;
};

type PhoneModel = {
  id: number;
  name: string;
  brandId: number;
  image?: string | null; // ⭐ CARD IMAGE
};

type PhoneSpecs = {
  id: number;
  modelId: number;
};

type PhoneMedia = {
  id: number;
  modelId: number;
};

type AffiliateLink = {
  id: number;
  modelId: number;
};

/* =========================
   PAGE
========================= */

export default function PhonesPage() {
  const navigate = useNavigate();

  /* ---------- DATA ---------- */
  const [brands, setBrands] = useState<PhoneBrand[]>([]);
  const [models, setModels] = useState<PhoneModel[]>([]);
  const [specs, setSpecs] = useState<PhoneSpecs[]>([]);
  const [media, setMedia] = useState<PhoneMedia[]>([]);
  const [affiliates, setAffiliates] = useState<AffiliateLink[]>([]);

  /* ---------- UI STATE ---------- */
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  /* =========================
     LOAD ALL DATA ONCE
  ========================= */

  useEffect(() => {
    async function loadData() {
      try {
        const [
          brandsData,
          modelsData,
          specsData,
          mediaData,
          affiliateData,
        ] = await Promise.all([
          auto.list("phone_brands"),
          auto.list("phone_models"),
          auto.list("phone_specs"),
          auto.list("phone_media"),
          auto.list("affiliate_links"),
        ]);

        setBrands(brandsData);
        setModels(modelsData);
        setSpecs(specsData);
        setMedia(mediaData);
        setAffiliates(affiliateData);
      } catch (error) {
        console.error("Failed to load phone data", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  /* =========================
     LOADING STATE
  ========================= */

  if (loading) {
    return <div className="text-sm text-gray-500">Loading…</div>;
  }

  /* =========================
     BRAND SELECT VIEW
  ========================= */

  if (selectedBrandId === null) {
    return (
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold">Phones</h1>
        <p className="mt-1 text-sm text-gray-500">
          Select a brand to manage phone models
        </p>

        <select
          className="w-full px-3 py-2 mt-4 border rounded-lg"
          value=""
          onChange={(e) =>
            setSelectedBrandId(
              e.target.value ? Number(e.target.value) : null
            )
          }
        >
          <option value="">Select brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  /* =========================
     BRAND DETAIL VIEW
  ========================= */

  const brand = brands.find((b) => b.id === selectedBrandId);

  const brandModels = models.filter(
    (model) => model.brandId === selectedBrandId
  );

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={() => setSelectedBrandId(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Change brand
          </button>

          <h1 className="mt-1 text-2xl font-semibold">
            {brand?.name ?? "Brand"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Product-level overview. Fix missing data directly.
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/admin/products/phones/new", {
              state: { brandId: selectedBrandId },
            })
          }
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          + Add Model
        </button>
      </div>

      {/* MODELS LIST */}
      <div className="space-y-4">
        {brandModels.map((model) => {
          const hasSpecs = specs.some(
            (s) => s.modelId === model.id
          );

          const mediaCount = media.filter(
            (m) => m.modelId === model.id
          ).length;

          const hasCardImage = Boolean(model.image);

          const affiliateCount = affiliates.filter(
            (a) => a.modelId === model.id
          ).length;

          return (
            <div
              key={model.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div
                className="cursor-pointer"
                onClick={() =>
                  navigate(
                    `/admin/products/phones/model/${model.id}`
                  )
                }
              >
                <p className="font-medium">{model.name}</p>

                <div className="flex gap-2 mt-2 text-xs">
                  <Status ok={hasSpecs} label="Specs" />
                  <Status ok={hasCardImage} label="Card Image" />
                  <Status
                    ok={mediaCount > 0}
                    label={`Media (${mediaCount})`}
                  />
                  <Status
                    ok={affiliateCount > 0}
                    label={`Affiliates (${affiliateCount})`}
                  />
                </div>
              </div>

              <div className="flex gap-4 text-sm">
                <button
                  onClick={() =>
                    navigate(
                      `/admin/products/phones/model/${model.id}/media`
                    )
                  }
                  className="text-blue-600 hover:underline"
                >
                  Media
                </button>

                <button
                  onClick={() =>
                    navigate(
                      `/admin/products/phones/model/${model.id}`
                    )
                  }
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================
   STATUS CHIP
========================= */

function Status({
  ok,
  label,
}: {
  ok: boolean;
  label: string;
}) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full ${
        ok
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {label}
    </span>
  );
}
