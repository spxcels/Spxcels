import { ApiProperty } from '@nestjs/swagger';

export class PhoneBrandDto {
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
