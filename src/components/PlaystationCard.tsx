import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* =========================
   🔥 ADD YOUR 5 IMAGES HERE
   ========================= */

import slide1 from "@/assets/ps1.webp";
import slide2 from "@/assets/ps2.webp";
import slide3 from "@/assets/ps3.webp";
import slide4 from "@/assets/ps4.webp";
import slide5 from "@/assets/ps5.webp";

const slides = [slide1, slide2, slide3, slide4, slide5];

const PlaystationCard = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gameofwar"
      className="relative h-screen w-full overflow-hidden bg-black"
    >

      {/* Top Left Small Brand Label */}
<div className="absolute top-6 left-6 z-20">
  <div className="px-6 py-3 pt-2 rounded-full
                bg-red-900/40 backdrop-blur-md
                border border-red-500/40
                shadow-[0_0_20px_rgba(239,68,68,0.35)]">
  <span className="text-red-300 text-sm tracking-widest font-semibold">
    Game Of War
  </span>
</div>
</div>
      {/* ================= SLIDES ================= */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.18),transparent_60%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">

          {/* Small Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-red-400 tracking-widest text-sm uppercase font-semibold">
              Next-Gen Gaming Arena
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="text-white">Play Beyond</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-white to-red-600 bg-clip-text text-transparent">
              Imagination.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 max-w-xl text-lg mb-10 leading-relaxed"
          >
            From nostalgic console battles to cutting-edge PS5 adventures,
            our gaming zone delivers immersive 4K worlds, competitive
            multiplayer action, and next-level performance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://147-snooker.netlify.app/"
              className="px-8 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-red-600 to-red-500
                         text-white
                         shadow-[0_0_25px_rgba(220,38,38,0.6)]
                         hover:scale-105 transition"
            >
              Reserve a PS5 Pod
            </a>

            <a
              href="https://147-snooker.netlify.app/"
              className="px-8 py-4 rounded-xl font-semibold
                         border border-red-400
                         text-red-300
                         hover:bg-red-500/10
                         transition"
            >
              Explore Consoles
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= PROGRESS BAR ================= */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/40">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-red-500"
        />
      </div>

      {/* ================= DOT INDICATORS ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                : "w-2 bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PlaystationCard;