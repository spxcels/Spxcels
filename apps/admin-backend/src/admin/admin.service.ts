import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async changePassword(
    userId: number,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await this.prisma.admin.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      throw new BadRequestException("Old password is incorrect");
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    await this.prisma.admin.update({
      where: { id: userId },
      data: { password: hashed }
    });

    return { success: true, message: "Password changed successfully" };
  }
}
