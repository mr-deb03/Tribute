"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import FloatingParticles from "../atmosphere/FloatingParticles";
import { withBasePath } from "@/lib/basePath";

type Memory = {
  id: string;
  caption: string;
  category: string;
  gradient: string;
  image?: string; // optional — tiles without a photo show gradient + giant emoji
  emoji: string;
  span: string; // tailwind row/col span classes for masonry-ish layout
};

const memories: Memory[] = [
  {
    id: "m1",
    caption: "First steps into a kind world",
    category: "Childhood Memories",
    gradient: "linear-gradient(135deg, #FFF9F5 0%, #F8D7DA 60%, #DCCFFB 100%)",
    image: "/gallery/mother.jpeg",
    emoji: "🌸",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "m2",
    caption: "Notebooks full of stars",
    category: "School Days",
    gradient: "linear-gradient(135deg, #DCCFFB 0%, #FFF9F5 100%)",
     image: "/gallery/badge.jpeg",
    emoji: "📚",
    span: "",
  },
  {
    id: "m3",
    caption: "Friendships that stayed",
    category: "Engineering Days",
    gradient: "linear-gradient(135deg, #F8D7DA 0%, #DCCFFB 100%)",
    image: "/gallery/friends.jpeg",
    emoji: "🎀",
    span: "",
  },
  {
    id: "m4",
    caption: "Sunset on campus walks",
    category: "Katalyst Moments",
    gradient: "linear-gradient(135deg, #F8D7DA 0%, #B48BBE 60%, #FFF9F5 100%)",
    image: "/gallery/katalyst.jpeg",
    emoji: "✨",
    span: "md:row-span-2",
  },
  {
    id: "m5",
    caption: "Quiet wins after loud doubts",
    category: "Mentoring sessions",
    gradient: "linear-gradient(135deg, #2A1E35 0%, #4B2E39 60%, #B48BBE 100%)",
    image: "/gallery/activity.jpeg",
    emoji: "⚡",
    span: "",
  },
  {
    id: "m6",
    caption: "Late-night code, soft hope",
    category: "Engineering Life",
    gradient: "linear-gradient(135deg, #2A1E35 0%, #4B2E39 70%, #DCCFFB 100%)",
    image: "/gallery/project.jpeg",
    emoji: "💻",
    span: "",
  },
  {
    id: "m7",
    caption: "The offer that changed everything",
    category: "Success Celebrations",
    gradient: "linear-gradient(135deg, #F4D58D, #F8D7DA, #FFF9F5)",
    image: "/gallery/offer.jpeg",
    emoji: "🏆",
    span: "md:col-span-2",
  },
  {
    id: "m8",
    caption: "Smile she finally believed in",
    category: "Success Celebrations",
    gradient: "linear-gradient(135deg, #F8D7DA 0%, #DCCFFB 100%)",
    image: "/gallery/smile.jpeg",
    emoji: "🌟",
    span: "",
  },
];

/**
 * Gallery: an aesthetic memory grid with a soft lightbox.
 * Images are placeholder gradients with emoji + caption — easy to swap for real photos later.
 */
export default function Gallery() {
  const [active, setActive] = useState<Memory | null>(null);

  return (
    <section
      id="gallery"
      className="relative section-pad overflow-hidden section-tint-warm"
    >
      <FloatingParticles count={10} variant="petal" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-4"
            style={{ color: "#D4855A" }}
          >
            Glimpses of Her Days
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display display-bold text-5xl md:text-7xl"
            style={{ color: "#6B4FA0" }}
          >
            Memory Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-5">
          {memories.map((m, i) => (
            <MemoryTile
              key={m.id}
              memory={m}
              index={i}
              onOpen={() => setActive(m)}
            />
          ))}
        </div>
      </div>

      <Lightbox memory={active} onClose={() => setActive(null)} />
    </section>
  );
}

function MemoryTile({
  memory,
  index,
  onOpen,
}: {
  memory: Memory;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative memory-card overflow-hidden text-left ${memory.span}`}
      aria-label={`Open memory: ${memory.caption}`}
    >
      {/* Gradient base shows while the image loads / as a fallback */}
      <div
        className="absolute inset-0"
        style={{
          background: memory.gradient,
        }}
      />

      {memory.image ? (
        <>
          {/* Memory photograph */}
          <Image
            src={withBasePath(memory.image)}
            alt={memory.caption}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Image overlay per design system */}
          <div aria-hidden className="absolute inset-0 pointer-events-none img-overlay" />
        </>
      ) : (
        /* No photo yet — giant emoji over gradient */
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-7xl md:text-8xl"
            style={{ filter: "drop-shadow(0 6px 18px rgba(74,56,96,0.25))" }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {memory.emoji}
          </motion.span>
        </div>
      )}

      {/* Caption */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-md border-t"
        style={{
          background: "rgba(255,250,246,0.9)",
          borderColor: "#e8d8f0",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: "#D4855A" }}
        >
          <span className="mr-2">{memory.emoji}</span>
          {memory.category}
        </p>
        <p
          className="font-display text-base mt-1"
          style={{ color: "#6B4FA0", fontWeight: 600 }}
        >
          {memory.caption}
        </p>
      </div>

      {/* Hover shimmer */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
        }}
      />
    </motion.button>
  );
}

function Lightbox({
  memory,
  onClose,
}: {
  memory: Memory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-6"
          style={{
            background: "rgba(74,56,96,0.75)",
            backdropFilter: "blur(12px)",
          }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl aspect-video memory-card overflow-hidden"
            style={{
              background: memory.gradient,
              boxShadow:
                "0 30px 80px rgba(74,56,96,0.45), 0 0 0 1px #e0cff5 inset",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              style={{
                background: "#fffaf6",
                border: "1px solid #e8d8f0",
                color: "#6B4FA0",
              }}
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {memory.image ? (
              <>
                {/* Full-size memory image */}
                <Image
                  src={withBasePath(memory.image)}
                  alt={memory.caption}
                  fill
                  sizes="(max-width: 768px) 90vw, 48rem"
                  priority
                  className="object-cover"
                />
                {/* Image overlay per design system */}
                <div aria-hidden className="absolute inset-0 pointer-events-none img-overlay" />
              </>
            ) : (
              /* No photo — giant emoji centered on the gradient */
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-9xl md:text-[10rem]"
                  style={{ filter: "drop-shadow(0 12px 30px rgba(74,56,96,0.3))" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {memory.emoji}
                </motion.span>
              </div>
            )}

            {/* Caption overlaid on the photograph */}
            <div className="absolute inset-x-0 bottom-0 p-8 text-left">
              <p
                className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em]"
                style={{ color: "#fff9f0" }}
              >
                <span className="mr-2">{memory.emoji}</span>
                {memory.category}
              </p>
              <p
                className="mt-2 font-display text-2xl md:text-3xl"
                style={{ color: "#fff9f0", fontWeight: 600 }}
              >
                {memory.caption}
              </p>
            </div>

            <FloatingParticles count={14} variant="sparkle" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
