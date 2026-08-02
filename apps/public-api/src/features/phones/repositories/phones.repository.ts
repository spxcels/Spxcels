import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PhonesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.phoneModel.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
