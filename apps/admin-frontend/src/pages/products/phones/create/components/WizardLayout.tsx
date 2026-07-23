import type { ReactNode } from "react";

type WizardLayoutProps = {
  title: string;
  description: string;

  progress: ReactNode;
  content: ReactNode;
  navigation: ReactNode;
};

export default function WizardLayout({
  title,
  description,
  progress,
  content,
  navigation,
}: WizardLayoutProps) {
  return (
    <div className="max-w-6xl pb-24 mx-auto space-y-8">
      {/* Header */}

      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-zinc-50">
          {title}
        </h1>

        <p className="text-zinc-400">
          {description}
        </p>
      </div>

      {/* Progress */}

      {progress}

      {/* Step */}

      {content}

      {/* Navigation */}

      {navigation}
    </div>
  );
}