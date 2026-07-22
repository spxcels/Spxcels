/*
  Warnings:

  - You are about to drop the column `image` on the `phone_models` table. All the data in the column will be lost.
  - Added the required column `source` to the `phone_media` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MediaSource" AS ENUM ('OFFICIAL', 'RETAILER', 'AFFILIATE', 'USER');

-- AlterTable
ALTER TABLE "phone_media" ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "source" "MediaSource" NOT NULL;

-- AlterTable
ALTER TABLE "phone_models" DROP COLUMN "image";
