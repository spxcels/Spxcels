/*
  Warnings:

  - You are about to drop the column `storeName` on the `affiliate_links` table. All the data in the column will be lost.
  - The `price` column on the `affiliate_links` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `gsmarenaId` on the `phone_brands` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[modelId,store]` on the table `affiliate_links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `store` to the `affiliate_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `affiliate_links` table without a default value. This is not possible if the table is not empty.
  - Made the column `currency` on table `affiliate_links` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `phone_media` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AffiliateStore" AS ENUM ('AMAZON', 'FLIPKART');

-- DropIndex
DROP INDEX "affiliate_links_modelId_storeName_key";

-- AlterTable
ALTER TABLE "affiliate_links" DROP COLUMN "storeName",
ADD COLUMN     "store" "AffiliateStore" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" DECIMAL(10,2),
ALTER COLUMN "currency" SET NOT NULL,
ALTER COLUMN "currency" SET DEFAULT 'INR';

-- AlterTable
ALTER TABLE "phone_brands" DROP COLUMN "gsmarenaId",
ADD COLUMN     "gsmarenaSlug" TEXT;

-- AlterTable
ALTER TABLE "phone_media" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "affiliate_links_modelId_store_key" ON "affiliate_links"("modelId", "store");
