/*
  Warnings:

  - A unique constraint covering the columns `[brandId,name]` on the table `phone_models` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "AutomationStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETE', 'FAILED');

-- DropIndex
DROP INDEX "phone_models_name_idx";

-- DropIndex
DROP INDEX "phone_specs_modelId_idx";

-- AlterTable
ALTER TABLE "phone_models" ADD COLUMN     "automationStatus" "AutomationStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "discoveredAt" TIMESTAMP(3),
ADD COLUMN     "sourceModelId" TEXT,
ADD COLUMN     "sourceUrl" TEXT;

-- CreateIndex
CREATE INDEX "phone_models_automationStatus_idx" ON "phone_models"("automationStatus");

-- CreateIndex
CREATE UNIQUE INDEX "phone_models_brandId_name_key" ON "phone_models"("brandId", "name");
