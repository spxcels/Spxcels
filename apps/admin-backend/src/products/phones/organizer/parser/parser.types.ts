export interface ParsedVariant {
  model?: string;

  value: string;
}

export interface ParsedField {
  label: string;

  value: string[];

  variants: ParsedVariant[];
}

export interface ParsedSection {
  title: string;

  fields: ParsedField[];
}

export interface ParserResult {
  sections: ParsedSection[];

  warnings: string[];

  errors: string[];
}