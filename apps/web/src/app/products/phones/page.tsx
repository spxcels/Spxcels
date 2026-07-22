import { getPhones } from "@/features/phones/api";
import PhonesPage from "@/features/phones/pages/PhonesPage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { brands, models } = await getPhones();

  return (
    <PhonesPage
      brands={brands}
      models={models}
    />
  );
}