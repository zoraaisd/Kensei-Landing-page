import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ===== ADD YOUR 3 IMAGES HERE ===== */
import slide1 from "@/assets/opt-man1.webp";
import slide2 from "@/assets/opt-man2.webp";
import slide3 from "@/assets/opt-man3.webp";
import slide4 from "@/assets/opt-man4.webp";
import slide5 from "@/assets/opt-man5.webp";

const slides = [slide1, slide2, slide3, slide4, slide5];

const OptimusManpowerCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="optimus-manpower"
      className="relative w-full py-24 min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Top Left Small Brand Label */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-6 py-2 rounded-full
                bg-zinc-900/50 backdrop-blur-md
                border border-gray-400/50
                shadow-[0_0_20px_rgba(192,192,192,0.3)]">
          <span className="text-gray-200 text-sm tracking-widest font-semibold">
            Optimus Manpower
          </span>
        </div>
      </div>

      {/* ===== Slideshow Background ===== */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />
      </AnimatePresence>

      {/* Dark Cinematic Overlay - Black/Grey */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-zinc-900/80 to-black/90" />

      {/* Silver Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(209,213,219,0.12),transparent_60%)]" />

      {/* ===== Content Left Aligned ===== */}
      <div className="relative z-10 w-full">
        <div className="px-8 lg:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >

          {/* Small Tagline */}
          <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">
            Workforce Solutions & HR Excellence
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Elite Talent,
            <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(209,213,219,0.6)]">
              Strategic Growth.
            </span>
          </h1>

          {/* Quote Style Line */}
          <p className="italic text-gray-400 mb-6">
            "Where expertise meets opportunity."
          </p>

          {/* Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Optimus Manpower is your strategic partner in building world-class teams.
            We connect exceptional talent with leading organizations, delivering
            comprehensive HR solutions that drive growth, innovation, and sustained success.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <motion.a
              href="https://www.optimusglobalhr.com/jobs#jobs-hero"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold
                         bg-white text-black
                         hover:bg-gray-200
                         shadow-[0_0_30px_rgba(209,213,219,0.5)]
                         transition-all duration-300"
            >
              Explore Opportunities →
            </motion.a>

            <motion.a
              href="https://www.optimusglobalhr.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold
                         border border-gray-300 text-gray-200
                         hover:bg-gray-300 hover:text-black
                         transition-all duration-300"
            >
              Get In Touch
            </motion.a>

          </div>
        </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${i === index
                ? "w-8 bg-gray-300 shadow-[0_0_15px_rgba(209,213,219,0.9)]"
                : "w-2 bg-gray-600"
              }`}
          />
        ))}
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-black/40">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-gray-300"
        />
      </div>

    </section>
  );
};

export default OptimusManpowerCard;
