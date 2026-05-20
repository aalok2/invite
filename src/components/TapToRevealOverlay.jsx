"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TapToRevealOverlay({ content, colors, isOpen, onReveal }) {
  const [isRevealing, setIsRevealing] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }}
      aria-hidden={false}
    >
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 border-r"
        style={{
          backgroundColor: colors.bgEnvelope,
          borderColor: `${colors.goldAccent}70`
        }}
        initial={{ x: 0 }}
        animate={{ x: isRevealing ? "-60vw" : 0 }}
        transition={{ duration: 0.95, ease: [0.44, 0, 0.21, 1] }}
      >
        <div className="pointer-events-none absolute inset-4 rounded-3xl border-2 border-dashed" style={{ borderColor: `${colors.goldAccent}80` }} />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 border-l"
        style={{
          backgroundColor: colors.bgEnvelope,
          borderColor: `${colors.goldAccent}70`
        }}
        initial={{ x: 0 }}
        animate={{ x: isRevealing ? "60vw" : 0 }}
        transition={{ duration: 0.95, ease: [0.44, 0, 0.21, 1] }}
      >
        <div className="pointer-events-none absolute inset-4 rounded-3xl border-2 border-dashed" style={{ borderColor: `${colors.goldAccent}80` }} />
      </motion.div>

      <motion.button
        type="button"
        className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xl font-semibold text-white shadow-2xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, #BD2E2E, #8E1F1F 70%)"
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(212,175,55,0.28)",
            "0 0 0 20px rgba(212,175,55,0)",
            "0 0 0 0 rgba(212,175,55,0)"
          ]
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 0.6
        }}
        aria-label={content.ariaLabel}
        disabled={isRevealing}
        onClick={() => {
          setIsRevealing(true);
          setTimeout(() => onReveal(), 900);
        }}
      >
        <span className="pointer-events-none text-2xl tracking-wide">{content.waxSealInitials}</span>
      </motion.button>

      <motion.p
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-base font-medium"
        style={{ color: colors.textHeading }}
        initial={{ opacity: 0.4, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
      >
        {content.cta}
      </motion.p>
    </motion.div>
  );
}
