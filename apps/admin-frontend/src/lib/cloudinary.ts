const CLOUD_NAME = "dnwucmjyy";
const UPLOAD_PRESET = "unsigned_admin"; // change if needed

/* =========================
   BUILD IMAGE URL
========================= */
export function cloudinaryUrl(path?: string | null) {
  if (!path) return null;

  // already absolute
  if (path.startsWith("http")) return path;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload${path}`;
}

/* =========================
   UPLOAD IMAGE
========================= */
export async function uploadToCloudinary(
  file: File
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url as string;
}
