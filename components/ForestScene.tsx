"use client";

import { motion } from "framer-motion";
import type { FC } from "react";
import CatSprite from "./CatSprite";

const CANOPY_LAYERS = Array.from({ length: 4 }, (_, index) => index);

const FIREFLIES = [
  { top: "18%", left: "12%" },
  { top: "28%", left: "42%" },
  { top: "22%", left: "68%" },
  { top: "34%", left: "82%" },
  { top: "46%", left: "18%" },
  { top: "54%", left: "56%" },
  { top: "63%", left: "73%" },
  { top: "68%", left: "34%" },
  { top: "38%", left: "24%" },
  { top: "26%", left: "88%" },
  { top: "52%", left: "8%" },
  { top: "44%", left: "92%" }
];

const mistVariants = {
  animate: {
    opacity: [0.2, 0.45, 0.25],
    x: ["-8%", "12%", "-8%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const fireflyVariants = (delay: number) => ({
  animate: {
    opacity: [0.1, 1, 0.1],
    scale: [0.5, 1.2, 0.8],
    y: ["0%", "-18%", "10%"],
    x: ["0%", "6%", "-4%"],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  }
});

const ForestScene: FC = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="starfield" />

      <motion.div
        className="absolute inset-0 animate-background-pan"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(14,38,30,0.6) 25%, rgba(2,9,8,0.9) 50%, rgba(14,38,30,0.6) 75%)",
          backgroundSize: "400%"
        }}
      />

      <div className="absolute inset-0">
        {CANOPY_LAYERS.map((index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          return (
            <motion.div
              key={`canopy-${index}`}
              className="absolute inset-x-0 rounded-full"
              style={{
                bottom: `${index * 12}%`,
                height: `${60 + index * 40}px`,
                background:
                  "radial-gradient(circle at 20% 50%, rgba(66, 110, 90, 0.45), transparent 60%), radial-gradient(circle at 60% 50%, rgba(30, 81, 61, 0.7), transparent 70%)"
              }}
              animate={{ x: [0, direction * 24] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror" as const,
                duration: 18,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="absolute inset-0"
        variants={mistVariants}
        animate="animate"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e1a]/70 via-transparent to-transparent blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 flex items-end justify-center">
        <div className="relative w-full max-w-5xl px-6 pb-32 pt-24">
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#020908] via-[#051510e6] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-emerald-300/20 blur-sm" />

          <CatSprite />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {FIREFLIES.map(({ top, left }, index) => (
          <motion.span
            key={`firefly-${index}`}
            className="absolute h-2 w-2 rounded-full bg-emerald-200/80 mix-blend-screen shadow-[0_0_12px_rgba(167,255,216,0.8)]"
            style={{
              top,
              left
            }}
            variants={fireflyVariants(index * 0.4)}
            animate="animate"
          />
        ))}
      </div>

      <div className="absolute top-16 w-full max-w-3xl px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-emerald-100 drop-shadow-[0_6px_14px_rgba(4,12,10,0.65)]">
          Twilight Forest Voyage
        </h1>
        <p className="mt-6 text-base md:text-lg text-emerald-50/85">
          Follow an adventurous cat weaving gracefully through a luminous
          twilight forest, guided by dancing fireflies and the soft glow of the
          canopy.
        </p>
      </div>
    </div>
  );
};

export default ForestScene;
