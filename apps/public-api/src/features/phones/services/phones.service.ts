import { Injectable, NotFoundException } from '@nestjs/common';

import { PhoneDetailsDto } from '../dto/phone-details.dto';
import { PhoneListItemDto } from '../dto/phone-list-item.dto';
import { PhoneListResponseDto } from '../dto/phone-list-response.dto';
import { PhoneQueryDto } from '../dto/phone-query.dto';
import { PhonesRepository } from '../repositories/phones.repository';

@Injectable()
export class PhonesService {
  constructor(private readonly phonesRepository: PhonesRepository) {}

  async findAll(query: PhoneQueryDto): Promise<PhoneListResponseDto> {
    const { items, total } = await this.phonesRepository.findAll(query);

    return {
      items: items.map(
        (phone): PhoneListItemDto => ({
          id: phone.id,
          name: phone.name,
          slug: phone.slug,
          cardImage: phone.cardImage,
          brand: {
            id: phone.brand.id,
            name: phone.brand.name,
            slug: phone.brand.slug,
          },
        }),
      ),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async findBySlug(slug: string): Promise<PhoneDetailsDto> {
    const phone = await this.phonesRepository.findBySlug(slug);

    if (!phone) {
      throw new NotFoundException(`Phone "${slug}" not found.`);
    }

    return {
      id: phone.id,
      name: phone.name,
      slug: phone.slug,

      brand: {
        id: phone.brand.id,
        name: phone.brand.name,
        slug: phone.brand.slug,
      },

      cardImage: phone.cardImage,

      colors: phone.colors,
      variants: phone.variants,

      specs: phone.specs?.specs as Record<string, unknown> | null,

      media: phone.media.map((item) => ({
        id: item.id,
        url: item.url,
        type: item.type,
        isPrimary: item.isPrimary,
        order: item.order,
        alt: item.alt,
      })),

      affiliateLinks: phone.affiliates.map((item) => ({
        store: item.store,
        url: item.url,
        price: item.price?.toString() ?? null,
        currency: item.currency,
      })),
    };
  }
}
