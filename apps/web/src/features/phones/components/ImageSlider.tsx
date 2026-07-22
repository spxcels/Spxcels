"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Media {
  id: number;
  url: string;
  type?: "IMAGE" | "VIDEO";
}

interface Props {
  media: Media[];
  modelName?: string; // ✅ optional but safe
}

export default function ImageSlider({
  media,
  modelName = "Product", // ✅ fallback to prevent alt error
}: Props) {
  const mediaList =
    media?.length && media.some((m) => m.url)
      ? media
      : [{ id: 0, url: "/placeholder-phone.png", type: "IMAGE" as const }];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const selectedMedia = mediaList[selectedIndex];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hideNavTimer = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () =>
    setSelectedIndex((p) => (p + 1) % mediaList.length);

  const prevSlide = () =>
    setSelectedIndex((p) => (p - 1 + mediaList.length) % mediaList.length);

  /* ================= AUTO PLAY ================= */

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const video = videoRef.current;

    if (selectedMedia?.type === "VIDEO" && video) {
      const handleEnd = () => nextSlide();
      video.addEventListener("ended", handleEnd);
      return () => video.removeEventListener("ended", handleEnd);
    }

    intervalRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedMedia, mediaList.length]);

  /* ================= NAV VISIBILITY ================= */

  const handleMouseMove = () => {
    setShowNav(true);
    if (hideNavTimer.current) clearTimeout(hideNavTimer.current);
    hideNavTimer.current = setTimeout(() => setShowNav(false), 2000);
  };

  /* ================= SWIPE ================= */

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) prevSlide();
    else if (info.offset.x < -swipeThreshold) nextSlide();
  };

  /* ================= ZOOM ================= */

  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const pinchDistance = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchDistance.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchDistance.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDistance = Math.sqrt(dx * dx + dy * dy);
      const zoom = newDistance / pinchDistance.current;
      scale.set(Math.min(Math.max(zoom, 1), 4));
    }
  };

  const resetZoom = () => {
    scale.set(1);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {/* ================= MAIN VIEW ================= */}
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center cursor-pointer"
        onClick={() => setFullscreen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMedia?.url}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="flex justify-center items-center w-full"
          >
            {selectedMedia?.type === "VIDEO" ? (
              <video
                ref={videoRef}
                src={selectedMedia.url}
                autoPlay
                muted
                playsInline
                className="rounded-2xl w-full max-w-2xl bg-black"
              />
            ) : (
              <Image
                src={selectedMedia.url}
                alt={`${modelName} image ${selectedIndex + 1}`}
                width={500}
                height={500}
                className="object-contain rounded-2xl select-none"
                unoptimized
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ================= ARROWS ================= */}
        {mediaList.length > 1 && showNav && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full p-2"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full p-2"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* ================= THUMBNAILS ================= */}
      {mediaList.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {mediaList.map((m, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-16 h-16 rounded-lg border overflow-hidden ${
                selectedIndex === i
                  ? "border-blue-500"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {m.type === "VIDEO" ? (
                <video
                  src={m.url}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="object-cover w-16 h-16"
                />
              ) : (
                <Image
                  src={m.url}
                  alt={`${modelName} thumbnail ${i + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                  unoptimized
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* ================= FULLSCREEN ================= */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <button
            onClick={() => {
              setFullscreen(false);
              resetZoom();
            }}
            className="absolute top-4 right-4 bg-white/30 rounded-full p-2"
          >
            <X size={24} />
          </button>

          <motion.div
            style={{ scale, x, y }}
            onDoubleClick={resetZoom}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            {selectedMedia.type === "VIDEO" ? (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                muted
                playsInline
                className="max-h-[80vh] rounded-2xl"
              />
            ) : (
              <Image
                src={selectedMedia.url}
                alt={`${modelName} fullscreen image ${selectedIndex + 1}`}
                width={900}
                height={900}
                className="object-contain max-h-[80vh] rounded-2xl"
                unoptimized
              />
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}