import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { useBrand } from "@/hooks/useBrand";
import { useModel } from "@/hooks/useModel";
import { useCreateModel } from "@/hooks/useCreateModel";
import { useUpdateModel } from "@/hooks/useUpdateModel";

import PageHeader from "../components/PageHeader";

import BasicInfoForm from "./components/BasicInfoForm";
import SaveBar from "./components/SaveBar";

export default function BasicInfoPage() {
  const navigate = useNavigate();

  const { modelId = "new" } = useParams();

  const isNewModel = modelId === "new";

  const [searchParams] =
    useSearchParams();

  const brandId = Number(
    searchParams.get("brand"),
  );

  const { data: brand } =
    useBrand(brandId);

  const { data: model } =
    useModel(
      !isNewModel
        ? Number(modelId)
        : undefined,
    );

  const createModel =
    useCreateModel();

  const updateModel =
    useUpdateModel();

  const [name, setName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [newColor, setNewColor] =
    useState("");

  const [
    newVariant,
    setNewVariant,
  ] = useState("");

  const [colors, setColors] =
    useState<string[]>([]);

  const [
    variants,
    setVariants,
  ] = useState<string[]>([]);

  /* ==========================================
     LOAD MODEL
  ========================================== */

  useEffect(() => {
    if (!model || isNewModel) {
      return;
    }

    setName(model.name);
    setSlug(model.slug);
    setColors(model.colors ?? []);
    setVariants(model.variants ?? []);
  }, [model, isNewModel]);

  /* ==========================================
     AUTO SLUG
  ========================================== */

  useEffect(() => {
    if (!isNewModel) {
      return;
    }

    setSlug(
      name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-"),
    );
  }, [name, isNewModel]);

  /* ==========================================
     COLORS
  ========================================== */

  const addColor = () => {
    if (!newColor.trim()) {
      return;
    }

    setColors((prev) => [
      ...prev,
      newColor.trim(),
    ]);

    setNewColor("");
  };

  /* ==========================================
     VARIANTS
  ========================================== */

  const addVariant = () => {
    if (!newVariant.trim()) {
      return;
    }

    setVariants((prev) => [
      ...prev,
      newVariant.trim(),
    ]);

    setNewVariant("");
  };

  /* ==========================================
     SAVE
  ========================================== */

  const handleSave =
    async () => {
      if (!name.trim()) {
        alert(
          "Phone name is required.",
        );
        return;
      }

      if (!slug.trim()) {
        alert(
          "Slug is required.",
        );
        return;
      }

      try {
        if (isNewModel) {
          const created =
            await createModel.mutateAsync(
              {
                name,
                slug,
                brandId,
                colors,
                variants,
              },
            );

          navigate(
            `/admin/products/phones/editor/${created.id}?brand=${brandId}`,
          );

          return;
        }

        await updateModel.mutateAsync({
          id: Number(modelId),

          data: {
            name,
            slug,
            colors,
            variants,
          },
        });

        alert(
          "Model updated successfully.",
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to save phone model.",
        );
      }
    };

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <PageHeader
        title={
          isNewModel
            ? brand
              ? `New ${brand.name} Model`
              : "New Phone Model"
            : "Edit Phone Model"
        }
        description="Manage phone identity and general information."
        onBack={() =>
          navigate(
            `/admin/products/phones/editor/${modelId}?brand=${brandId}`,
          )
        }
      />

      <BasicInfoForm
        name={name}
        slug={slug}
        newColor={newColor}
        newVariant={newVariant}
        colors={colors}
        variants={variants}
        onNameChange={setName}
        onSlugChange={setSlug}
        onNewColorChange={
          setNewColor
        }
        onNewVariantChange={
          setNewVariant
        }
        onAddColor={addColor}
        onAddVariant={addVariant}
        onRemoveColor={(color) =>
          setColors((prev) =>
            prev.filter(
              (c) => c !== color,
            ),
          )
        }
        onRemoveVariant={(
          variant,
        ) =>
          setVariants((prev) =>
            prev.filter(
              (v) =>
                v !== variant,
            ),
          )
        }
        phonePlaceholder={
          brand
            ? `${brand.name} Model`
            : "Phone Model"
        }
      />

      <SaveBar
        loading={
          createModel.isPending ||
          updateModel.isPending
        }
        onSave={handleSave}
      />

    </div>
  );
}