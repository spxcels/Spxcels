import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";

type WorkspaceCardProps = {
  title: string;
  description: string;
  status?: "complete" | "pending";
  onClick: () => void;
};

export default function WorkspaceCard({
  title,
  description,
  status = "pending",
  onClick,
}: WorkspaceCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 text-left transition-all duration-200 border  rounded-2xl border-zinc-800 bg-zinc-900 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-950/20"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            {description}
          </p>
        </div>

        <ArrowRight
          size={20}
          className="text-violet-400"
        />
      </div>

      <div className="flex items-center gap-2 mt-6">
        {status === "complete" ? (
          <>
            <CheckCircle2
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm text-emerald-400">
              Complete
            </span>
          </>
        ) : (
          <>
            <Clock3
              size={16}
              className="text-amber-400"
            />

            <span className="text-sm text-amber-400">
              Pending
            </span>
          </>
        )}
      </div>
    </button>
  );
}