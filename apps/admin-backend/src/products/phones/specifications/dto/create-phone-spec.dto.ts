import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";

/* =====================================================
   VARIANT
===================================================== */

export class PhoneSpecVariantDto {
  @IsString()
  value!: string;

  @IsOptional()
  @IsString()
  model?: string;
}

/* =====================================================
   FIELD
===================================================== */

export class PhoneSpecFieldDto {
  @IsString()
  label!: string;

  @IsArray()
  @IsString({
    each: true,
  })
  value!: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => PhoneSpecVariantDto)
  variants?: PhoneSpecVariantDto[];
}

/* =====================================================
   SECTION
===================================================== */

export class PhoneSpecSectionDto {
  @IsString()
  title!: string;

  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => PhoneSpecFieldDto)
  fields!: PhoneSpecFieldDto[];
}

/* =====================================================
   CREATE PHONE SPECIFICATIONS
===================================================== */

export class CreatePhoneSpecDto {
  @IsInt()
  phoneModelId!: number;

  @IsString()
  raw!: string;

  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => PhoneSpecSectionDto)
  sections!: PhoneSpecSectionDto[];

  @IsArray()
  @IsString({
    each: true,
  })
  warnings!: string[];

  @IsArray()
  @IsString({
    each: true,
  })
  errors!: string[];
}