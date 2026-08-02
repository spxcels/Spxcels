import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { PhoneListItemDto } from '../dto/phone-list-item.dto';
import { PhonesService } from '../services/phones.service';

@ApiTags('Phones')
@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all phones',
    description: 'Returns a list of all available phone models.',
  })
  @ApiOkResponse({
    description: 'Phone list retrieved successfully.',
    type: PhoneListItemDto,
    isArray: true,
  })
  async findAll(): Promise<PhoneListItemDto[]> {
    return this.phonesService.findAll();
  }
}
