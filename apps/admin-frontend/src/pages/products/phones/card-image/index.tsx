import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ImageDropzone from "./components/ImageDropzone";
import ImagePreview from "./components/ImagePreview";
import UploadActions from "./components/UploadActions";

import { useCardImage } from "@/hooks/useCardImage";
import { useUploadCardImage } from "@/hooks/useUploadCardImage";
import { useDeleteCardImage } from "@/hooks/useDeleteCardImage";

export default function PhoneCardImagePage() {
  const navigate = useNavigate();
  const { modelId } = useParams();

  const phoneModelId = Number(modelId);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { data, isLoading } = useCardImage(phoneModelId);

  const uploadMutation = useUploadCardImage();
  const deleteMutation = useDeleteCardImage();

  const serverImage = data?.cardImage ?? null;

  const imageToDisplay = previewUrl ?? serverImage;

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    if (!selectedFile) return;

    await uploadMutation.mutateAsync({
      modelId: phoneModelId,
      file: selectedFile,
    });

    setSelectedFile(null);
    setPreviewUrl(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemove = async () => {
    if (selectedFile) {
      if (previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }

      setSelectedFile(null);
      setPreviewUrl(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      return;
    }

    if (!serverImage) return;

    await deleteMutation.mutateAsync(phoneModelId);
  };

  if (isLoading) {
    return (
      <div className="py-24 text-center text-zinc-500">
        Loading card image...
      </div>
    );
  }

  return (
    <div className="max-w-6xl pb-24 mx-auto space-y-8">
      <div>
        <button
          type="button"
          onClick={() =>
            navigate(`/admin/products/phones/editor/${modelId}`)
          }
          className="flex items-center gap-2 text-sm transition text-zinc-500 hover:text-violet-400"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="mt-4 text-4xl font-bold text-zinc-50">
          Card Image
        </h1>

        <p className="mt-2 text-zinc-500">
          Upload and manage the primary phone image.
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleSelect}
      />

      {!imageToDisplay && (
        <ImageDropzone
          onClick={openFilePicker}
        />
      )}

      <ImagePreview
        src={imageToDisplay}
      />

      <UploadActions
        canSave={!!selectedFile}
        canRemove={!!imageToDisplay}
        isUploading={uploadMutation.isPending}
        isDeleting={deleteMutation.isPending}
        onReplace={openFilePicker}
        onRemove={handleRemove}
        onSave={handleSave}
      />
    </div>
  );
}