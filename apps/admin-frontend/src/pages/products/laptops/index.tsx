import EmptyState from "@/components/ui/EmptyState";

export default function LaptopsIndex() {
  return (
    <EmptyState
      title="Laptops"
      description="No laptops added yet."
      buttonText="Add Laptop"
      onAction={() => alert("Laptop workflow coming soon")}
    />
  );
}