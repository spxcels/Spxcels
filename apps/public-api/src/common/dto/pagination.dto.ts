import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({
    example: 1,
    description: 'Current page.',
  })
  page!: number;

  @ApiProperty({
    example: 20,
    description: 'Items per page.',
  })
  limit!: number;

  @ApiProperty({
    example: 156,
    description: 'Total number of items.',
  })
  total!: number;

  @ApiProperty({
    example: 8,
    description: 'Total number of pages.',
  })
  totalPages!: number;
}
