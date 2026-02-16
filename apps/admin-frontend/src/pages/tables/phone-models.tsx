import TablePage from "@/pages/shared/table";

export default function PhoneModelsTable() {
  return (
    <TablePage
      title="Phone Models"
      table="phone_models"
      fields={[
        {
          name: "name",
          label: "Model Name",
          type: "text",
          required: true,
        },
        {
          name: "brand_id",
          label: "Brand",
          type: "number",
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
        },
        {
          name: "release_year",
          label: "Release Year",
          type: "number",
        },
      ]}
    />
  );
}
