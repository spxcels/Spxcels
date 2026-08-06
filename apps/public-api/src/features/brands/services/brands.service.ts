import { Injectable } from '@nestjs/common';

import { BrandListItemDto } from '../dto/brand-list-item.dto';
import { BrandsRepository } from '../repositories/brands.repository';

@Injectable()
export class BrandsService {
  constructor(private readonly brandsRepository: BrandsRepository) {}

  async findAll(): Promise<BrandListItemDto[]> {
    const brands = await this.brandsRepository.findAll();

    return brands.map(
      (brand): BrandListItemDto => ({
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
      }),
    );
  }
}
