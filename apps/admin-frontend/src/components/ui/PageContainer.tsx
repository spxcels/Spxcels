import type { ReactNode } from "react";
import clsx from "clsx";

type PageContainerProps = {
  children: ReactNode;

  className?: string;

  /**
   * Default: max-w-7xl
   */
  size?: "md" | "lg" | "xl" | "full";
};

const sizes = {
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export default function PageContainer({
  children,
  className,
  size = "xl",
}: PageContainerProps) {
  return (
    <section
      className={clsx(
        "w-full",
        "mx-auto",
        sizes[size],
        "space-y-6",
        className,
      )}
    >
      {children}
    </section>
  );
}