import TablePage from "@/pages/developer/tables";

export default function BrandsTable() {
  return (
    <TablePage
      table="phone_brands"
      title="Brands"
      fields={[
        {
          name: "name",
          label: "Brand Name",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
        },
      ]}
    />
  );
}
