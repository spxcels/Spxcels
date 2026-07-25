import { Injectable } from '@nestjs/common';
import { ModelsRepository } from '../repositories/models.repository';

@Injectable()
export class ModelsService {
  constructor(private readonly modelsRepository: ModelsRepository) {}
}
