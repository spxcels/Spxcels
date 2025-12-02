import { Controller, Get, Put, Body, UseGuards } from "@nestjs/common";
import { AdminConfigService } from "./admin-config.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("admin/config")
@UseGuards(JwtAuthGuard)
export class AdminConfigController {
  constructor(private service: AdminConfigService) {}

  @Get("db-url")
  async getDbUrl() {
    return await this.service.getDbUrl();
  }

  @Put("db-url")
  async updateDbUrl(@Body() body: { value: string }) {
    return await this.service.updateDbUrl(body.value);
  }
}
