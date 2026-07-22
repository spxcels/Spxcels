import TablePage from "@/pages/developer/tables";

export default function SpecsTable() {
  return (
    <TablePage
      table="phone_specs"
      title="Specs"
      fields={[
        {
          name: "phone_model_id",
          label: "Phone Model",
          type: "number",
        },
        {
          name: "key",
          label: "Spec Key",
          type: "text",
        },
        {
          name: "value",
          label: "Spec Value",
          type: "text",
        },
      ]}
    />
  );
}
