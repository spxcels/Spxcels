import {
  Injectable,
  OnModuleInit,
  INestApplication,
  Logger,
} from '@nestjs/common';

import { PrismaClient } from '@spxcel/db';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl || databaseUrl.trim() === '') {
      throw new Error(
        '❌ DATABASE_URL is missing or empty! Make sure .env is loaded.',
      );
    }

    const pool = new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    });

    const adapter = new PrismaPg(pool);

    super({
      adapter,
      log: ['info', 'warn', 'error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('🚀 Prisma connected');
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await this.$disconnect();
      await app.close();
    });
  }
}
