/*
  Warnings:

  - A unique constraint covering the columns `[modelId,url]` on the table `phone_media` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "phone_media_modelId_order_idx" ON "phone_media"("modelId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "phone_media_modelId_url_key" ON "phone_media"("modelId", "url");
