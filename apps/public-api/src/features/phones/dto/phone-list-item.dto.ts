import { ApiProperty } from '@nestjs/swagger';

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
    description: 'SEO-friendly unique phone slug.',
  })
  slug!: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/your-cloud/image/upload/spex/phones/apple/apple-iphone-17-pro-max.webp',
    nullable: true,
    description: 'Phone card image displayed in listings.',
  })
  cardImage!: string | null;

  @ApiProperty({
    example: ['Silver', 'Cosmic Orange', 'Deep Blue'],
    description: 'Available color options.',
    type: [String],
  })
  colors!: string[];

  @ApiProperty({
    example: ['256GB 12GB RAM', '512GB 12GB RAM', '1TB 12GB RAM'],
    description: 'Available storage and memory variants.',
    type: [String],
  })
  variants!: string[];
}
