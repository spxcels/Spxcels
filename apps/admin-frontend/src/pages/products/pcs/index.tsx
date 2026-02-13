import EmptyState from "@/components/EmptyState";

export default function PCsIndex() {
  return (
    <EmptyState
      title="PCs"
      description="No PCs configured yet."
      actionLabel="Create PC"
      onAction={() => alert("PC builder coming soon")}
    />
  );
}
