import { ApiProperty } from '@nestjs/swagger';

import { PaginationDto } from '../../../common/dto/pagination.dto';
import { PhoneListItemDto } from './phone-list-item.dto';

export class PhoneListResponseDto {
  @ApiProperty({
    type: [PhoneListItemDto],
    description: 'List of phone models.',
  })
  items!: PhoneListItemDto[];

  @ApiProperty({
    type: PaginationDto,
    description: 'Pagination information.',
  })
  pagination!: PaginationDto;
}
