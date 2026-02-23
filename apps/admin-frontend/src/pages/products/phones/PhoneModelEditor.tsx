import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { auto } from "@/api/auto";
import { getPhoneSpecs, savePhoneSpecs } from "@/api/phoneSpecs";
import { BasicInfoSection, SpecsSection } from "./new/sections";
import type { PhoneSpecsDraft } from "./new/sections/SpecsSection";

export default function PhoneModelEditor() {
  const navigate = useNavigate();
  const { modelId } = useParams<{ modelId: string }>();
  const [searchParams] = useSearchParams();

  const numericModelId = modelId ? Number(modelId) : null;
  const isEdit =
    numericModelId !== null && !Number.isNaN(numericModelId);

  const brandIdFromQuery = searchParams.get("brandId");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    brandId: brandIdFromQuery
      ? Number(brandIdFromQuery)
      : (null as number | null),
    name: "",
    slug: "",
    colors: "",
    variants: "",
  });

  /* ⭐ IMPORTANT — correct default shape */
  const [specs, setSpecs] = useState<PhoneSpecsDraft>({
    specs: { sections: [] },
  });

  /* ========================= LOAD ========================= */

  useEffect(() => {
    if (!isEdit || numericModelId === null) {
      setLoading(false);
      return;
    }

    const load = async () => {
      try {
        const model = await auto.get(
          "phone_models",
          numericModelId
        );

        setForm({
          brandId: model.brandId ?? null,
          name: model.name ?? "",
          slug: model.slug ?? "",
          colors: (model.colors ?? []).join(", "),
          variants: (model.variants ?? []).join(", "),
        });

        const specsData = await getPhoneSpecs(
          numericModelId
        );

        /* ⭐ FIXED — extract ONLY specs */
        setSpecs({
          specs: specsData?.specs ?? {
            sections: [],
          },
        });
      } catch (err) {
        console.error("Failed to load phone model", err);
        alert("Failed to load phone model");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [isEdit, numericModelId]);

  /* ========================= HELPERS ========================= */

  const updateForm = (
    key: keyof typeof form,
    value: any
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateSpecs = <
    K extends keyof PhoneSpecsDraft
  >(
    key: K,
    value: PhoneSpecsDraft[K]
  ) => {
    setSpecs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const normalizeList = (value: string) =>
    value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

  /* ========================= SAVE ========================= */

  const submit = async () => {
    if (!form.brandId || !numericModelId) {
      alert("Brand is required");
      return;
    }

    setSaving(true);

    try {
      await auto.update(
        "phone_models",
        numericModelId,
        {
          brandId: form.brandId,
          name: form.name.trim(),
          slug: form.slug.trim(),
          colors: normalizeList(form.colors),
          variants: normalizeList(form.variants),
        }
      );

      await savePhoneSpecs(
        numericModelId,
        specs
      );

      navigate("/admin/products/phones");
    } catch (err) {
      console.error("Save failed", err);
      alert("Failed to save phone model");
    } finally {
      setSaving(false);
    }
  };

  /* ========================= DELETE ========================= */

  const remove = async () => {
    if (!numericModelId) return;
    if (!confirm("Delete this model?"))
      return;

    try {
      await auto.remove(
        "phone_models",
        numericModelId
      );
      navigate("/admin/products/phones");
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete model");
    }
  };

  /* ========================= UI ========================= */

  if (loading) {
    return (
      <div className="text-sm text-gray-500">
        Loading…
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      <button
        onClick={() =>
          navigate("/admin/products/phones")
        }
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-semibold">
        Edit Phone Model
      </h1>

      {/* BASIC INFO */}
      <BasicInfoSection
        form={form}
        update={updateForm}
        cardFile={null}
        setCardFile={() => {}}
        cardPreview={null}
        setCardPreview={() => {}}
      />

      {/* SPECS BUILDER */}
      <SpecsSection
        specs={specs}
        update={updateSpecs}
      />

      {/* MEDIA & AFFILIATES */}
      {numericModelId && (
        <div className="flex flex-wrap gap-4 pt-4 border-t">
          <button
            onClick={() =>
              navigate(
                `/admin/products/phones/model/${numericModelId}/card-image`
              )
            }
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Manage Card Image
          </button>

          <button
            onClick={() =>
              navigate(
                `/admin/products/phones/model/${numericModelId}/media`
              )
            }
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Manage Media Gallery
          </button>

          <button
            onClick={() =>
              navigate(
                `/admin/products/phones/model/${numericModelId}/affiliates`
              )
            }
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Manage Affiliates
          </button>
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex gap-3">
        <button
          onClick={submit}
          disabled={saving}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>

        <button
          onClick={remove}
          className="px-4 py-2 text-red-600 border rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}