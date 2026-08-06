import { ApiProperty } from '@nestjs/swagger';

import { PhoneBrandDto } from './phone-brand.dto';

export class PhoneMediaDto {
  @ApiProperty({
    example: 1,
    description: 'Unique media identifier.',
  })
  id!: number;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/your-cloud/image/upload/spex/phones/apple/iphone-17-pro-max/front.webp',
    description: 'Media URL.',
  })
  url!: string;

  @ApiProperty({
    example: 'IMAGE',
    enum: ['IMAGE', 'VIDEO'],
    description: 'Media type.',
  })
  type!: string;

  @ApiProperty({
    example: true,
    description: 'Whether this is the primary media item.',
  })
  isPrimary!: boolean;

  @ApiProperty({
    example: 1,
    nullable: true,
    description: 'Display order.',
  })
  order!: number | null;

  @ApiProperty({
    example: 'Apple iPhone 17 Pro Max Front View',
    nullable: true,
    description: 'Accessible alt text.',
  })
  alt!: string | null;
}

export class AffiliateLinkDto {
  @ApiProperty({
    example: 'AMAZON',
    description: 'Affiliate store.',
  })
  store!: string;

  @ApiProperty({
    example: 'https://www.amazon.in/example',
    description: 'Affiliate URL.',
  })
  url!: string;

  @ApiProperty({
    example: '129999.00',
    nullable: true,
    description: 'Latest known price.',
  })
  price!: string | null;

  @ApiProperty({
    example: 'INR',
    description: 'Currency code.',
  })
  currency!: string;
}

export class PhoneDetailsDto {
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
    description: 'SEO-friendly phone slug.',
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
    description: 'Primary card image.',
  })
  cardImage!: string | null;

  @ApiProperty({
    type: [String],
    example: ['Silver', 'Black', 'Blue'],
    description: 'Available color options.',
  })
  colors!: string[];

  @ApiProperty({
    type: [String],
    example: ['256GB 12GB RAM', '512GB 12GB RAM'],
    description: 'Available storage variants.',
  })
  variants!: string[];

  @ApiProperty({
    description: 'Structured phone specifications.',
    nullable: true,
    additionalProperties: true,
  })
  specs!: Record<string, unknown> | null;

  @ApiProperty({
    type: [PhoneMediaDto],
    description: 'Phone media gallery.',
  })
  media!: PhoneMediaDto[];

  @ApiProperty({
    type: [AffiliateLinkDto],
    description: 'Available affiliate purchase links.',
  })
  affiliateLinks!: AffiliateLinkDto[];
}
