import TablePage from "@/pages/developer/tables";

export default function PhoneMediaTable() {
  return (
    <TablePage
      title="Phone Media"
      table="phone_media"
      fields={[
        {
          name: "phone_model_id",
          label: "Phone Model",
          type: "number",
        },
        {
          name: "type",
          label: "Media Type",
          type: "text",
        },
        {
          name: "url",
          label: "Media URL",
          type: "text",
        },
      ]}
    />
  );
}
