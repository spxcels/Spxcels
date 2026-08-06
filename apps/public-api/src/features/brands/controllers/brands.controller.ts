import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { BrandListItemDto } from '../dto/brand-list-item.dto';
import { BrandsService } from '../services/brands.service';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  @ApiOperation({
    summary: 'List brands',
    description: 'Retrieve all publicly available phone brands.',
  })
  @ApiOkResponse({
    description: 'Brand list retrieved successfully.',
    type: BrandListItemDto,
    isArray: true,
  })
  async findAll(): Promise<BrandListItemDto[]> {
    return this.brandsService.findAll();
  }
}
