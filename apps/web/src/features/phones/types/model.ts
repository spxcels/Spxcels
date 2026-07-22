import type { PhoneSpecs, QuickSpec } from "./specs";

export interface Brand {
  id: number;
  name: string;
  slug: string;
}

export interface PhoneModel {
  id: number;
  name: string;
  slug: string;

  brand: Brand;

  cardImage: string | null;

  specs: PhoneSpecs | null;

  colors: string[];
  variants: string[];

  quickSpecs: QuickSpec[];
}