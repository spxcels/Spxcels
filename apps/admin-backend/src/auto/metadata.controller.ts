import { Controller, Get } from "@nestjs/common";

@Controller("auto/metadata")
export class MetadataController {
  /**
   * TEMPORARY SAFE METADATA
   * -----------------------
   * Disabled raw introspection queries to avoid DB timeouts.
   * We will re-introduce controlled metadata later.
   */

  @Get("tables")
  async getTables() {
    return [];
  }

  @Get("columns")
  async getColumns() {
    return [];
  }
}
