import { notFound } from "next/navigation";

import { getPhone } from "@/features/phones/api";
import PhoneDetailsClient from "@/features/phones/pages/PhoneDetailsClient";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PhonePage({
  params,
}: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const model = await getPhone(slug);

  if (!model) {
    notFound();
  }

  return <PhoneDetailsClient model={model} />;
}