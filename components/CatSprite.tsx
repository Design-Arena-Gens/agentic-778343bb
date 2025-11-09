"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const catWalk = {
  animate: {
    x: ["-15%", "115%"],
    transition: {
      duration: 16,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const tailSwing = {
  animate: {
    rotate: ["-6deg", "4deg", "-6deg"],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const headBob = {
  animate: {
    y: ["0%", "4%", "0%"],
    transition: {
      duration: 0.9,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const legCycle = {
  animate: {
    rotate: ["12deg", "-14deg", "12deg"],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const backLegCycle = {
  animate: {
    rotate: ["-10deg", "18deg", "-10deg"],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3
    }
  }
};

const CatSprite: FC = () => {
  return (
    <motion.div
      className="relative w-56 h-32 drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]"
      variants={catWalk}
      animate="animate"
      initial={false}
    >
      <div className="absolute inset-0 flex items-end">
        <div className="relative w-full h-5 blur-md bg-emerald-900/60 rounded-full" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="relative h-20 w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f24] via-[#2a2e35] to-[#1f1f24] rounded-3xl border border-white/5" />

          <motion.div
            className="absolute -top-2 left-16 origin-bottom-left w-20 h-16 bg-gradient-to-br from-[#2f323a] to-[#1f1f24] rounded-3xl border border-white/5"
            variants={headBob}
          >
            <div className="absolute top-4 left-5 w-6 h-6 bg-black/50 rounded-full shadow-inner border border-white/10" />
            <div className="absolute top-4 left-6 w-4 h-4 bg-gradient-to-br from-[#65f5c4] to-[#27d3a3] rounded-full shadow-[0_0_12px_rgba(101,245,196,0.65)]" />
            <div className="absolute top-2 left-2 w-5 h-5 bg-gradient-to-r from-[#2f323a] to-[#14171d] rounded-t-full border border-white/5 rotate-[-18deg]" />
            <div className="absolute top-2 left-10 w-5 h-5 bg-gradient-to-l from-[#2f323a] to-[#14171d] rounded-t-full border border-white/5 rotate-[18deg]" />
            <div className="absolute top-9 right-2 w-6 h-3 rounded-full bg-black/40 blur-sm" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-24 h-20 origin-bottom bg-gradient-to-br from-[#1c2026] via-[#262a33] to-[#1d2128] rounded-[90%_40%_30%_80%] border border-white/5"
            variants={tailSwing}
          />

          <motion.div
            className="absolute bottom-0 left-6 origin-top bg-gradient-to-br from-[#111319] to-[#262a33] w-6 h-16 rounded-full border border-white/5"
            variants={legCycle}
          />
          <motion.div
            className="absolute bottom-0 left-16 origin-top bg-gradient-to-br from-[#111319] to-[#262a33] w-6 h-16 rounded-full border border-white/5"
            variants={backLegCycle}
          />
          <motion.div
            className="absolute bottom-0 left-28 origin-top bg-gradient-to-br from-[#111319] to-[#262a33] w-6 h-16 rounded-full border border-white/5"
            variants={legCycle}
          />
          <motion.div
            className="absolute bottom-0 left-40 origin-top bg-gradient-to-br from-[#111319] to-[#262a33] w-6 h-16 rounded-full border border-white/5"
            variants={backLegCycle}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CatSprite;
