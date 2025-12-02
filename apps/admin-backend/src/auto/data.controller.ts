import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

function safeTable(name: string) {
  if (!/^[a-zA-Z0-9_]+$/.test(name))
    throw new BadRequestException("Invalid table");
  return name;
}

@Controller("auto/data")
export class DataController {
  constructor(private prisma: PrismaService) {}

  // ============================================
  // GET ALL ROWS
  // ============================================
  @Get(":table")
  async getAll(@Param("table") table: string) {
    table = safeTable(table);
    const rows = await this.prisma.$queryRawUnsafe<any[]>(`
      SELECT *
      FROM "${table}"
      ORDER BY id DESC
      LIMIT 200
    `);
    return rows;
  }

  // ============================================
  // GET SINGLE ROW
  // ============================================
  @Get(":table/:id")
  async getOne(@Param("table") table: string, @Param("id") id: string) {
    table = safeTable(table);

    if (!/^\d+$/.test(id)) throw new BadRequestException("Invalid ID");

    const rows = await this.prisma.$queryRawUnsafe<any[]>(`
      SELECT *
      FROM "${table}"
      WHERE id = ${Number(id)}
      LIMIT 1
    `);

    return rows.length ? rows[0] : null;
  }

  // ============================================
  // CREATE ROW
  // ============================================
  @Post(":table")
  async create(@Param("table") table: string, @Body() data: any) {
    table = safeTable(table);

    const keys = Object.keys(data);
    if (keys.length === 0) throw new BadRequestException("Empty body");

    const cols = keys.map((k) => `"${k}"`).join(", ");
    const vals = keys
      .map((k) =>
        data[k] === null || data[k] === undefined
          ? "NULL"
          : `'${String(data[k]).replace(/'/g, "''")}'`
      )
      .join(", ");

    const rows = await this.prisma.$queryRawUnsafe<any[]>(`
      INSERT INTO "${table}" (${cols})
      VALUES (${vals})
      RETURNING *;
    `);

    return rows[0];
  }

  // ============================================
  // UPDATE ROW
  // ============================================
  @Put(":table/:id")
  async update(
    @Param("table") table: string,
    @Param("id") id: string,
    @Body() data: any
  ) {
    table = safeTable(table);

    if (!/^\d+$/.test(id)) throw new BadRequestException("Invalid ID");

    const keys = Object.keys(data);
    const set = keys
      .map((k) =>
        data[k] === null || data[k] === undefined
          ? `"${k}" = NULL`
          : `"${k}" = '${String(data[k]).replace(/'/g, "''")}'`
      )
      .join(", ");

    const rows = await this.prisma.$queryRawUnsafe<any[]>(`
      UPDATE "${table}"
      SET ${set}
      WHERE id = ${Number(id)}
      RETURNING *;
    `);

    return rows[0] ?? null;
  }

  // ============================================
  // DELETE ROW
  // ============================================
  @Delete(":table/:id")
  async delete(@Param("table") table: string, @Param("id") id: string) {
    table = safeTable(table);

    if (!/^\d+$/.test(id)) throw new BadRequestException("Invalid ID");

    const rows = await this.prisma.$queryRawUnsafe<any[]>(`
      DELETE FROM "${table}"
      WHERE id = ${Number(id)}
      RETURNING *;
    `);

    return rows[0] ?? null;
  }
}
