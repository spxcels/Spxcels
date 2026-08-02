import { Injectable } from '@nestjs/common';

import { PhoneListItemDto } from '../dto/phone-list-item.dto';
import { PhonesRepository } from '../repositories/phones.repository';

@Injectable()
export class PhonesService {
  constructor(private readonly phonesRepository: PhonesRepository) {}

  async findAll(): Promise<PhoneListItemDto[]> {
    const phones = await this.phonesRepository.findAll();

    return phones.map((phone) => ({
      id: phone.id,
      name: phone.name,
      slug: phone.slug,
      cardImage: phone.cardImage,
      colors: phone.colors,
      variants: phone.variants,
    }));
  }
}
