import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getSpecifications,
  previewSpecifications,
  saveSpecifications,
} from "@/api/organizer";

import type {
  OrganizerResult,
  OrganizerSection,
} from "@/pages/products/phones/spec-organizer/types";

import EmptyState from "./components/EmptyState";
import ImportSpecificationsForm from "./components/ImportSpecificationsForm";
import SpecificationsToolbar from "./components/SpecificationsToolbar";
import SpecificationsViewer from "./components/SpecificationsViewer";

export default function SpecOrganizerPage() {
  const navigate = useNavigate();

  const { modelId } = useParams();

  const [showImportForm, setShowImportForm] =
    useState(false);

  const [rawSpecifications, setRawSpecifications] =
    useState("");

  const [isOrganizing, setIsOrganizing] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [hasChanges, setHasChanges] =
    useState(false);

  const [organizedData, setOrganizedData] =
    useState<OrganizerResult | null>(null);

  /* ==========================================
     LOAD SAVED SPECIFICATIONS
  ========================================== */

  useEffect(() => {
    async function loadSpecifications() {
      if (!modelId) {
        return;
      }

      try {
        const data =
          await getSpecifications(
            Number(modelId),
          );

        if (data) {
          setOrganizedData(data);

          setHasChanges(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadSpecifications();
  }, [modelId]);

  /* ==========================================
     ORGANIZE RAW SPECIFICATIONS
  ========================================== */

  async function handleOrganize() {
    if (!rawSpecifications.trim()) {
      alert(
        "Please paste specifications first.",
      );

      return;
    }

    try {
      setIsOrganizing(true);

      const result =
        await previewSpecifications(
          rawSpecifications,
        );

      setOrganizedData(result);

      // New specifications haven't been saved yet.
      setHasChanges(true);

      setShowImportForm(false);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to organize specifications.",
      );
    } finally {
      setIsOrganizing(false);
    }
  }

  /* ==========================================
     CANCEL IMPORT
  ========================================== */

  function handleCancel() {
    setRawSpecifications("");

    setShowImportForm(false);
  }

  /* ==========================================
     IMPORT AGAIN
  ========================================== */

  function handleImportAgain() {
    if (organizedData) {
      setRawSpecifications(
        organizedData.raw,
      );
    }

    setOrganizedData(null);

    setHasChanges(false);

    setShowImportForm(true);
  }

  /* ==========================================
     UPDATE SECTION
  ========================================== */

  function handleSectionSave(
    section: OrganizerSection,
  ) {
    if (!organizedData) {
      return;
    }

    setOrganizedData({
      ...organizedData,

      sections:
        organizedData.sections.map(
          (currentSection) =>
            currentSection.title ===
            section.title
              ? section
              : currentSection,
        ),
    });

    setHasChanges(true);
  }

  /* ==========================================
     SAVE SPECIFICATIONS
  ========================================== */

  async function handleSaveSpecifications() {
    if (
      !organizedData ||
      !modelId
    ) {
      return;
    }

    try {
      setIsSaving(true);

      await saveSpecifications(
        Number(modelId),
        {
          phoneModelId:
            Number(modelId),

          raw:
            organizedData.raw,

          sections:
            organizedData.sections,

          warnings:
            organizedData.warnings,

          errors:
            organizedData.errors,
        },
      );

      setHasChanges(false);

      alert(
        "Specifications saved successfully.",
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to save specifications.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="pb-24 mx-auto space-y-8 max-w-7xl">
      {/* HEADER */}

      <div>
        <button
          type="button"
          onClick={() =>
            navigate(
              `/admin/products/phones/editor/${modelId}`,
            )
          }
          className="text-sm transition text-zinc-500 hover:text-violet-400"
        >
          ← Back
        </button>

        <h1 className="mt-4 text-4xl font-bold text-white">
          Specifications
        </h1>

        <p className="mt-2 text-zinc-500">
          Import, organize and manage phone
          specifications.
        </p>
      </div>

      {/* EMPTY STATE */}

      {!organizedData &&
        !showImportForm && (
          <EmptyState
            onAddSpecifications={() =>
              setShowImportForm(true)
            }
          />
        )}

      {/* IMPORT FORM */}

      {!organizedData &&
        showImportForm && (
          <ImportSpecificationsForm
            rawSpecifications={
              rawSpecifications
            }
            onChange={
              setRawSpecifications
            }
            onCancel={handleCancel}
            onSave={handleOrganize}
            isOrganizing={
              isOrganizing
            }
          />
        )}

      {/* ORGANIZED SPECIFICATIONS */}

      {organizedData && (
        <>
          <SpecificationsToolbar
            hasChanges={
              hasChanges
            }
            isSaving={
              isSaving
            }
            onImportAgain={
              handleImportAgain
            }
            onSave={
              handleSaveSpecifications
            }
          />

          <SpecificationsViewer
            data={
              organizedData
            }
            onSectionChange={
              handleSectionSave
            }
          />
        </>
      )}
    </div>
  );
}