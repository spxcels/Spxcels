/*
  Warnings:

  - You are about to drop the column `image` on the `phone_models` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "phone_media" ADD COLUMN     "isCover" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "phone_models" DROP COLUMN "image";

-- CreateIndex
CREATE INDEX "phone_media_isCover_idx" ON "phone_media"("isCover");
