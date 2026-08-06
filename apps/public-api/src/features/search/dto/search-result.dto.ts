import { ApiProperty } from '@nestjs/swagger';

export class SearchBrandDto {
  @ApiProperty({
    example: 1,
    description: 'Brand identifier.',
  })
  id!: number;

  @ApiProperty({
    example: 'Apple',
    description: 'Brand name.',
  })
  name!: string;

  @ApiProperty({
    example: 'apple',
    description: 'Brand slug.',
  })
  slug!: string;
}

export class SearchResultDto {
  @ApiProperty({
    example: 8,
    description: 'Phone model identifier.',
  })
  id!: number;

  @ApiProperty({
    example: 'Apple iPhone 17 Pro Max',
    description: 'Phone model name.',
  })
  name!: string;

  @ApiProperty({
    example: 'apple-iphone-17-pro-max',
    description: 'Phone model slug.',
  })
  slug!: string;

  @ApiProperty({
    nullable: true,
    example: 'https://res.cloudinary.com/demo/image/upload/iphone.webp',
    description: 'Card image.',
  })
  cardImage!: string | null;

  @ApiProperty({
    type: SearchBrandDto,
    description: 'Phone brand.',
  })
  brand!: SearchBrandDto;
}
