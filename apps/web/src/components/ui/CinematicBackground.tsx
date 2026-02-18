"use client";

import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "5%", left: "10%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-purple-500/20 blur-[120px] rounded-full"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "10%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500/15 blur-[120px] rounded-full"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "5%", left: "30%" }}
      />
    </div>
  );
}
