import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ===== ADD YOUR 3 IMAGES HERE ===== */
import slide1 from "@/assets/dip1.webp";
import slide2 from "@/assets/dip2.webp";
import slide3 from "@/assets/dip3.webp";

const slides = [slide1, slide2, slide3];

const DipDashCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dipdash"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
    >

      {/* Top Left Small Brand Label */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-6 py-2 rounded-full
                bg-purple-900/40 backdrop-blur-md
                border border-purple-400/40
                shadow-[0_0_20px_rgba(168,85,247,0.35)]">
          <span className="text-purple-300 text-sm tracking-widest font-semibold">
            Dip & Dash
          </span>
        </div>
      </div>
      {/* ===== Slideshow Background ===== */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      {/* Purple Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* ===== Content Left Aligned ===== */}
      <div className="relative z-10 container mx-auto px-8 lg:px-20 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >

          {/* Small Tagline */}
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            Next-Gen Street Flavors
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Taste Beyond
            <span className="block bg-gradient-to-r from-purple-400 via-white to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              Imagination.
            </span>
          </h1>

          {/* Quote Style Line */}
          <p className="italic text-gray-400 mb-6">
            “Where cravings end, the flavor begins.”
          </p>

          {/* Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            From loaded signature burgers to crispy golden fries and
            handcrafted dips, Dip & Dash delivers bold flavors at high speed.
            Designed for food lovers who crave energy, taste, and unforgettable bites.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <motion.a
              href="https://www.dipanddash.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold
                         bg-purple-600 hover:bg-purple-500
                         text-white
                         shadow-[0_0_30px_rgba(168,85,247,0.6)]
                         transition"
            >
              Explore Menu →
            </motion.a>

            <motion.a
              href="https://www.dipanddash.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold
                         border border-purple-500 text-purple-400
                         hover:bg-purple-500 hover:text-white
                         transition"
            >
              Special Combos
            </motion.a>

          </div>
        </motion.div>
      </div>

      {/* Slide Indicators Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${i === index
                ? "w-8 bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]"
                : "w-2 bg-gray-500"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default DipDashCard;