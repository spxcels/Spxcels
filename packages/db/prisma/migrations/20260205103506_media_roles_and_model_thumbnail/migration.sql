/*
  Safe migration:
  - Convert isCover → role
  - Preserve existing data
  - Then clean up schema
*/

-- 1️⃣ Create enum
CREATE TYPE "MediaRole" AS ENUM ('FRONT', 'BACK', 'GALLERY');

-- 2️⃣ Add role column as nullable first
ALTER TABLE "phone_media"
ADD COLUMN "role" "MediaRole";

-- 3️⃣ Migrate existing data (CAST REQUIRED)
UPDATE "phone_media"
SET "role" = CASE
  WHEN "isCover" = true THEN 'FRONT'::"MediaRole"
  ELSE 'GALLERY'::"MediaRole"
END;

-- 4️⃣ Enforce NOT NULL after backfill
ALTER TABLE "phone_media"
ALTER COLUMN "role" SET NOT NULL;

-- 5️⃣ Drop old column
ALTER TABLE "phone_media"
DROP COLUMN "isCover";

-- 6️⃣ Index for fast lookups
CREATE INDEX "phone_media_role_idx"
ON "phone_media"("role");

-- 7️⃣ (Optional but OK) model image column
ALTER TABLE "phone_models"
ADD COLUMN "image" TEXT;
