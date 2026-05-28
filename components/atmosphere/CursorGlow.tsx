"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorGlow: a soft pink-lavender aura that follows the mouse cursor.
 * Hidden on touch devices. Layered above content but with pointer-events: none.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-screen"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-[260px] h-[260px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(192,132,252,0.35) 0%, rgba(212,133,90,0.22) 38%, rgba(252,232,243,0.18) 65%, transparent 80%)",
            filter: "blur(10px)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "#C084FC",
            boxShadow:
              "0 0 16px rgba(192,132,252,0.9), 0 0 28px rgba(212,133,90,0.6)",
          }}
        />
      </motion.div>
    </>
  );
}
