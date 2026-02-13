import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

let configured = false;

function configureCloudinaryOnce() {
  if (configured) return;

  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;

  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    throw new Error(
      "Cloudinary env vars missing. Check apps/admin-backend/.env"
    );
  }

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  configured = true;
}

export const phoneMediaStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => {
    // ✅ SAFE: runs ONLY when upload happens
    configureCloudinaryOnce();

    return {
      folder: "spex/phones",
      resource_type: "image",
      format: "webp",
    };
  },
});
