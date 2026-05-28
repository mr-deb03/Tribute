"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Loader: elegant entry screen with rotating heart and shimmering name.
 * Auto-dismisses after a short window so users always see content.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(160deg, #fdf4ff 0%, #fce8f3 50%, #fff3ec 100%)",
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #C084FC, #6B4FA0, #D4855A, #C084FC)",
                filter: "blur(2px)",
                opacity: 0.7,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path
                  d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                  fill="url(#loaderGrad)"
                />
                <defs>
                  <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#D4855A" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 font-display text-2xl tracking-wide"
            style={{ color: "#6B4FA0", fontWeight: 700 }}
          >
            Sneha
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-2 text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ color: "#D4855A" }}
          >
            preparing her story
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
