import { Module } from '@nestjs/common';

import { BrandsController } from './controllers/brands.controller';
import { BrandsRepository } from './repositories/brands.repository';
import { BrandsService } from './services/brands.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsRepository, BrandsService],
})
export class BrandsModule {}
