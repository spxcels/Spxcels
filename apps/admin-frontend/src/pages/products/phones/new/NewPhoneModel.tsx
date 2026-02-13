import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auto } from "@/api/auto";
import api from "@/api/axios";
import {
  BasicInfoSection,
  SpecsSection,
} from "./sections";
import type { PhoneSpecsDraft } from "./sections/SpecsSection";

/* =========================
   TYPES
========================= */

export type PhoneModelDraft = {
  brandId: number | "";
  name: string;
  slug: string;
  colors: string;
  variants: string;
};

/* =========================
   HELPERS
========================= */

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const toArray = (value: string) =>
  value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

/* =========================
   PAGE
========================= */

export default function NewPhoneModel() {
  const navigate = useNavigate();
  const location = useLocation();

  /* ---------- NAV STATE ---------- */
  const preselectedBrandId: number | null =
    location.state?.brandId ?? null;

  /* ---------- FORM STATE ---------- */
  const [form, setForm] = useState<PhoneModelDraft>({
    brandId: "",
    name: "",
    slug: "",
    colors: "",
    variants: "",
  });

  /* ---------- SPECS (PRISMA SHAPE) ---------- */
  const [specs, setSpecs] = useState<PhoneSpecsDraft>({});

  /* ---------- CARD IMAGE ---------- */
  const [cardFile, setCardFile] = useState<File | null>(null);
  const [cardPreview, setCardPreview] =
    useState<string | null>(null);

  const [saving, setSaving] = useState(false);

  /* =========================
     AUTO-SELECT BRAND
  ========================= */

  useEffect(() => {
    if (preselectedBrandId) {
      setForm((prev) => ({
        ...prev,
        brandId: preselectedBrandId,
      }));
    }
  }, [preselectedBrandId]);

  /* =========================
     AUTO-SLUG
  ========================= */

  useEffect(() => {
    if (!form.name) {
      setForm((prev) => ({ ...prev, slug: "" }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      slug: slugify(prev.name),
    }));
  }, [form.name]);

  /* =========================
     CLEANUP PREVIEW URL
  ========================= */

  useEffect(() => {
    return () => {
      if (cardPreview) {
        URL.revokeObjectURL(cardPreview);
      }
    };
  }, [cardPreview]);

  /* =========================
     UPDATE HELPERS
  ========================= */

  const updateForm = <
    K extends keyof PhoneModelDraft
  >(
    key: K,
    value: PhoneModelDraft[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateSpecs = <
    K extends keyof PhoneSpecsDraft
  >(
    key: K,
    value: PhoneSpecsDraft[K]
  ) => {
    setSpecs((prev) => ({ ...prev, [key]: value }));
  };

  /* =========================
     CREATE MODEL
  ========================= */

  const createModel = async () => {
    if (!form.brandId || !form.name) {
      alert("Brand and Model name are required");
      return;
    }

    if (!cardFile) {
      alert("Card image is required");
      return;
    }

    setSaving(true);

    try {
      /* 1️⃣ Create Phone Model */
      const model = await auto.create("phone_models", {
        brandId: Number(form.brandId),
        name: form.name.trim(),
        slug: slugify(form.slug || form.name),
        colors: toArray(form.colors),
        variants: toArray(form.variants),
      });

      /* 2️⃣ Create Phone Specs (ONE row) */
      await auto.create("phone_specs", {
        modelId: model.id,
        ...specs,
      });

      /* 3️⃣ Upload CARD image */
      const formData = new FormData();
      formData.append("file", cardFile);

      await api.post(
        `/admin/models/${model.id}/card-image`,
        formData
      );

      /* 4️⃣ Redirect */
      navigate(
        `/admin/products/phones/model/${model.id}/media`
      );
    } catch (err) {
      console.error("Failed to create phone model", err);
      alert("Failed to create phone model");
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     UI
  ========================= */

  return (
    <div className="max-w-4xl p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Add New Phone Model
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Create model, specifications, and card image
        </p>
      </div>

      {/* BASIC INFO */}
      <BasicInfoSection
        form={form}
        update={updateForm}
        cardFile={cardFile}
        setCardFile={setCardFile}
        cardPreview={cardPreview}
        setCardPreview={setCardPreview}
      />

      {/* SPECS */}
      <SpecsSection
        specs={specs}
        update={updateSpecs}
      />

      {/* ACTIONS */}
      <div className="flex justify-end">
        <button
          disabled={saving}
          onClick={createModel}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Creating..." : "Create Phone Model"}
        </button>
      </div>
    </div>
  );
}
