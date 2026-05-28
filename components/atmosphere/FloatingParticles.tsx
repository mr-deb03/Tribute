"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Variant = "sparkle" | "heart" | "petal" | "star";

interface Props {
  count?: number;
  variant?: Variant;
  className?: string;
}

/**
 * FloatingParticles renders an SVG-based, decorative particle layer:
 * sparkles, hearts, petals, or stars that gently drift across the screen.
 * It is fully client-side and pointer-events: none so it never blocks UI.
 */
export default function FloatingParticles({
  count = 30,
  variant = "sparkle",
  className = "",
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 14 + 6,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 8,
        opacity: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [-30, -150, -30],
            x: [0, p.drift, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Particle variant={variant} />
        </motion.div>
      ))}
    </div>
  );
}

function Particle({ variant }: { variant: Variant }) {
  switch (variant) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
            fill="url(#hg)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fce8f3" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "petal":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <ellipse cx="12" cy="12" rx="6" ry="10" fill="url(#pg)" opacity="0.75" />
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff9f0" />
              <stop offset="100%" stopColor="#fce8f3" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"
            fill="url(#sg)"
          />
          <defs>
            <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff9f0" />
              <stop offset="100%" stopColor="#D4855A" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return (
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,249,240,0.95) 0%, rgba(192,132,252,0.55) 40%, transparent 70%)",
            boxShadow: "0 0 12px rgba(192,132,252,0.55)",
          }}
        />
      );
  }
}
