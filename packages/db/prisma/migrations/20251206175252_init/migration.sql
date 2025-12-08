-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateTable
CREATE TABLE "admin_config" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "admin_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_brands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phone_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_models" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "colors" TEXT[],
    "variants" TEXT[],
    "brandId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phone_models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_specs" (
    "id" SERIAL NOT NULL,
    "modelId" INTEGER NOT NULL,
    "os" TEXT,
    "chipset" TEXT,
    "cpu" TEXT,
    "gpu" TEXT,
    "displayType" TEXT,
    "displaySize" TEXT,
    "resolution" TEXT,
    "refreshRate" TEXT,
    "protection" TEXT,
    "mainCamera" TEXT,
    "selfieCamera" TEXT,
    "videoRecording" TEXT,
    "batteryCapacity" TEXT,
    "chargingSpeed" TEXT,
    "network" TEXT,
    "sim" TEXT,
    "wifi" TEXT,
    "bluetooth" TEXT,
    "usb" TEXT,
    "sensors" TEXT,
    "dimensions" TEXT,
    "weight" TEXT,
    "buildMaterial" TEXT,
    "releaseDate" TEXT,
    "otherFeatures" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phone_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_media" (
    "id" SERIAL NOT NULL,
    "modelId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "publicId" TEXT,
    "type" "MediaType" NOT NULL,
    "alt" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "duration" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phone_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "affiliate_links" (
    "id" SERIAL NOT NULL,
    "modelId" INTEGER NOT NULL,
    "storeName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "price" TEXT,
    "currency" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "affiliate_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_config_key_key" ON "admin_config"("key");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE INDEX "admins_email_idx" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "phone_brands_name_key" ON "phone_brands"("name");

-- CreateIndex
CREATE UNIQUE INDEX "phone_brands_slug_key" ON "phone_brands"("slug");

-- CreateIndex
CREATE INDEX "phone_brands_slug_idx" ON "phone_brands"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "phone_models_slug_key" ON "phone_models"("slug");

-- CreateIndex
CREATE INDEX "phone_models_slug_idx" ON "phone_models"("slug");

-- CreateIndex
CREATE INDEX "phone_models_name_idx" ON "phone_models"("name");

-- CreateIndex
CREATE INDEX "phone_models_brandId_idx" ON "phone_models"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "phone_specs_modelId_key" ON "phone_specs"("modelId");

-- CreateIndex
CREATE INDEX "phone_specs_modelId_idx" ON "phone_specs"("modelId");

-- CreateIndex
CREATE INDEX "phone_media_modelId_idx" ON "phone_media"("modelId");

-- CreateIndex
CREATE INDEX "affiliate_links_modelId_idx" ON "affiliate_links"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "affiliate_links_modelId_storeName_key" ON "affiliate_links"("modelId", "storeName");

-- AddForeignKey
ALTER TABLE "phone_models" ADD CONSTRAINT "phone_models_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "phone_brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phone_specs" ADD CONSTRAINT "phone_specs_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "phone_models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phone_media" ADD CONSTRAINT "phone_media_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "phone_models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "affiliate_links" ADD CONSTRAINT "affiliate_links_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "phone_models"("id") ON DELETE CASCADE ON UPDATE CASCADE;
