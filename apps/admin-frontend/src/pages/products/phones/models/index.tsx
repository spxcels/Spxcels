import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useBrands } from "@/hooks/useBrands";
import { useModels } from "@/hooks/useModels";
import { useDeleteModel } from "@/hooks/useDeleteModel";

import BrandHeader from "../brands/components/BrandHeader";
import ModelGrid from "./components/ModelGrid";
import ModelSearch from "./components/ModelSearch";

const PHONES_BASE = "/admin/products/phones";

export default function ModelsPage() {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const brandId = Number(
    searchParams.get("brand"),
  );

  const [search, setSearch] =
    useState("");

  const {
    data: brands = [],
  } = useBrands();

  const {
    data: models = [],
    isLoading,
    isError,
  } = useModels(brandId);

  const {
    mutateAsync: deleteModel,
  } = useDeleteModel();

  const brand = brands.find(
    (b) => b.id === brandId,
  );

  const filteredModels =
    useMemo(() => {
      const keyword =
        search.trim().toLowerCase();

      return keyword
        ? models.filter((model) =>
            model.name
              .toLowerCase()
              .includes(keyword),
          )
        : models;
    }, [models, search]);

  const handleDelete = async (
    id: number,
  ) => {
    try {
      await deleteModel(id);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete model.",
      );
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        Loading models...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load models.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <BrandHeader
        brandName={
          brand?.name ?? ""
        }
        modelCount={models.length}
        onBack={() =>
          navigate(PHONES_BASE)
        }
        onCreateModel={() =>
          navigate(
            `${PHONES_BASE}/create?brand=${brandId}`,
          )
        }
      />

      <ModelSearch
        value={search}
        onChange={setSearch}
      />

      <ModelGrid
        models={filteredModels}
        onOpen={(id) =>
          navigate(
            `${PHONES_BASE}/editor/${id}?brand=${brandId}`,
          )
        }
        onDelete={handleDelete}
      />

    </div>
  );
}