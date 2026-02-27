import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import slide1 from "@/assets/snookers1.jpeg";
import slide2 from "@/assets/snookers2.jpeg";
import slide3 from "@/assets/snookers3.jpeg";
import slide4 from "@/assets/snookers4.jpeg";
import slide5 from "@/assets/snookers5.jpeg";

const slides = [slide1, slide2, slide3, slide4, slide5];

const SnookersPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="snookers"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Top Left Small Brand Label */}
<div className="absolute top-6 left-6 z-20">
  <div className="px-6 py-2 rounded-full
                  bg-emerald-900/40 backdrop-blur-md
                  border border-emerald-400/40
                  shadow-[0_0_20px_rgba(16,185,129,0.3)]">
    <span className="text-emerald-300 text-sm tracking-widest font-semibold">
      147 Snookers
    </span>
  </div>
</div>
      {/* ================= BACKGROUND SLIDES ================= */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />

      {/* Emerald subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_60%)]" />

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
            <span className="text-emerald-400 tracking-widest text-sm uppercase font-semibold">
              Precision • Prestige • Performance
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="text-white">Play with</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-500 bg-clip-text text-transparent">
              Elite Precision.
            </span>
          </motion.h1>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="italic text-emerald-300 mb-4 text-lg"
          >
            "Where strategy meets mastery."
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-xl text-lg mb-10 leading-relaxed"
          >
            Experience world-class snooker tables, professional lighting,
            and a championship atmosphere crafted for enthusiasts and
            competitive players alike.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="#booking"
              className="px-8 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-emerald-600 to-green-500
                         text-white
                         shadow-[0_0_25px_rgba(16,185,129,0.6)]
                         hover:scale-105 transition"
            >
              Reserve a Table
            </a>

            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl font-semibold
                         border border-emerald-400
                         text-emerald-300
                         hover:bg-emerald-500/10
                         transition"
            >
              Explore Pricing
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= SLIDE PROGRESS BAR ================= */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/40">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-emerald-400"
        />
      </div>
    </section>
  );
};

export default SnookersPage;