import { Module } from '@nestjs/common';

import { PhonesController } from './controllers/phones.controller';
import { PhonesRepository } from './repositories/phones.repository';
import { PhonesService } from './services/phones.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesRepository, PhonesService],
})
export class PhonesModule {}
