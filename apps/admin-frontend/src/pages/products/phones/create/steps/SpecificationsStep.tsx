import ImportSpecificationsForm from "@/pages/products/phones/spec-organizer/components/ImportSpecificationsForm";

type SpecificationsStepProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SpecificationsStep({
  value,
  onChange,
}: SpecificationsStepProps) {
  return (
    <ImportSpecificationsForm
      rawSpecifications={value}
      onChange={onChange}
      onCancel={() => {}}
      onSave={() => {}}
      isOrganizing={false}
    />
  );
}