import EmptyState from "@/components/ui/EmptyState";

export default function PCsIndex() {
  return (
    <EmptyState
      title="PCs"
      description="No PCs configured yet."
      buttonText="Create PC"
      onAction={() => alert("PC builder coming soon")}
    />
  );
}