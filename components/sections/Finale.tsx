"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import FloatingParticles from "../atmosphere/FloatingParticles";

/**
 * Finale: cinematic dark-to-light closing section with a glowing horizon,
 * stars appearing in sequence and a triumphant closing line.
 */
export default function Finale() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const horizonScale = useTransform(scrollYProgress, [0, 1], [0.4, 1.6]);
  const horizonOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 0.8]);

  return (
    <section
      ref={ref}
      id="finale"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark-to-light gradient — Deep Body → Primary → Accent → Blush → Warm cream */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #4a3860 0%, #6B4FA0 30%, #C084FC 60%, #fce8f3 85%, #fff9f0 100%)",
        }}
      />

      {/* Starfield */}
      <Starfield />

      {/* Glowing horizon — highlight → accent → blush */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-[15%] w-[140%] h-[300px] rounded-full"
        style={{
          scale: horizonScale,
          opacity: horizonOpacity,
          background:
            "radial-gradient(ellipse at center, rgba(212,133,90,0.85) 0%, rgba(192,132,252,0.55) 35%, rgba(252,232,243,0.35) 65%, transparent 85%)",
          filter: "blur(28px)",
        }}
      />

      <FloatingParticles count={30} variant="star" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-10"
          style={{ color: "#fff9f0" }}
        >
          And the story continues…
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-display display-bold text-4xl md:text-6xl glow-text-light"
          style={{ color: "#fff9f0", lineHeight: 1.15 }}
        >
          &ldquo;You were never weak, Sneha. You were simply becoming{" "}
          <span style={{ color: "#D4855A" }}>stronger</span> than your
          fears.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto my-12 h-[3px] w-56 origin-center rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #D4855A, #C084FC, #D4855A, transparent)",
            boxShadow: "0 0 18px rgba(212,133,90,0.7)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-5 max-w-2xl mx-auto text-base md:text-lg"
          style={{ color: "#fff9f0", lineHeight: 1.7 }}
        >
          <p>
            From here on, never doubt yourself again. Look at how far you have
            come — every quiet tear, every silent battle, every soft no said to
            the world has become a part of your strength.
          </p>
          <p>
            Your struggles did not break you. They shaped you. And the future
            ahead — softer, brighter, kinder — is waiting for the woman you have
            already become.
          </p>
          <p
            className="font-display italic text-2xl md:text-3xl"
            style={{ color: "#D4855A", fontWeight: 600 }}
          >
            Keep shining, fearlessly.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-display italic text-2xl md:text-3xl mt-16 glow-text-light"
          style={{ color: "#fff9f0", fontWeight: 600 }}
        >
          &ldquo;And no matter where life takes you next… your story will always
          inspire hearts.&rdquo;
        </motion.p>

        {/* Signature heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.9, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="w-12 h-12"
            style={{ filter: "drop-shadow(0 0 22px rgba(212,133,90,0.8))" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
              fill="url(#finaleGrad)"
            />
            <defs>
              <linearGradient id="finaleGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4855A" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </motion.svg>
          <p
            className="text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: "#fff9f0" }}
          >
            For Sneha — always
          </p>
        </motion.div>
      </div>

      {/* Cinematic fade at top — blends with the gallery tail */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,244,240,0.8) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

function Starfield() {
  // Client-only render — Math.random would otherwise produce different values
  // on server vs client and break hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  if (!mounted) return null;

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 6px rgba(255,255,255,0.9)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0.7, 1], scale: [0, 1, 0.9, 1] }}
          viewport={{ once: true }}
          transition={{
            delay: s.delay,
            duration: s.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
