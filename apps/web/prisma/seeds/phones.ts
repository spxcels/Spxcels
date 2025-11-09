import { PrismaClient, MediaType } from "@prisma/client";
import fs from "fs";
import path from "path";

export async function seedPhones(prisma: PrismaClient) {
  console.log("📱 Auto-seeding phones, specs, media & affiliate links...");

  // --- Base media path ---
  const mediaRoot = path.join(process.cwd(), "public", "media", "phones");

  // --- Helper: Get media files for a model ---
  function getMediaFiles(modelFolder: string) {
    const modelPath = path.join(mediaRoot, modelFolder);
    const media: { url: string; type: MediaType; alt: string }[] = [];

    const imagePath = path.join(modelPath, "images");
    const videoPath = path.join(modelPath, "videos");

    if (fs.existsSync(imagePath)) {
      fs.readdirSync(imagePath).forEach((file) => {
        media.push({
          url: `/media/phones/${modelFolder}/images/${file}`,
          type: MediaType.IMAGE,
          alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        });
      });
    }

    if (fs.existsSync(videoPath)) {
      fs.readdirSync(videoPath).forEach((file) => {
        media.push({
          url: `/media/phones/${modelFolder}/videos/${file}`,
          type: MediaType.VIDEO,
          alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        });
      });
    }

    return media;
  }

  // --- Create Brands ---
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

  // --- Create Models ---
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

  // --- Specs (static data) ---
  await prisma.phoneSpecs.upsert({
    where: { modelId: s25Ultra.id },
    update: {},
    create: {
      modelId: s25Ultra.id,
      os: "Android 15 (One UI 7.0)",
      chipset: "Snapdragon 8 Gen 4",
      batteryCapacity: "5000mAh",
      chargingSpeed: "45W wired, 15W wireless",
      displayType: "AMOLED, 120Hz, HDR10+",
      displaySize: "6.8 inches",
      mainCamera: "200MP + 50MP + 12MP + 10MP",
      selfieCamera: "12MP",
      releaseDate: "Feb 2025",
    },
  });

  await prisma.phoneSpecs.upsert({
    where: { modelId: iphone15Pro.id },
    update: {},
    create: {
      modelId: iphone15Pro.id,
      os: "iOS 17",
      chipset: "Apple A17 Pro",
      batteryCapacity: "4300mAh",
      chargingSpeed: "27W wired, 15W MagSafe",
      displayType: "Super Retina XDR OLED, 120Hz",
      displaySize: "6.1 inches",
      mainCamera: "48MP + 12MP + 12MP",
      selfieCamera: "12MP",
      releaseDate: "Sept 2023",
    },
  });

  // --- Auto Media Seeding ---
  const samsungMedia = getMediaFiles("samsung/s25-ultra");
  const iphoneMedia = getMediaFiles("apple/iphone-15-pro");

  const mediaData = [
    ...samsungMedia.map((m) => ({ ...m, modelId: s25Ultra.id })),
    ...iphoneMedia.map((m) => ({ ...m, modelId: iphone15Pro.id })),
  ];

  if (mediaData.length > 0) {
    await prisma.phoneMedia.createMany({ data: mediaData, skipDuplicates: true });
    console.log(`🖼️ Added ${mediaData.length} media files.`);
  } else {
    console.log("⚠️ No media files found. Make sure your folders exist.");
  }

  // --- Affiliate Links ---
  await prisma.affiliateLink.createMany({
    data: [
      {
        modelId: s25Ultra.id,
        storeName: "Amazon",
        url: "https://amazon.in/samsung-galaxy-s25-ultra",
        price: "₹1,29,999",
        currency: "INR",
      },
      {
        modelId: iphone15Pro.id,
        storeName: "Amazon",
        url: "https://amazon.in/apple-iphone-15-pro",
        price: "₹1,39,999",
        currency: "INR",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ All phone data seeded successfully!");
}