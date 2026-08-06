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
    name: 'q',
    required: true,
    example: 'iphone',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 5,
  })
  @ApiQuery({
    name: 'exclude',
    required: false,
    example: 8,
  })
  @ApiOkResponse({
    type: SearchResultDto,
    isArray: true,
  })
  async search(
    @Query('q') query: string,
    @Query('limit') limit?: string,
    @Query('exclude') exclude?: string,
  ): Promise<SearchResultDto[]> {
    const searchQuery = query?.trim() ?? '';

    if (!searchQuery) {
      return [];
    }

    return this.searchService.search(
      searchQuery,
      Number(limit ?? 5),
      exclude ? Number(exclude) : undefined,
    );
  }
}
