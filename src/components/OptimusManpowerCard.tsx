import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
      className="relative scroll-mt-24 w-full overflow-hidden bg-black py-16 sm:py-20 md:py-12 lg:py-10 xl:min-h-[100svh] xl:py-0"
    >
      {/* Top Left Small Brand Label */}
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <div
          className="rounded-full border border-gray-400/50 bg-zinc-900/50 px-6 py-2
                backdrop-blur-md shadow-[0_0_20px_rgba(192,192,192,0.3)]"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-200 sm:text-sm sm:tracking-widest">
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
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
      </AnimatePresence>

      {/* Dark Cinematic Overlay - Black/Grey */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-zinc-900/80 to-black/90" />

      {/* Silver Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(209,213,219,0.12),transparent_60%)]" />

      {/* ===== Content ===== */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto flex w-full max-w-3xl flex-col items-center pt-10 text-center sm:pt-12 lg:max-w-4xl lg:pt-14 xl:pt-4"
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300 sm:text-xs sm:tracking-widest md:text-sm">
              Workforce Solutions | HR Excellence | Strategic Hiring
            </p>

            <h1 className="mb-6 text-center text-3xl font-extrabold leading-[1.02] text-white sm:text-4xl md:text-5xl lg:text-[4.1rem] xl:text-7xl">
              <span className="text-white">Elite Talent,</span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(209,213,219,0.6)]">
                Strategic Growth.
              </span>
            </h1>

            <p className="mb-4 text-center text-base italic text-gray-300 md:text-lg">
              "Where expertise meets opportunity."
            </p>

            <p className="mb-10 max-w-2xl text-center text-[0.95rem] leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Optimus Manpower is your strategic partner in building world-class teams.
              We connect exceptional talent with leading organizations, delivering
              comprehensive HR solutions that drive growth, innovation and sustained success.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://www.optimusglobalhr.com/jobs#jobs-hero"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-center font-semibold text-black
                         shadow-[0_0_30px_rgba(209,213,219,0.5)] transition-all duration-300 hover:bg-gray-200"
              >
                Explore Opportunities
              </motion.a>

              <motion.a
                href="https://www.optimusglobalhr.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto rounded-xl border border-gray-300 px-8 py-4 text-center font-semibold text-gray-200
                         transition-all duration-300 hover:bg-gray-300 hover:text-black"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
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
