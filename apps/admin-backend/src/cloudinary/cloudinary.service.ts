import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadCardImage(
    file: Express.Multer.File,
    brandSlug: string,
    modelSlug: string,
  ): Promise<UploadApiResponse> {
    return new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: `spex/phones/${brandSlug}`,
          public_id: modelSlug,
          overwrite: true,
          invalidate: true,
          resource_type: "image",
          format: "webp",
        },
        (error, result) => {
          if (error || !result) {
            return reject(
              new InternalServerErrorException("Failed to upload image to Cloudinary"),
            );
          }
          resolve(result);
        },
      );

      stream.end(file.buffer);
    });
  }

  async deleteCardImage(brandSlug: string, modelSlug: string) {
    return cloudinary.uploader.destroy(`spex/phones/${brandSlug}/${modelSlug}`, {
      resource_type: "image",
    });
  }
}
