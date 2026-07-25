import { Module } from '@nestjs/common';

import { ModelsController } from './controllers/models.controller';
import { ModelsRepository } from './repositories/models.repository';
import { ModelsService } from './services/models.service';

@Module({
  controllers: [ModelsController],
  providers: [ModelsRepository, ModelsService],
})
export class ModelsModule {}
