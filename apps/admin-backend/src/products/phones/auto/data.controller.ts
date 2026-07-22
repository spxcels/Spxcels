import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "../../../prisma/prisma.service";
import { CreateModelService } from "./engine/create-model.service";

/* ============================================================
   HELPERS
============================================================ */

function safeTableName(name: string) {
  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    throw new BadRequestException("Invalid table name");
  }

  return Prisma.raw(`"${name}"`);
}

function safeColumnName(name: string) {
  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    throw new BadRequestException("Invalid column name");
  }

  return Prisma.raw(`"${name}"`);
}

function safeId(id: string) {
  if (!/^\d+$/.test(id)) {
    throw new BadRequestException("Invalid ID");
  }

  return Number(id);
}

function sqlValue(value: any) {
  if (value === null || value === undefined) {
    return Prisma.sql`NULL`;
  }

  if (Array.isArray(value)) {
    return Prisma.sql`${value}`;
  }

  return Prisma.sql`${value}`;
}

/* ============================================================
   CONTROLLER
============================================================ */

@Controller("auto/data")
export class DataController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createModel: CreateModelService,
  ) {}

  @Post("create-model")
  async createModelEntry(
    @Body() body: { name: string },
  ) {
    if (!body?.name) {
      throw new BadRequestException(
        "Model name required",
      );
    }

    return this.createModel.run(body.name);
  }

  @Get(":table")
  async getAll(
    @Param("table") table: string,
  ) {
    const t = safeTableName(table);

    return this.prisma.$queryRaw<any[]>`
      SELECT *
      FROM ${t}
      ORDER BY id DESC
      LIMIT 200
    `;
  }

  @Get(":table/:id")
  async getOne(
    @Param("table") table: string,
    @Param("id") id: string,
  ) {
    const t = safeTableName(table);
    const rowId = safeId(id);

    const rows = await this.prisma.$queryRaw<any[]>`
      SELECT *
      FROM ${t}
      WHERE id = ${rowId}
      LIMIT 1
    `;

    return rows[0] ?? null;
  }

  @Post(":table")
  async create(
    @Param("table") table: string,
    @Body() data: Record<string, any>,
  ) {
    if (!data || Object.keys(data).length === 0) {
      throw new BadRequestException(
        "Empty body",
      );
    }

    const t = safeTableName(table);

    data.createdAt ??= new Date();
    data.updatedAt ??= new Date();

    const columns = Object.keys(data).map(
      safeColumnName,
    );

    const values = Object.values(data).map(
      sqlValue,
    );

    const rows = await this.prisma.$queryRaw<any[]>`
      INSERT INTO ${t} (${Prisma.join(columns)})
      VALUES (${Prisma.join(values)})
      RETURNING *
    `;

    return rows[0];
  }

  @Put(":table/:id")
  async update(
    @Param("table") table: string,
    @Param("id") id: string,
    @Body() data: Record<string, any>,
  ) {
    if (!data || Object.keys(data).length === 0) {
      throw new BadRequestException(
        "Empty body",
      );
    }

    const t = safeTableName(table);
    const rowId = safeId(id);

    data.updatedAt = new Date();

    const updates = Object.entries(data).map(
      ([key, value]) =>
        Prisma.sql`${safeColumnName(key)} = ${sqlValue(value)}`,
    );

    const rows = await this.prisma.$queryRaw<any[]>`
      UPDATE ${t}
      SET ${Prisma.join(updates)}
      WHERE id = ${rowId}
      RETURNING *
    `;

    return rows[0] ?? null;
  }

  @Delete(":table/:id")
  async delete(
    @Param("table") table: string,
    @Param("id") id: string,
  ) {
    const t = safeTableName(table);
    const rowId = safeId(id);

    const rows = await this.prisma.$queryRaw<any[]>`
      DELETE FROM ${t}
      WHERE id = ${rowId}
      RETURNING *
    `;

    return rows[0] ?? null;
  }
}