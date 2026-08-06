import { ApiProperty } from '@nestjs/swagger';

class PhoneBrandDto {
  @ApiProperty({
    example: 1,
    description: 'Unique brand identifier.',
  })
  id!: number;

  @ApiProperty({
    example: 'Apple',
    description: 'Brand name.',
  })
  name!: string;

  @ApiProperty({
    example: 'apple',
    description: 'SEO-friendly brand slug.',
  })
  slug!: string;
}

export class PhoneListItemDto {
  @ApiProperty({
    example: 8,
    description: 'Unique phone model identifier.',
  })
  id!: number;

  @ApiProperty({
    example: 'Apple iPhone 17 Pro Max',
    description: 'Phone model name.',
  })
  name!: string;

  @ApiProperty({
    example: 'apple-iphone-17-pro-max',
    description: 'SEO-friendly phone model slug.',
  })
  slug!: string;

  @ApiProperty({
    type: PhoneBrandDto,
    description: 'Brand information.',
  })
  brand!: PhoneBrandDto;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/your-cloud/image/upload/spex/phones/apple/apple-iphone-17-pro-max.webp',
    nullable: true,
    description: 'Card image displayed in phone listings.',
  })
  cardImage!: string | null;
}
