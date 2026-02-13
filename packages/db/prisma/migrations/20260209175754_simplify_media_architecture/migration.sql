/*
  Warnings:

  - You are about to drop the column `duration` on the `phone_media` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `phone_media` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `phone_media` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `phone_media` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "phone_media_role_idx";

-- AlterTable
ALTER TABLE "phone_media" DROP COLUMN "duration",
DROP COLUMN "height",
DROP COLUMN "role",
DROP COLUMN "width",
ADD COLUMN     "order" INTEGER;

-- DropEnum
DROP TYPE "MediaRole";
