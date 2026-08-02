import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BrandsModule } from './features/brands/brands.module';
import { CompareModule } from './features/compare/compare.module';
import { PhonesModule } from './features/phones/phones.module';
import { SearchModule } from './features/search/search.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    PrismaModule,
    HealthModule,
    BrandsModule,
    PhonesModule,
    SearchModule,
    CompareModule,
  ],
})
export class AppModule {}
