"use client";

import { motion } from "framer-motion";
import FloatingParticles from "../atmosphere/FloatingParticles";

/**
 * Letter: a handwritten-style appreciation note on a faux paper surface.
 * Uses the "paper" utility from globals.css for ruled-line texture.
 */
export default function Letter() {
  return (
    <section
      id="letter"
      className="relative section-pad overflow-hidden"
      style={{ background: "#fff9f0" }}
    >
      <FloatingParticles count={14} variant="sparkle" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] mb-4"
            style={{ color: "#D4855A" }}
          >
            A Letter, From The Heart
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display display-bold text-4xl md:text-6xl"
            style={{ color: "#6B4FA0" }}
          >
            To Sneha, The Girl Who Never Stopped Fighting
          </motion.h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative paper p-10 md:p-16"
          style={{
            transform: "rotate(-1deg)",
            borderRadius: "16px",
            border: "1px solid #e8d8f0",
            boxShadow: "0 18px 50px rgba(180,140,220,0.18)",
          }}
        >
          {/* Glow halo */}
          <span
            aria-hidden
            className="absolute -inset-6 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(244,114,182,0.25), transparent 70%)",
              filter: "blur(30px)",
              zIndex: -1,
            }}
          />

          <div
            className="font-hand text-3xl md:text-4xl leading-[2.8rem] md:leading-[3.6rem]"
            style={{ color: "#4a3860" }}
          >
            <p className="mb-6">Dear Sneha,</p>

            <p className="mb-6">
              There is a quiet kind of magic in the way you carry yourself —
              the kind that doesn&apos;t ask to be noticed, yet leaves a
              warmth wherever you go.
            </p>

            <p className="mb-6">
              I&apos;ve watched your story bend through storms others would
              have broken under. Through doubt, through tears, through nights
              that felt too long — you stayed kind. You stayed soft. You
              stayed{" "}
              <span className="rosegold-text font-semibold">you</span>.
            </p>

            <p className="mb-6">
              The world tried to convince you that you were not enough. You
              answered by becoming so much more &mdash; without ever losing the
              gentleness that makes you, you.
            </p>

            <p className="mb-6">
              I&apos;m proud of you. Of the girl who cried quietly and still
              showed up. Of the woman who is now a Data Analyst at Deloitte
              not because the path was easy, but because she refused to let
              it be the end.
            </p>

            <p className="mb-6">
              Your heart is the kind that the world doesn&apos;t make anymore.
              Please keep it that way. Stay innocent in a world that demands
              hardness. Stay hopeful in a world that doubts. Stay you — soft,
              strong, and brilliant all at once.
            </p>

            <p className="mb-6">
              You inspire people you may never know you&apos;ve touched.
            </p>

            <p className="mb-2">With deep admiration,</p>
            <p
              className="font-display italic text-3xl md:text-4xl"
              style={{ color: "#D4855A", fontWeight: 600 }}
            >
              — A friend who you know.
            </p>
          </div>

          {/* Pressed flower accents */}
          <motion.span
            aria-hidden
            className="absolute -top-4 -left-4 text-5xl"
            animate={{ rotate: [0, 10, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🌸
          </motion.span>
          <motion.span
            aria-hidden
            className="absolute -bottom-4 -right-4 text-4xl"
            animate={{ rotate: [0, -10, 5, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
          >
            🌷
          </motion.span>
        </motion.article>
      </div>
    </section>
  );
}
