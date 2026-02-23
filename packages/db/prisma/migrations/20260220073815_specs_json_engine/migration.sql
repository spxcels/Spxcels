/*
  Warnings:

  - You are about to drop the column `batteryCapacity` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `bluetooth` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `buildMaterial` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `chargingSpeed` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `chipset` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `cpu` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `dimensions` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `displaySize` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `displayType` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `gpu` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `mainCamera` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `network` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `os` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `otherFeatures` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `protection` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `refreshRate` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `resolution` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `selfieCamera` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `sensors` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `sim` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `usb` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `videoRecording` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `phone_specs` table. All the data in the column will be lost.
  - You are about to drop the column `wifi` on the `phone_specs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "phone_specs" DROP COLUMN "batteryCapacity",
DROP COLUMN "bluetooth",
DROP COLUMN "buildMaterial",
DROP COLUMN "chargingSpeed",
DROP COLUMN "chipset",
DROP COLUMN "cpu",
DROP COLUMN "dimensions",
DROP COLUMN "displaySize",
DROP COLUMN "displayType",
DROP COLUMN "gpu",
DROP COLUMN "mainCamera",
DROP COLUMN "network",
DROP COLUMN "os",
DROP COLUMN "otherFeatures",
DROP COLUMN "protection",
DROP COLUMN "refreshRate",
DROP COLUMN "releaseDate",
DROP COLUMN "resolution",
DROP COLUMN "selfieCamera",
DROP COLUMN "sensors",
DROP COLUMN "sim",
DROP COLUMN "usb",
DROP COLUMN "videoRecording",
DROP COLUMN "weight",
DROP COLUMN "wifi",
ADD COLUMN     "specs" JSONB;
