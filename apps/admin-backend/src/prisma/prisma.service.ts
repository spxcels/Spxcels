import {
  Injectable,
  OnModuleInit,
  INestApplication,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['info', 'warn', 'error'], // optional
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('🚀 Prisma Client connected');
  }

  /**
   * Graceful shutdown using Node process hook
   * (Prisma 5 removed $on("beforeExit") typings)
   */
  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      this.logger.log('🛑 Prisma Client disconnecting...');
      await this.$disconnect();
      await app.close();
    });
  }
}
