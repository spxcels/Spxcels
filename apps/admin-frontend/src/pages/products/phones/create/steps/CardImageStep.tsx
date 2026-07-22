import {
  useEffect,
  useRef,
  useState,
} from "react";

import ImageDropzone from "@/pages/products/phones/card-image/components/ImageDropzone";
import ImagePreview from "@/pages/products/phones/card-image/components/ImagePreview";
import UploadActions from "@/pages/products/phones/card-image/components/UploadActions";

type CardImageStepProps = {
  image: File | null;
  onImageChange: (
    file: File | null,
  ) => void;
};

export default function CardImageStep({
  image,
  onImageChange,
}: CardImageStepProps) {
  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }

    const url =
      URL.createObjectURL(image);

    setPreviewUrl(url);

    return () =>
      URL.revokeObjectURL(url);
  }, [image]);

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function handleSelect(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    onImageChange(file);
  }

  function handleRemove() {
    onImageChange(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-8">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleSelect}
      />

      {!previewUrl && (
        <ImageDropzone
          onClick={openFilePicker}
        />
      )}

      <ImagePreview
        src={previewUrl}
      />

      <UploadActions
        canSave={false}
        canRemove={!!previewUrl}
        showSaveButton={false}
        onReplace={openFilePicker}
        onRemove={handleRemove}
        onSave={() => {}}
      />
    </div>
  );
}