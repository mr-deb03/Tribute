"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";
import FloatingParticles from "../atmosphere/FloatingParticles";
import { withBasePath } from "@/lib/basePath";

type Phase = {
  id: string;
  year: string;
  emoji: string;
  theme: string;
  title: string;
  description: string;
  achievements?: string[];
  image: string;
  accent: string; // gradient (frame + dark phase fallback)
  particles: "petal" | "sparkle" | "star" | "heart";
  cardClass: string;
};

const phases: Phase[] = [
  {
    id: "childhood",
    year: "Childhood",
    emoji: "🌸",
    theme: "Innocence & Pure Heart",
    title: "Where Kindness First Began",
    description:
      "Sneha's childhood was filled with innocence, warmth, and a smile capable of making anyone feel safe. She carried a naturally caring heart even before she understood how rare that truly was.",
    image: "/timeline/childhood.jpeg",
    accent: "linear-gradient(135deg, #f3e6f8 0%, #fce8f3 60%, #fffaf6 100%)",
    particles: "petal",
    cardClass: "",
  },
  {
    id: "school",
    year: "School Life",
    emoji: "📚",
    theme: "Supportive & Understanding",
    title: "The Friend Everyone Needed",
    description:
      "School was where Sneha quietly became unforgettable — Best Student five years in a row, Head Girl for three, leading the band as a major, racing every relay, sack race and marathon, and earning certificates from annual functions to elocution. Behind every trophy was a discipline you could feel — and beside it, a kindness everyone leaned on.",
    achievements: [
      "5× Best Student",
      "Head Girl · 3 years",
      "Band Major",
      "Elocution Certified",
      "Annual Function Honors",
      "Relay · Sack Race · Marathon",
    ],
    image: "/timeline/school.jpeg",
    accent: "linear-gradient(135deg, #e8d8f0 0%, #fce8f3 60%, #fffaf6 100%)",
    particles: "star",
    cardClass: "",
  },
  {
    id: "college",
    year: "College Life",
    emoji: "✨",
    theme: "Growth & Maturity",
    title: "Learning Life Beyond Dreams",
    description:
      "College transformed Sneha into someone emotionally stronger and wiser. Behind her calm smile was a girl learning how to balance pressure, ambitions, emotions, and self-growth while still protecting her soft heart.",
    image: "/timeline/college.jpeg",
    accent: "linear-gradient(135deg, #fce8f3 0%, #e8d8f0 50%, #C084FC 100%)",
    particles: "sparkle",
    cardClass: "",
  },
  {
    id: "engineering",
    year: "Engineering",
    emoji: "⚡",
    theme: "Pain, Doubt & Resilience",
    title: "The Phase That Tried to Break Her",
    description:
      "Engineering life was not easy for Sneha. Some people mocked her, underestimated her abilities, and made her feel inferior. There were silent tears, moments of exhaustion, and nights filled with self-doubt. But she never stopped trying — quietly turning her pain into determination. She represented her college, led IEEE Student Counselling and Sports Counselling, stood with Women in Engineering, won intercollege theatre three years running, and claimed first place at KHackathon and Katalyst Techfest in 2024, 2025 and 2026 — proof that the phase that tried to break her became the phase she rose through.",
    achievements: [
      "Student Representative",
      "IEEE Counselling Head",
      "Sports Counselling Head",
      "Women in Engineering",
      "3× Intercollege Theatre Champion",
      "3× KHackathon Winner · 2024–26",
      "3× Katalyst Techfest Winner · 2024–26",
      "Mini Project Winner",
    ],
    image: "/timeline/engineering.jpeg",
    accent: "linear-gradient(135deg, #4a3860, #6B4FA0, #C084FC)",
    particles: "sparkle",
    cardClass: "",
  },
  {
    id: "success",
    year: "Success & Rise",
    emoji: "🚀",
    theme: "Victory & Dream Fulfilled",
    title: "She Became Everything They Said She Couldn't",
    description:
      "Sneha chose growth over giving up. She kept learning, improving herself, and believing quietly in her dreams until one day she achieved her goal — becoming a Data Analyst at Deloitte. Her journey is a quiet reminder that strength does not always roar; sometimes it whispers, 'I will try again tomorrow.'",
    image: "/timeline/success.jpeg",
    accent: "linear-gradient(135deg, #D4855A, #E8A380, #fff9f0)",
    particles: "star",
    cardClass: "",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="timeline"
      className="relative section-pad overflow-hidden section-tint-warm"
    >
      <FloatingParticles count={16} variant="sparkle" />

      {/* Section heading */}
      <div className="relative max-w-4xl mx-auto text-center mb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-5"
          style={{ color: "#D4855A" }}
        >
          Her Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display display-bold text-5xl md:text-7xl"
          style={{ color: "#6B4FA0" }}
        >
          Chapters of Her Becoming
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg"
          style={{ color: "#5a4a72", lineHeight: 1.7 }}
        >
          Five seasons of a quiet, brave heart — each one shaping the woman she
          would beautifully become.
        </motion.p>
      </div>

      {/* Timeline rail */}
      <div className="relative max-w-6xl mx-auto">
        {/* Static rail */}
        <div
          aria-hidden
          className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(192,132,252,0.25), rgba(107,79,160,0.3), rgba(212,133,90,0.25))",
          }}
        />
        {/* Animated glowing rail */}
        <motion.div
          aria-hidden
          className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 w-0.5 origin-top rounded-full"
          style={{
            height: lineHeight,
            background:
              "linear-gradient(180deg, #C084FC, #6B4FA0, #D4855A, #C084FC)",
            boxShadow:
              "0 0 14px rgba(192,132,252,0.7), 0 0 28px rgba(107,79,160,0.4)",
          }}
        />

        <ol className="space-y-24 md:space-y-32">
          {phases.map((phase, idx) => (
            <PhaseCard key={phase.id} phase={phase} index={idx} />
          ))}
        </ol>
      </div>

      {/* Deloitte achievement badge */}
      <AchievementBadge />
    </section>
  );
}

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const isLeft = index % 2 === 0;
  const isDark = phase.id === "engineering";
  const isVictory = phase.id === "success";

  return (
    <motion.li
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
    >
      {/* Dot on rail — small joint */}
      <motion.div
        aria-hidden
        whileInView={{ scale: [0, 1.4, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
      >
        <div
          className="relative w-3 h-3 rounded-full"
          style={{
            background: "linear-gradient(135deg, #C084FC, #6B4FA0)",
            boxShadow:
              "0 0 14px rgba(192,132,252,0.7), 0 0 0 3px #fffaf6, 0 0 0 4px rgba(192,132,252,0.35)",
          }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            style={{ border: "1px solid rgba(192,132,252,0.7)" }}
          />
        </div>
      </motion.div>

      {/* Card side */}
      <div
        className={`pl-16 md:pl-0 ${
          isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
        }`}
      >
        <PhaseContent phase={phase} alignRight={isLeft} isDark={isDark} isVictory={isVictory} />
      </div>

      {/* Visual side */}
      <div
        className={`pl-16 md:pl-0 ${isLeft ? "md:col-start-2 md:pl-12" : "md:pr-12 md:row-start-1"}`}
      >
        <PhaseVisual phase={phase} isDark={isDark} />
      </div>
    </motion.li>
  );
}

function PhaseContent({
  phase,
  alignRight,
  isDark,
  isVictory,
}: {
  phase: Phase;
  alignRight: boolean;
  isDark: boolean;
  isVictory: boolean;
}) {
  return (
    <div className={alignRight ? "md:items-end" : ""}>
      <div
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em] mb-5"
        style={{
          background: "#fffaf6",
          border: "1px solid #e8d8f0",
          color: "#6B4FA0",
          boxShadow: "0 4px 14px rgba(180,140,220,0.12)",
        }}
      >
        <span className="text-base">{phase.emoji}</span>
        <span>{phase.year}</span>
      </div>
      <h3
        className="font-display display-bold text-4xl md:text-5xl mb-4"
        style={{ color: isVictory ? "#D4855A" : "#6B4FA0" }}
      >
        {phase.title}
      </h3>
      <p
        className="italic mb-5 font-medium text-base md:text-lg font-display"
        style={{ color: "#D4855A" }}
      >
        {phase.theme}
      </p>
      <p
        className="text-base md:text-lg"
        style={{ color: "#5a4a72", lineHeight: 1.7 }}
      >
        {phase.description}
      </p>

      {phase.achievements && phase.achievements.length > 0 && (
        <ul
          className={`mt-6 flex flex-wrap gap-2 ${
            alignRight ? "md:justify-end" : "md:justify-start"
          } justify-center`}
        >
          {phase.achievements.map((a) => (
            <li
              key={a}
              className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full"
              style={{
                background: "#fffaf6",
                border: "1px solid #e8d8f0",
                color: "#6B4FA0",
                boxShadow: "0 2px 8px rgba(180,140,220,0.12)",
              }}
            >
              {a}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PhaseVisual({ phase, isDark }: { phase: Phase; isDark: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative group chapter-card overflow-hidden"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden ${
          isDark ? "rain-glass" : ""
        }`}
        style={{
          background: phase.accent,
        }}
      >
        {/* Blurred backdrop — same image, heavily blurred, fills the card */}
        <Image
          src={withBasePath(phase.image)}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 90vw, 28rem"
          className="object-cover scale-110"
          style={{ filter: "blur(28px) saturate(120%) brightness(0.95)" }}
        />
        {/* Soft tint over the blurred backdrop for legibility */}
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "rgba(42,30,53,0.35)"
              : "rgba(255,250,246,0.18)",
          }}
        />

        {/* Phase photograph — contained on top so nothing crops */}
        <Image
          src={withBasePath(phase.image)}
          alt={`${phase.year} — ${phase.title}`}
          fill
          sizes="(max-width: 768px) 90vw, 28rem"
          className="object-contain"
        />

        {/* Inner FloatingParticles tinted for each phase */}
        <FloatingParticles count={8} variant={phase.particles} />

        {/* Image overlay per design system */}
        <div aria-hidden className="absolute inset-0 pointer-events-none img-overlay" />

        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
            style={{
              background: "#fffaf6",
              border: "1px solid #e8d8f0",
              color: "#6B4FA0",
            }}
          >
            Phase {phaseIndex(phase.id)}
          </span>
          <span
            className="font-display italic text-base md:text-lg"
            style={{ color: "#fff9f0" }}
          >
            {phase.emoji} {phase.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function phaseIndex(id: string) {
  const map: Record<string, string> = {
    childhood: "01",
    school: "02",
    college: "03",
    engineering: "04",
    success: "05",
  };
  return map[id] ?? "00";
}

function AchievementBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mt-24 max-w-md mx-auto"
    >
      <div
        className="relative chapter-card p-10 text-center"
        style={{
          background:
            "linear-gradient(135deg, #fff9f0 0%, #fce8f3 60%, #f3e6f8 100%)",
          boxShadow:
            "0 12px 40px rgba(180,140,220,0.18), 0 0 0 1px #e8d8f0",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(212,133,90,0.35), transparent 30%)",
            mixBlendMode: "overlay",
          }}
        />
        <Trophy
          size={48}
          className="mx-auto mb-4"
          strokeWidth={2}
          style={{
            color: "#D4855A",
            filter: "drop-shadow(0 4px 12px rgba(212,133,90,0.45))",
          }}
        />
        <p
          className="text-xs font-semibold uppercase tracking-[0.4em] mb-3"
          style={{ color: "#D4855A" }}
        >
          Achievement Unlocked
        </p>
        <h4
          className="font-display display-bold text-3xl md:text-4xl"
          style={{ color: "#6B4FA0" }}
        >
          Data Analyst @ Deloitte
        </h4>
        <p
          className="mt-4 text-base italic font-display"
          style={{ color: "#D4855A" }}
        >
          The dream she quietly believed in.
        </p>
      </div>
      <FloatingParticles count={10} variant="star" className="rounded-3xl" />
    </motion.div>
  );
}
