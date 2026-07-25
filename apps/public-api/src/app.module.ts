import { Module } from '@nestjs/common';

import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { BrandsModule } from './features/brands/brands.module';
import { ModelsModule } from './features/models/models.module';
import { SearchModule } from './features/search/search.module';
import { CompareModule } from './features/compare/compare.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    BrandsModule,
    ModelsModule,
    SearchModule,
    CompareModule,
  ],
})
export class AppModule {}
