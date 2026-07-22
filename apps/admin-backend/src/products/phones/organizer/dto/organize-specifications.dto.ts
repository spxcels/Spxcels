import { IsString } from "class-validator";

export class OrganizeSpecificationsDto {
  @IsString()
  raw!: string;
}