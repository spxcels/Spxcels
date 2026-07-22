type StepNavigationProps = {
  isFirstStep: boolean;
  isLastStep: boolean;

  canContinue?: boolean;
  isSubmitting?: boolean;

  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
};

export default function StepNavigation({
  isFirstStep,
  isLastStep,
  canContinue = true,
  isSubmitting = false,
  onPrevious,
  onNext,
  onFinish,
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-2">

      {/* LEFT */}

      <div>
        {!isFirstStep && (
          <button
            type="button"
            onClick={onPrevious}
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-6 text-sm font-medium transition border h-11 rounded-xl border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
        )}
      </div>

      {/* RIGHT */}

      {isLastStep ? (
        <button
          type="button"
          onClick={onFinish}
          disabled={!canContinue || isSubmitting}
          className="inline-flex items-center justify-center px-6 text-sm font-semibold text-white transition h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Finishing..." : "Finish"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue || isSubmitting}
          className="inline-flex items-center justify-center px-6 text-sm font-semibold text-white transition h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      )}

    </div>
  );
}