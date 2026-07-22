import {
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateBrandDto {
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  slug?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  gsmarenaSlug?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  specsSource?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  mediaSource?: string;
}