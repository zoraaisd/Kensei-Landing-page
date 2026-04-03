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
      className="relative w-full py-24 min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Top Left Small Brand Label */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-6 py-2 rounded-full
                bg-blue-900/40 backdrop-blur-md
                border border-blue-400/40
                shadow-[0_0_20px_rgba(59,130,246,0.35)]">
          <span className="text-blue-300 text-sm tracking-widest font-semibold">
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
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
            Global Education Pathways
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Study Beyond
            <span className="block bg-gradient-to-r from-blue-300 via-yellow-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              Boundaries.
            </span>
          </h1>

          {/* Quote */}
          <p className="italic text-white/90 mb-6">
            “Your global academic journey starts here.”
          </p>

          {/* Paragraph */}
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Optimus Overseas empowers students to unlock international
            education opportunities with confidence and clarity.
            From personalized counseling to university admissions
            and visa support, we guide you every step toward
            academic excellence and global success.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <motion.a
              href="https://www.optimusoverseasedu.com/universities"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold
                         bg-blue-600 hover:bg-blue-500
                         text-white
                         shadow-[0_0_30px_rgba(59,130,246,0.6)]
                         transition"
            >
              Explore Universities →
            </motion.a>

            <motion.a
              href="https://www.optimusoverseasedu.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold
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
            className={`h-2 rounded-full transition-all duration-500 ${i === index
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
