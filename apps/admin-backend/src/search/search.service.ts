import { Injectable } from "@nestjs/common";

import { ModelsService } from "../products/phones/models/models.service";

import { SearchQueryDto } from "./dto/search-query.dto";
import {
  SearchResponse,
  SearchResultType,
} from "./types";

@Injectable()
export class SearchService {
  constructor(
    private readonly modelsService: ModelsService,
  ) {}

  async search(
    query: SearchQueryDto,
  ): Promise<SearchResponse> {
    const models =
      await this.modelsService.search(
        query.query,
        query.limit,
      );

    return {
      results: models.map((model) => ({
        id: model.id,
        title: model.name,
        subtitle: model.brand.name,
        image: model.cardImage ?? undefined,
        type: SearchResultType.PHONE,
        url: `/products/phones/${model.slug}`,
      })),
    };
  }
}