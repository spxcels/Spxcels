import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SearchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async search(query: string, limit: number, excludeId?: number) {
    return this.prisma.phoneModel.findMany({
      where: {
        ...(excludeId && {
          id: {
            not: excludeId,
          },
        }),

        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            brand: {
              name: {
                contains: query,
                mode: 'insensitive',
              },
            },
          },
        ],
      },

      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,

        brand: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },

      take: limit,

      orderBy: {
        name: 'asc',
      },
    });
  }
}
