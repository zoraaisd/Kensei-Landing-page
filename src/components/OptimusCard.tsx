import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ===== ADD 3 CAMPUS / EDUCATION IMAGES HERE ===== */
import slide1 from "@/assets/optimus1.webp";
import slide2 from "@/assets/optimus2.webp";
import slide3 from "@/assets/optimus3.webp";

const slides = [slide1, slide2, slide3];

const OptimusCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="optimus"
      className="relative scroll-mt-24 w-full overflow-hidden bg-black py-16 sm:py-20 md:py-12 lg:py-10 xl:min-h-[100svh] xl:py-0"
    >
      {/* Top Left Small Brand Label */}
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <div
          className="rounded-full border border-blue-400/40 bg-blue-900/40 px-6 py-2
                backdrop-blur-md
                shadow-[0_0_20px_rgba(59,130,246,0.35)]"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-300 sm:text-sm sm:tracking-widest">
            Optimus Overseas
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

      {/* Blue Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-black/90" />

      {/* Gold Elegant Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(234,179,8,0.18),transparent_60%)]" />

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
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs sm:tracking-widest md:text-sm">
              Global Education Pathways
            </p>

            <h1
              className="mb-6 text-center text-3xl font-extrabold leading-[1.02] text-white sm:text-4xl md:text-5xl lg:text-[4.1rem] xl:text-7xl"
            >
              <span className="text-white">Study Beyond</span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-yellow-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                Boundaries.
              </span>
            </h1>

            <p className="mb-4 text-center text-base italic text-blue-200 md:text-lg">
              "Your global academic journey starts here."
            </p>

            <p className="mb-10 max-w-2xl text-center text-[0.95rem] leading-relaxed text-white/90 sm:text-base md:text-lg">
              Optimus Overseas empowers students to unlock international
              education opportunities with confidence and clarity. From
              personalized counseling to university admissions, visa support,
              and beyond, we guide you every step toward academic excellence
              and global success.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://www.optimusoverseasedu.com/universities"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-semibold
                         bg-blue-600 hover:bg-blue-500
                         text-white
                         shadow-[0_0_30px_rgba(59,130,246,0.6)]
                         transition"
              >
                Explore Universities
              </motion.a>

              <motion.a
                href="https://www.optimusoverseasedu.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-semibold
                         border border-yellow-400 text-yellow-400
                         hover:bg-yellow-400 hover:text-black
                         transition"
              >
                Free Consultation
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
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.9)]"
                : "w-2 bg-gray-500"
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
          className="h-full bg-yellow-400"
        />
      </div>
    </section>
  );
};

export default OptimusCard;
