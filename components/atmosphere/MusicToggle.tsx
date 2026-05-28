"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

/**
 * MusicToggle: floating glass button that toggles ambient background music.
 * Browser autoplay rules: audio will only start on user click. We supply
 * a remote audio URL prop; if it fails to load we silently fall back to
 * "muted" visual state.
 */
export default function MusicToggle({
  src = "https://cdn.pixabay.com/audio/2022/10/18/audio_31750e9059.mp3",
}: {
  src?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={playing ? "Pause background music" : "Play background music"}
      className="fixed bottom-6 right-6 z-[90] glass rounded-full w-14 h-14 flex items-center justify-center"
      style={{
        boxShadow: playing
          ? "0 0 40px rgba(244,213,141,0.7), 0 0 80px rgba(180,139,190,0.5)"
          : "0 0 20px rgba(180,139,190,0.35)",
      }}
    >
      <motion.div
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={
          playing
            ? { repeat: Infinity, duration: 6, ease: "linear" }
            : { duration: 0.3 }
        }
        className="text-plum-600"
      >
        {playing ? <Music size={20} /> : <VolumeX size={20} />}
      </motion.div>
      {playing && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full border border-gold-300"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
