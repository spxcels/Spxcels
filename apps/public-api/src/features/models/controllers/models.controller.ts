import { Controller } from '@nestjs/common';
import { ModelsService } from '../services/models.service';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}
}
