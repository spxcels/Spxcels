import TablePage from "@/pages/developer/tables";

export default function AffiliateLinksTable() {
  return (
    <TablePage
      table="affiliate_links"
      title="Affiliate Links"
      fields={[
        {
          name: "phone_model_id",
          label: "Phone Model",
          type: "number",
        },
        {
          name: "store_name",
          label: "Store Name",
          type: "text",
        },
        {
          name: "url",
          label: "Affiliate URL",
          type: "text",
        },
        {
          name: "price",
          label: "Price",
          type: "number",
        },
      ]}
    />
  );
}
