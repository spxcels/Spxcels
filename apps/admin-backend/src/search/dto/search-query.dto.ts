import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class SearchQueryDto {
  @IsString()
  @Transform(({ value }: { value: unknown }) =>
    typeof value === "string" ? value.trim() : "",
  )
  query!: string;

  @IsOptional()
  @Transform(({ value }: { value: unknown }) =>
    value !== undefined ? Number(value) : 8,
  )
  @IsInt()
  @Min(1)
  @Max(20)
  limit = 8;
}