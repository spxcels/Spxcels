/**
 * Generic phone specification structure.
 *
 * The organizer stores specifications grouped into sections,
 * with each section containing key/value fields.
 */

export interface PhoneSpecificationField {
  label: string;
  value: string | string[] | null;
}

export interface PhoneSpecificationSection {
  title: string;
  fields: PhoneSpecificationField[];
}

export interface PhoneSpecs {
  sections: PhoneSpecificationSection[];
}

/**
 * Compact specification used throughout the UI.
 *
 * These are generated from the full specifications and are
 * displayed in product cards, hero sections, search results,
 * comparisons, and related products.
 */
export interface QuickSpec {
  label: string;
  value: string;
  subtitle?: string;
}