import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import PageHeader from "../components/PageHeader";
import WorkspaceCard from "../components/WorkspaceCard";

import { useModel } from "@/hooks/useModel";

export default function PhoneEditorPage() {
  const navigate = useNavigate();

  const { modelId = "new" } = useParams();

  const [searchParams] = useSearchParams();

  const brandId = Number(
    searchParams.get("brand"),
  );

  const isNewModel =
    modelId === "new";

  const {
    data: model,
  } = useModel(
    isNewModel
      ? undefined
      : Number(modelId),
  );

  const phoneBasePath =
    "/admin/products/phones";

  const modelName =
    isNewModel
      ? "New Phone Model"
      : model?.name ??
        "Phone Model";

  const modelDescription =
    isNewModel
      ? "Create a new phone model and complete its information."
      : `Manage ${model?.name ?? "this phone"} and its content.`;

  const workspaceCards = [
    {
      title:
        "Basic Information",
      description:
        "Name, slug, colors and variants.",
      status:
        model
          ? "complete"
          : "pending",
      path: `${phoneBasePath}/basic-info/${modelId}?brand=${brandId}`,
    },

    {
      title:
        "Specifications",
      description:
        "Import, organize and manage raw and structured specifications.",
      status:
        model?.hasSpecifications
          ? "complete"
          : "pending",
      path: `${phoneBasePath}/spec-organizer/${modelId}?brand=${brandId}`,
    },

    {
      title:
        "Card Image",
      description:
        "Manage the primary phone image.",
      status:
        model?.hasCardImage
          ? "complete"
          : "pending",
      path: `${phoneBasePath}/card-image/${modelId}?brand=${brandId}`,
    },

    {
      title:
        "Media Gallery",
      description:
        "Manage additional images.",
      status: "pending",
      path: `${phoneBasePath}/model/${modelId}/media?brand=${brandId}`,
    },

    {
      title:
        "Affiliate Links",
      description:
        "Amazon, Flipkart and other affiliate links.",
      status: "pending",
      path: `${phoneBasePath}/model/${modelId}/affiliates?brand=${brandId}`,
    },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <PageHeader
        title={modelName}
        description={
          modelDescription
        }
        onBack={() =>
          navigate(
            brandId
              ? `${phoneBasePath}/models?brand=${brandId}`
              : phoneBasePath,
          )
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        {workspaceCards.map(
          (card) => (
            <WorkspaceCard
              key={card.title}
              title={card.title}
              description={
                card.description
              }
              status={card.status}
              onClick={() =>
                navigate(card.path)
              }
            />
          ),
        )}
      </div>
    </div>
  );
}