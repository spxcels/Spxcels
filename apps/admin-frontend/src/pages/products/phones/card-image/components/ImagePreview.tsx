import { ImageOff } from "lucide-react";

type ImagePreviewProps = {
  src: string | null;
};

export default function ImagePreview({
  src,
}: ImagePreviewProps) {
  return (
    <div className="overflow-hidden border rounded-2xl border-zinc-800 bg-zinc-900">
      {src ? (
        <img
          src={src}
          alt="Phone Card Image"
          draggable={false}
          className="h-[420px] w-full object-contain bg-zinc-950 transition-opacity duration-300"
        />
      ) : (
        <div className="flex h-[420px] flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)] text-zinc-600">
          <ImageOff size={48} />

          <p className="text-sm">
            No card image selected
          </p>
        </div>
      )}
    </div>
  );
}