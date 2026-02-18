export default function Section({
  children,
  className = "",
  layered = false,
}: {
  children: React.ReactNode;
  className?: string;
  layered?: boolean;
}) {
  return (
    <section
      className={`py-16 ${
        layered
          ? "bg-muted/30 backdrop-blur-sm"
          : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
