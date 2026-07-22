import { useState } from "react";
import { toast } from "sonner";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { useCreateModel } from "@/hooks/useCreateModel";
import { useSavePhoneSpecs } from "@/hooks/useSavePhoneSpecs";
import { useUploadCardImage } from "@/hooks/useUploadCardImage";

import WizardLayout from "./components/WizardLayout";
import StepNavigation from "./components/StepNavigation";
import StepProgress from "./components/StepProgress";

import BasicInfoStep from "./steps/BasicInfoStep";
import SpecificationsStep from "./steps/SpecificationsStep";
import CardImageStep from "./steps/CardImageStep";

export default function CreatePhoneWizardPage() {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const brandId = Number(
    searchParams.get("brand"),
  );

  const createModel =
    useCreateModel();

  const savePhoneSpecs =
    useSavePhoneSpecs();

  const uploadCardImage =
    useUploadCardImage();

  /* ==========================================
     STEP
  ========================================== */

  const [currentStep, setCurrentStep] =
    useState(0);

  const steps = [
    "Basic Information",
    "Specifications",
    "Card Image",
  ];

  const isFirstStep =
    currentStep === 0;

  const isLastStep =
    currentStep ===
    steps.length - 1;

  /* ==========================================
     BASIC INFORMATION
  ========================================== */

  const [name, setName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [newColor, setNewColor] =
    useState("");

  const [newVariant, setNewVariant] =
    useState("");

  const [colors, setColors] =
    useState<string[]>([]);

  const [variants, setVariants] =
    useState<string[]>([]);

  /* ==========================================
     SPECIFICATIONS
  ========================================== */

  const [specifications, setSpecifications] =
    useState("");

  /* ==========================================
     CARD IMAGE
  ========================================== */

  const [cardImage, setCardImage] =
    useState<File | null>(null);

  /* ==========================================
     VALIDATION
  ========================================== */

  const canContinueBasicInfo =
    name.trim() !== "" &&
    slug.trim() !== "" &&
    colors.length > 0 &&
    variants.length > 0;

  const canContinueSpecifications =
    specifications.trim().length > 0;

  const canContinueCardImage =
    cardImage !== null;

  const canContinue =
    currentStep === 0
      ? canContinueBasicInfo
      : currentStep === 1
      ? canContinueSpecifications
      : canContinueCardImage;

  /* ==========================================
     NAME
  ========================================== */

  function handleNameChange(
    value: string,
  ) {
    setName(value);

    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-"),
    );
  }

  /* ==========================================
     COLORS
  ========================================== */

  function addColor() {
    if (!newColor.trim()) {
      return;
    }

    setColors((prev) => [
      ...prev,
      newColor.trim(),
    ]);

    setNewColor("");
  }

  /* ==========================================
     VARIANTS
  ========================================== */

  function addVariant() {
    if (!newVariant.trim()) {
      return;
    }

    setVariants((prev) => [
      ...prev,
      newVariant.trim(),
    ]);

    setNewVariant("");
  }

  /* ==========================================
     NAVIGATION
  ========================================== */

  function handleNext() {
    if (!isLastStep) {
      setCurrentStep(
        (step) => step + 1,
      );
    }
  }

  function handlePrevious() {
    if (!isFirstStep) {
      setCurrentStep(
        (step) => step - 1,
      );
    }
  }

  /* ==========================================
     FINISH
  ========================================== */

  async function handleFinish() {
    try {
      // =====================================
      // CREATE MODEL
      // =====================================

      const model =
        await createModel.mutateAsync({
          name,
          slug,
          brandId,
          colors,
          variants,
        });

      // =====================================
      // SAVE SPECIFICATIONS
      // =====================================

      await savePhoneSpecs.mutateAsync({
        phoneModelId: model.id,
        raw: specifications,
      });

      // =====================================
      // UPLOAD CARD IMAGE
      // =====================================

      if (cardImage) {
        await uploadCardImage.mutateAsync({
          modelId: model.id,
          file: cardImage,
        });
      }

      toast.success(
        "Phone model created successfully.",
      );

      navigate(
        `/admin/products/phones/models?brand=${brandId}`,
        {
          replace: true,
        },
      );
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ??
          "Failed to create phone model.",
      );
    }
  }

  return (
    <WizardLayout
      title="Create Phone Model"
      description="Complete all required steps before creating a new phone model."
      progress={
        <StepProgress
          steps={steps}
          currentStep={currentStep}
        />
      }
      content={
        <>
          {currentStep === 0 && (
            <BasicInfoStep
              name={name}
              slug={slug}
              newColor={newColor}
              newVariant={newVariant}
              colors={colors}
              variants={variants}
              onNameChange={
                handleNameChange
              }
              onSlugChange={
                setSlug
              }
              onNewColorChange={
                setNewColor
              }
              onNewVariantChange={
                setNewVariant
              }
              onAddColor={addColor}
              onAddVariant={
                addVariant
              }
              onRemoveColor={(color) =>
                setColors((prev) =>
                  prev.filter(
                    (c) =>
                      c !== color,
                  ),
                )
              }
              onRemoveVariant={(variant) =>
                setVariants((prev) =>
                  prev.filter(
                    (v) =>
                      v !== variant,
                  ),
                )
              }
            />
          )}

          {currentStep === 1 && (
            <SpecificationsStep
              value={specifications}
              onChange={
                setSpecifications
              }
            />
          )}

          {currentStep === 2 && (
            <CardImageStep
              image={cardImage}
              onImageChange={
                setCardImage
              }
            />
          )}
        </>
      }
      navigation={
        <StepNavigation
          isFirstStep={
            isFirstStep
          }
          isLastStep={
            isLastStep
          }
          canContinue={
            canContinue
          }
          onPrevious={
            handlePrevious
          }
          onNext={handleNext}
          onFinish={
            handleFinish
          }
        />
      }
    />
  );
}