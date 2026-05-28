"use client";

import { motion } from "framer-motion";

/**
 * GlowOrbs: a set of large blurred gradient blobs that drift slowly in
 * the background, giving each section cinematic ambient lighting.
 */
export default function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          left: "-10%",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(252,232,243,0.85) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          right: "-15%",
          top: "30%",
          background:
            "radial-gradient(circle, rgba(192,132,252,0.55) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: "30%",
          bottom: "0%",
          background:
            "radial-gradient(circle, rgba(212,133,90,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
