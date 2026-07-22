import SpecificationsEditor from "@/pages/products/phones/spec-organizer/components/ImportSpecificationsForm";

type SpecificationsStepProps = {
  value: string;

  onChange: (
    value: string,
  ) => void;
};

export default function SpecificationsStep({
  value,
  onChange,
}: SpecificationsStepProps) {
  return (
    <SpecificationsEditor
      value={value}
      onChange={onChange}
    />
  );
}