import { Injectable } from '@nestjs/common';

import { SearchResultDto } from '../dto/search-result.dto';
import { SearchRepository } from '../repositories/search.repository';

@Injectable()
export class SearchService {
  constructor(private readonly searchRepository: SearchRepository) {}

  async search(
    query: string,
    limit: number,
    excludeId?: number,
  ): Promise<SearchResultDto[]> {
    const phones = await this.searchRepository.search(query, limit, excludeId);

    return phones.map(
      (phone): SearchResultDto => ({
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
    );
  }
}
