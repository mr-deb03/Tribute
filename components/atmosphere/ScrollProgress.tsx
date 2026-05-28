"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress: a thin gradient bar pinned to the top of the viewport
 * that grows with scroll depth.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[80] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #D4855A 0%, #C084FC 55%, #6B4FA0 100%)",
        boxShadow:
          "0 0 14px rgba(192,132,252,0.75), 0 0 28px rgba(212,133,90,0.45)",
      }}
    />
  );
}
