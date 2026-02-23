import { PrismaClient, MediaType } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function seedPhones(prisma: PrismaClient) {
  console.log("📱 Seeding phones, specs, media & affiliate links...");

  const root = path.join(__dirname, "..", "..");
  const mediaRoot = path.join(root, "public", "media", "phones");

  function getMediaFiles(modelFolder: string) {
    const modelPath = path.join(mediaRoot, modelFolder);
    const media: { url: string; type: MediaType; alt: string; order: number }[] = [];

    const imagePath = path.join(modelPath, "images");
    const videoPath = path.join(modelPath, "videos");

    let order = 1;

    if (fs.existsSync(imagePath)) {
      for (const file of fs.readdirSync(imagePath)) {
        media.push({
          url: `/media/phones/${modelFolder}/images/${file}`,
          type: MediaType.IMAGE,
          alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          order: order++,
        });
      }
    }

    if (fs.existsSync(videoPath)) {
      for (const file of fs.readdirSync(videoPath)) {
        media.push({
          url: `/media/phones/${modelFolder}/videos/${file}`,
          type: MediaType.VIDEO,
          alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          order: order++,
        });
      }
    }

    return media;
  }

  // --------------------------------------------------
  // Brands
  // --------------------------------------------------
  const samsung = await prisma.phoneBrand.upsert({
    where: { slug: "samsung" },
    update: {},
    create: { name: "Samsung", slug: "samsung" },
  });

  const apple = await prisma.phoneBrand.upsert({
    where: { slug: "apple" },
    update: {},
    create: { name: "Apple", slug: "apple" },
  });

  // --------------------------------------------------
  // Models
  // --------------------------------------------------
  const s25Ultra = await prisma.phoneModel.upsert({
    where: { slug: "galaxy-s25-ultra" },
    update: {},
    create: {
      name: "Galaxy S25 Ultra",
      slug: "galaxy-s25-ultra",
      image: "/media/phones/samsung/s25-ultra/images/main.jpg",
      colors: ["red", "green", "white"],
      variants: ["8/128", "12/256"],
      brandId: samsung.id,
    },
  });

  const iphone15Pro = await prisma.phoneModel.upsert({
    where: { slug: "iphone-15-pro" },
    update: {},
    create: {
      name: "iPhone 15 Pro",
      slug: "iphone-15-pro",
      image: "/media/phones/apple/iphone-15-pro/images/main.jpg",
      colors: ["black", "silver", "blue"],
      variants: ["8/128", "12/512"],
      brandId: apple.id,
    },
  });

  // --------------------------------------------------
  // Specs (⭐ NEW JSON STRUCTURE)
  // --------------------------------------------------
  await prisma.phoneSpecs.upsert({
    where: { modelId: s25Ultra.id },
    update: {},
    create: {
      modelId: s25Ultra.id,
      specs: {
        sections: [
          {
            title: "PLATFORM",
            rows: [
              {
                label: "OS",
                values: [{ text: "Android 15 (One UI 7.0)" }],
              },
              {
                label: "Chipset",
                values: [{ text: "Snapdragon 8 Gen 4" }],
              },
            ],
          },
          {
            title: "DISPLAY",
            rows: [
              {
                label: "Type",
                values: [{ text: "AMOLED, 120Hz, HDR10+" }],
              },
              {
                label: "Size",
                values: [{ text: "6.8 inches" }],
              },
            ],
          },
        ],
      },
    },
  });

  await prisma.phoneSpecs.upsert({
    where: { modelId: iphone15Pro.id },
    update: {},
    create: {
      modelId: iphone15Pro.id,
      specs: {
        sections: [
          {
            title: "PLATFORM",
            rows: [
              {
                label: "OS",
                values: [{ text: "iOS 17" }],
              },
              {
                label: "Chipset",
                values: [{ text: "Apple A17 Pro" }],
              },
            ],
          },
          {
            title: "DISPLAY",
            rows: [
              {
                label: "Type",
                values: [{ text: "Super Retina XDR OLED, 120Hz" }],
              },
              {
                label: "Size",
                values: [{ text: "6.1 inches" }],
              },
            ],
          },
        ],
      },
    },
  });

  // --------------------------------------------------
  // Media reset
  // --------------------------------------------------
  await prisma.phoneMedia.deleteMany({
    where: { modelId: { in: [s25Ultra.id, iphone15Pro.id] } },
  });

  const samsungMedia = getMediaFiles("samsung/s25-ultra");
  const iphoneMedia = getMediaFiles("apple/iphone-15-pro");

  const mediaData = [
    ...samsungMedia.map((m) => ({ ...m, modelId: s25Ultra.id })),
    ...iphoneMedia.map((m) => ({ ...m, modelId: iphone15Pro.id })),
  ];

  if (mediaData.length) {
    await prisma.phoneMedia.createMany({ data: mediaData });
    console.log(`🖼️ Added ${mediaData.length} media files`);
  }

  // --------------------------------------------------
  // Affiliates
  // --------------------------------------------------
  await prisma.affiliateLink.upsert({
    where: { modelId_storeName: { modelId: s25Ultra.id, storeName: "Amazon" } },
    update: {},
    create: {
      modelId: s25Ultra.id,
      storeName: "Amazon",
      url: "https://amazon.in/samsung-galaxy-s25-ultra",
      price: "₹1,29,999",
      currency: "INR",
    },
  });

  await prisma.affiliateLink.upsert({
    where: { modelId_storeName: { modelId: iphone15Pro.id, storeName: "Amazon" } },
    update: {},
    create: {
      modelId: iphone15Pro.id,
      storeName: "Amazon",
      url: "https://amazon.in/apple-iphone-15-pro",
      price: "₹1,39,999",
      currency: "INR",
    },
  });

  console.log("✅ Phone seed complete!");
}