import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auto } from "@/api/auto";

/* =========================
   TYPES
========================= */

type PhoneBrand = {
  id: number;
  name: string;
};

type PhoneModel = {
  id: number;
  name: string;
  brandId: number;
  image?: string | null;
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

  const [brands, setBrands] = useState<PhoneBrand[]>([]);
  const [models, setModels] = useState<PhoneModel[]>([]);
  const [specs, setSpecs] = useState<PhoneSpecs[]>([]);
  const [media, setMedia] = useState<PhoneMedia[]>([]);
  const [affiliates, setAffiliates] =
    useState<AffiliateLink[]>([]);

  const [selectedBrandId, setSelectedBrandId] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(true);

  // Add brand modal
  const [showBrandModal, setShowBrandModal] =
    useState(false);
  const [newBrandName, setNewBrandName] = useState("");

  /* =========================
     LOAD DATA
  ========================= */

  const loadBrands = async () => {
    const data = await auto.list("phone_brands");
    setBrands(data);
  };

  useEffect(() => {
    async function loadData() {
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
      setLoading(false);
    }

    loadData();
  }, []);

  /* =========================
     CREATE BRAND
  ========================= */

  const createBrand = async () => {
    if (!newBrandName.trim()) return;

    const slug = newBrandName
      .toLowerCase()
      .replace(/\s+/g, "-");

    const created = await auto.create("phone_brands", {
      name: newBrandName.trim(),
      slug,
    });

    setShowBrandModal(false);
    setNewBrandName("");

    await loadBrands();
    setSelectedBrandId(created.id);
  };

  if (loading) {
    return <div>Loading…</div>;
  }

  const brand = brands.find(
    (b) => b.id === selectedBrandId
  );

  const brandModels = models.filter(
    (m) => m.brandId === selectedBrandId
  );

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          {selectedBrandId && (
            <button
              onClick={() => setSelectedBrandId(null)}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Change brand
            </button>
          )}

          <h1 className="mt-1 text-2xl font-semibold">
            {brand?.name ?? "Phones"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Select a brand to manage phone models
          </p>
        </div>

        {selectedBrandId && (
          <button
            onClick={() =>
              navigate("/admin/products/phones/new", {
                state: { brandId: selectedBrandId },
              })
            }
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
          >
            + Add Model
          </button>
        )}
      </div>

      {/* BRAND SELECT */}
      {!selectedBrandId && (
        <select
          className="w-full max-w-md px-3 py-2 border rounded-lg"
          value=""
          onChange={(e) => {
            const value = e.target.value;

            if (value === "__add_brand__") {
              setShowBrandModal(true);
              return;
            }

            setSelectedBrandId(
              value ? Number(value) : null
            );
          }}
        >
          <option value="">Select brand</option>

          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}

          <option value="__add_brand__">
            + Add Brand
          </option>
        </select>
      )}

      {/* MODEL LIST */}
      {selectedBrandId && (
        <div className="mt-6 space-y-4">
          {brandModels.map((model) => {
            const hasSpecs = specs.some(
              (s) => s.modelId === model.id
            );

            const mediaCount = media.filter(
              (m) => m.modelId === model.id
            ).length;

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
                  <p className="font-medium">
                    {model.name}
                  </p>

                  <div className="flex gap-2 mt-2 text-xs">
                    <Status
                      ok={hasSpecs}
                      label="Specs"
                    />
                    <Status
                      ok={Boolean(model.image)}
                      label="Card Image"
                    />
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
      )}

      {/* ADD BRAND MODAL */}
      {showBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg">
            <h3 className="text-lg font-semibold">
              Add Brand
            </h3>

            <input
              value={newBrandName}
              onChange={(e) =>
                setNewBrandName(e.target.value)
              }
              placeholder="Brand name"
              className="w-full px-3 py-2 mt-3 border rounded-lg"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowBrandModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={createBrand}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
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
