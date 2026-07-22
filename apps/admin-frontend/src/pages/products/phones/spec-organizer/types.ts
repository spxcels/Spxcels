export interface OrganizerVariant {
  model?: string;

  value: string;
}

export interface OrganizerField {
  label: string;

  value: string[];

  variants: OrganizerVariant[];
}

export interface OrganizerSection {
  title: string;

  fields: OrganizerField[];
}

export interface OrganizerResult {
  raw: string;

  sections: OrganizerSection[];

  warnings: string[];

  errors: string[];
}