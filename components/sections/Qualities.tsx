"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkle,
  HandHeart,
  BrainCircuit,
  Gem,
  Flower2,
  Shield,
  Sun,
  Flame,
  Globe,
  Sunrise,
  Hammer,
} from "lucide-react";
import FloatingParticles from "../atmosphere/FloatingParticles";

const qualities = [
  {
    title: "Innocent Heart",
    desc: "A heart that never learned how to hurt anyone.",
    Icon: Heart,
    gradient: "from-blush-200 to-ivory",
    glow: "rgba(248,215,218,0.55)",
  },
  {
    title: "Cutie Soul",
    desc: "Quiet smiles, soft laughs, and a presence like sunlight.",
    Icon: Sparkle,
    gradient: "from-lavender-200 to-blush-200",
    glow: "rgba(220,207,251,0.55)",
  },
  {
    title: "Supportive Nature",
    desc: "Always the first to stay when others walked away.",
    Icon: HandHeart,
    gradient: "from-blush-200 to-lavender-200",
    glow: "rgba(248,215,218,0.5)",
  },
  {
    title: "Understanding Mind",
    desc: "Listens before judging, feels before responding.",
    Icon: BrainCircuit,
    gradient: "from-lavender-200 to-ivory",
    glow: "rgba(220,207,251,0.55)",
  },
  {
    title: "Mature Personality",
    desc: "Wisdom carried gently, never worn as armor.",
    Icon: Gem,
    gradient: "from-mauve-400/60 to-lavender-200",
    glow: "rgba(180,139,190,0.55)",
  },
  {
    title: "Pure Kindness",
    desc: "Gives without measuring, loves without expecting.",
    Icon: Flower2,
    gradient: "from-gold-300/80 to-ivory",
    glow: "rgba(244,213,141,0.55)",
  },
  {
    title: "Strong Woman",
    desc: "Bends through storms, never breaks underneath them.",
    Icon: Shield,
    gradient: "from-mauve-400/60 to-blush-200",
    glow: "rgba(180,139,190,0.55)",
  },
  {
    title: "Beautiful Heart",
    desc: "The kind of beauty time can never take away.",
    Icon: Sun,
    gradient: "from-ivory to-gold-300/80",
    glow: "rgba(244,213,141,0.55)",
  },
  {
    title: "Determined",
    desc: "A quiet promise to herself that she'll never give up.",
    Icon: Flame,
    gradient: "from-blush-200 to-ivory",
    glow: "rgba(212,133,90,0.55)",
  },
  {
    title: "Broad Minded",
    desc: "Listens to every world, and chooses to grow within them all.",
    Icon: Globe,
    gradient: "from-lavender-200 to-ivory",
    glow: "rgba(192,132,252,0.55)",
  },
  {
    title: "Optimistic",
    desc: "Believes in sunlight, even on her cloudiest days.",
    Icon: Sunrise,
    gradient: "from-gold-300/80 to-blush-200",
    glow: "rgba(244,213,141,0.55)",
  },
  {
    title: "Hardworking",
    desc: "Builds her dreams one quiet, dedicated day at a time.",
    Icon: Hammer,
    gradient: "from-mauve-400/60 to-ivory",
    glow: "rgba(180,139,190,0.55)",
  },
];

/**
 * Qualities: grid of glassmorphism cards highlighting Sneha's character.
 */
export default function Qualities() {
  return (
    <section
      id="qualities"
      className="relative section-pad overflow-hidden section-tint-cool"
    >
      <FloatingParticles count={14} variant="heart" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-4"
            style={{ color: "#D4855A" }}
          >
            What Makes Her Sneha
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display display-bold text-5xl md:text-7xl"
            style={{ color: "#6B4FA0" }}
          >
            Her Beautiful Qualities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg"
            style={{ color: "#5a4a72", lineHeight: 1.7 }}
          >
            Eight quiet truths about a heart that refused to grow cold.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((q, i) => (
            <QualityCard key={q.title} q={q} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityCard({
  q,
  index,
}: {
  q: (typeof qualities)[number];
  index: number;
}) {
  const { Icon } = q;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-7 chapter-card overflow-hidden">
        {/* Floating glow blob */}
        <motion.span
          aria-hidden
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-60 group-hover:opacity-90 transition-opacity"
          style={{
            background: `radial-gradient(circle, rgba(192,132,252,0.35) 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Icon */}
        <motion.div
          className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
          style={{
            background: "#f3e6f8",
            border: "1px solid #e8d8f0",
            boxShadow: "0 6px 18px rgba(192,132,252,0.18)",
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon
            size={26}
            strokeWidth={2.2}
            style={{ color: "#6B4FA0" }}
          />
        </motion.div>

        <h3
          className="font-display text-2xl mb-3"
          style={{ color: "#6B4FA0", fontWeight: 700 }}
        >
          {q.title}
        </h3>
        <p
          className="text-base"
          style={{ color: "#5a4a72", lineHeight: 1.7 }}
        >
          {q.desc}
        </p>

        {/* Bottom shimmer */}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(192,132,252,0.6), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}
