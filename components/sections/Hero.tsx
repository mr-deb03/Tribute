"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import GlowOrbs from "../atmosphere/GlowOrbs";
import FloatingParticles from "../atmosphere/FloatingParticles";
import { withBasePath } from "@/lib/basePath";

/**
 * Hero: full-screen cinematic intro with text on the left and a tall
 * rectangular portrait frame on the right.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient sky — Hero palette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #fdf4ff 0%, #fce8f3 50%, #fff3ec 100%)",
          backgroundSize: "300% 300%",
          animation: "gradient 18s ease infinite",
        }}
      />
      {/* Color spotlights — accent + highlight wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 20%, rgba(192,132,252,0.25), transparent 70%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(212,133,90,0.18), transparent 70%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(252,232,243,0.6), transparent 70%)",
        }}
      />

      <GlowOrbs />
      <FloatingParticles count={40} variant="sparkle" />
      <FloatingParticles count={14} variant="heart" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        {/* LEFT — Text column */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-6"
            style={{ color: "#D4855A" }}
          >
            A Journey Written in Strength &amp; Kindness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
            className="font-display display-bold text-[5.5rem] md:text-[10rem] glow-text-strong"
            style={{ color: "#6B4FA0" }}
          >
            Sneha
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mx-auto md:mx-0 mt-6 mb-8 h-[3px] w-48 origin-left rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #6B4FA0, #C084FC, #D4855A, transparent)",
              boxShadow: "0 0 14px rgba(192,132,252,0.45)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="font-display italic text-xl md:text-3xl max-w-xl mx-auto md:mx-0 leading-snug"
            style={{ color: "#5a4a72" }}
          >
            Her story is not just about success… it is about kindness surviving
            every storm.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9 }}
            className="font-hand text-2xl md:text-3xl mt-6 mb-10 italic-highlight max-w-xl mx-auto md:mx-0"
          >
            Some souls enter quietly into our lives… and somehow become the most
            beautiful part of it.
          </motion.p>

          <motion.a
            href="#timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-semibold tracking-wide text-sm md:text-base text-white"
            style={{
              background: "#C084FC",
              borderRadius: "999px",
              boxShadow:
                "0 10px 28px rgba(192,132,252,0.4), 0 0 0 1px rgba(255,255,255,0.4) inset",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <span className="relative z-10">Begin Sneha&apos;s Journey</span>
            <motion.span
              className="relative z-10"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ChevronDown size={20} strokeWidth={2.5} />
            </motion.span>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"
            />
          </motion.a>
        </div>

        {/* RIGHT — Rectangular cinematic portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="relative justify-self-center md:justify-self-end w-full max-w-md"
        >
          {/* Outer halo */}
          <span
            aria-hidden
            className="absolute -inset-10 rounded-[3rem] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.35) 0%, rgba(212,133,90,0.18) 45%, transparent 75%)",
              filter: "blur(28px)",
            }}
          />

          {/* Frame */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-[3px] rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #C084FC 0%, #e8d8f0 50%, #D4855A 100%)",
              boxShadow:
                "0 24px 60px rgba(107,79,160,0.25), 0 0 60px rgba(192,132,252,0.35)",
            }}
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden"
              style={{
                background: "#fffaf6",
                borderRadius: "14px",
              }}
            >
              <Image
                src={withBasePath("/sneha.jpeg")}
                alt="Portrait of Sneha"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 28rem"
                className="object-cover"
              />

              {/* Soft top sheen */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1/4 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,250,246,0.3) 0%, transparent 100%)",
                }}
              />

              {/* Bottom overlay per design system */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none img-overlay"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.4em]"
                  style={{ color: "#fff9f0" }}
                >
                  Her Light
                </p>
                <p
                  className="mt-1 font-display italic text-2xl"
                  style={{ color: "#fff9f0" }}
                >
                  Sneha
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating mini accent — sparkle */}
          <motion.div
            aria-hidden
            className="absolute -top-6 -left-6 w-14 h-14 rounded-full glass flex items-center justify-center"
            style={{ boxShadow: "0 0 24px rgba(192,132,252,0.5)" }}
            animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl">✨</span>
          </motion.div>

          {/* Floating mini accent — flower */}
          <motion.div
            aria-hidden
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full glass flex items-center justify-center"
            style={{ boxShadow: "0 0 24px rgba(212,133,90,0.5)" }}
            animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-3xl">🌸</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: "#6B4FA0" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(180deg, #C084FC 0%, transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
