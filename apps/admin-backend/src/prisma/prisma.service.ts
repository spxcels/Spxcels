import { Injectable, OnModuleInit, INestApplication, Logger } from "@nestjs/common";
import { PrismaClient } from "@spxcel/db/generated/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log("🔌 Prisma connected (shared client)");
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on("beforeExit", async () => {
      this.logger.log("Prisma beforeExit — closing Nest app");
      await app.close();
    });
  }
}



