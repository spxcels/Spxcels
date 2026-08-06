import { Injectable } from '@nestjs/common';
import { Prisma } from '@spxcel/db';

import { PhoneQueryDto } from '../dto/phone-query.dto';

import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PhonesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: PhoneQueryDto) {
    const { page, limit, brand, search, sort, order } = query;

    const where: Prisma.PhoneModelWhereInput = {
      ...(brand && {
        brand: {
          slug: brand,
        },
      }),

      ...(search && {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      }),
    };

    const orderBy: Prisma.PhoneModelOrderByWithRelationInput =
      sort === 'name'
        ? {
            name: order,
          }
        : {
            createdAt: order,
          };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.phoneModel.findMany({
        where,
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
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),

      this.prisma.phoneModel.count({
        where,
      }),
    ]);

    return {
      items,
      total,
    };
  }

  async findBySlug(slug: string) {
    return this.prisma.phoneModel.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,

        colors: true,
        variants: true,

        brand: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },

        specs: {
          select: {
            specs: true,
          },
        },

        media: {
          select: {
            id: true,
            url: true,
            type: true,
            isPrimary: true,
            order: true,
            alt: true,
          },
          orderBy: [
            {
              isPrimary: 'desc',
            },
            {
              order: 'asc',
            },
            {
              id: 'asc',
            },
          ],
        },

        affiliates: {
          select: {
            store: true,
            url: true,
            price: true,
            currency: true,
          },
          orderBy: {
            store: 'asc',
          },
        },
      },
    });
  }
}
