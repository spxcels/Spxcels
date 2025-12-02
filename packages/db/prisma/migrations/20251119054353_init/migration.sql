-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateTable
CREATE TABLE "PhoneBrand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhoneBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "colors" TEXT[],
    "variants" TEXT[],
    "brandId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhoneModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneSpecs" (
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

    CONSTRAINT "PhoneSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneMedia" (
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

    CONSTRAINT "PhoneMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AffiliateLink" (
    "id" SERIAL NOT NULL,
    "modelId" INTEGER NOT NULL,
    "storeName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "price" TEXT,
    "currency" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AffiliateLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhoneBrand_name_key" ON "PhoneBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneBrand_slug_key" ON "PhoneBrand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneModel_slug_key" ON "PhoneModel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneSpecs_modelId_key" ON "PhoneSpecs"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "PhoneModel" ADD CONSTRAINT "PhoneModel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "PhoneBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneSpecs" ADD CONSTRAINT "PhoneSpecs_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "PhoneModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneMedia" ADD CONSTRAINT "PhoneMedia_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "PhoneModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AffiliateLink" ADD CONSTRAINT "AffiliateLink_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "PhoneModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
