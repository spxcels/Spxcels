import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBrands } from "@/hooks/useBrands";
import { useCreateBrand } from "@/hooks/useCreateBrand";
import { useDeleteBrand } from "@/hooks/useDeleteBrand";

import PhoneHeader from "../components/PhoneHeader";
import SearchBar from "../components/SearchBar";

import BrandGrid from "./components/BrandGrid";
import CreateBrandModal from "./components/CreateBrandModal";

export default function BrandsPage() {
  const navigate = useNavigate();

  const [brandSearch, setBrandSearch] =
    useState("");

  const [openCreateBrand, setOpenCreateBrand] =
    useState(false);

  const createBrand =
    useCreateBrand();

  const deleteBrand =
    useDeleteBrand();

  const {
    data: brands = [],
    isLoading,
    isError,
  } = useBrands();

  const filteredBrands = useMemo(() => {
    if (!brandSearch.trim()) {
      return brands;
    }

    const keyword =
      brandSearch.toLowerCase();

    return brands.filter((brand) =>
      brand.name
        .toLowerCase()
        .includes(keyword),
    );
  }, [brands, brandSearch]);

  if (isLoading) {
    return (
      <div className="p-6">
        Loading brands...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load brands.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PhoneHeader
        onCreateBrand={() =>
          setOpenCreateBrand(true)
        }
      />

      <SearchBar
        value={brandSearch}
        onChange={setBrandSearch}
      />

      <BrandGrid
        brands={filteredBrands.map(
          (brand) => ({
            id: brand.id,
            name: brand.name,
            modelCount:
              brand.modelCount,
            models: brand.models,
          }),
        )}
        onOpenBrand={(id) =>
          navigate(
            `/admin/products/phones/models?brand=${id}`,
          )
        }
        onDeleteBrand={async (id) => {
          try {
            await deleteBrand.mutateAsync(
              id,
            );
          } catch (error) {
            console.error(error);

            alert(
              "Failed to delete brand.",
            );
          }
        }}
      />

      <CreateBrandModal
        open={openCreateBrand}
        onClose={() =>
          setOpenCreateBrand(false)
        }
        onCreate={async (data) => {
          try {
            await createBrand.mutateAsync(
              data,
            );

            setOpenCreateBrand(false);
          } catch (error) {
            console.error(error);

            alert(
              "Failed to create brand.",
            );
          }
        }}
      />
    </div>
  );
}