import { Check } from "lucide-react";

type StepProgressProps = {
  steps: string[];
  currentStep: number;
};

export default function StepProgress({
  steps,
  currentStep,
}: StepProgressProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div
            key={step}
            className={`rounded-2xl border p-5 transition-all ${
              isCompleted
                ? "border-emerald-500 bg-emerald-500/10"
                : isActive
                ? "border-violet-500 bg-violet-500/10"
                : "border-zinc-800 bg-zinc-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  isCompleted
                    ? "bg-emerald-500 text-white"
                    : isActive
                    ? "bg-violet-600 text-white"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {isCompleted ? (
                  <Check size={16} />
                ) : (
                  index + 1
                )}
              </div>

              <div>
                <p className="text-xs text-zinc-500">
                  Step {index + 1}
                </p>

                <h3 className="font-medium text-zinc-100">
                  {step}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}