import { PartialType } from "@nestjs/mapped-types";

import { CreatePhoneSpecDto } from "./create-phone-spec.dto";

export class UpdatePhoneSpecDto extends PartialType(
  CreatePhoneSpecDto,
) {}