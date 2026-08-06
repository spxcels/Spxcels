import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { PhoneDetailsDto } from '../dto/phone-details.dto';
import { PhoneListResponseDto } from '../dto/phone-list-response.dto';
import { PhoneQueryDto } from '../dto/phone-query.dto';
import { PhonesService } from '../services/phones.service';

@ApiTags('Phones')
@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  @ApiOperation({
    summary: 'List phones',
    description:
      'Retrieve a paginated list of publicly available phone models.',
  })
  @ApiOkResponse({
    description: 'Phone list retrieved successfully.',
    type: PhoneListResponseDto,
  })
  async findAll(@Query() query: PhoneQueryDto): Promise<PhoneListResponseDto> {
    return this.phonesService.findAll(query);
  }

  @Get(':slug')
  @ApiOperation({
    summary: 'Get phone details',
    description: 'Retrieve a phone model by its unique slug.',
  })
  @ApiOkResponse({
    description: 'Phone details retrieved successfully.',
    type: PhoneDetailsDto,
  })
  @ApiNotFoundResponse({
    description: 'Phone not found.',
  })
  async findBySlug(@Param('slug') slug: string): Promise<PhoneDetailsDto> {
    return this.phonesService.findBySlug(slug);
  }
}
