import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { SearchResultDto } from '../dto/search-result.dto';
import { SearchService } from '../services/search.service';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Search phones',
    description: 'Search phone models by name or brand.',
  })
  @ApiQuery({
    name: 'query',
    required: true,
    example: 'iphone',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 8,
  })
  @ApiQuery({
    name: 'exclude',
    required: false,
    example: 8,
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        results: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/SearchResultDto',
          },
        },
      },
    },
  })
  async search(
    @Query('query') query: string,
    @Query('limit') limit?: string,
    @Query('exclude') exclude?: string,
  ): Promise<{ results: SearchResultDto[] }> {
    const searchQuery = query?.trim() ?? '';

    if (!searchQuery) {
      return {
        results: [],
      };
    }

    const results = await this.searchService.search(
      searchQuery,
      Number(limit ?? 8),
      exclude ? Number(exclude) : undefined,
    );

    return {
      results,
    };
  }
}
