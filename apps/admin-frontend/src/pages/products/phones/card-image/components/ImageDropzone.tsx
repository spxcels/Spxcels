import { ImagePlus } from "lucide-react";

type ImageDropzoneProps = {
  onClick: () => void;
};

export default function ImageDropzone({
  onClick,
}: ImageDropzoneProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-72 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900 transition-all duration-200 hover:border-violet-500 hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-400">
        <ImagePlus size={32} />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold text-white">
          Upload Card Image
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Click to select a PNG, JPG or WEBP image
        </p>
      </div>
    </button>
  );
}