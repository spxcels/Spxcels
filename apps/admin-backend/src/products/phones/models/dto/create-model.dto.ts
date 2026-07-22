import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateModelDto {
  @IsString()
  name!: string;

  @IsString()
  slug!: string;

  @IsInt()
  brandId!: number;

  @IsOptional()
  @IsString()
  sourceModelId?: string;

  @IsOptional()
  @IsString()
  sourceUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  colors?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variants?: string[];

  @IsOptional()
  @IsString()
  cardImage?: string;
}