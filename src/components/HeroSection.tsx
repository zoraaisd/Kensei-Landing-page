import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import snooker from "@/assets/snookers6.webp";
import game from "@/assets/ps4.webp";
import dip from "@/assets/dip5.webp";
import optimus from "@/assets/optimus3.webp";

const slides = [
  {
    image: snooker,
    title: "Precision. Power. Prestige.",
    subtitle: "Snookers Lounge",
    description:
      "Step into a championship arena crafted for focus, finesse, and elite competition.",
    headingGradient:
      "bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400",
    paragraphColor: "text-emerald-100/90",
    buttonGradient:
      "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-emerald-500/40",
    target: "#snookers",
  },
  {
    image: game,
    title: "Enter The Arena.",
    subtitle: "GameOfWar",
    description:
      "Experience next-generation PlayStation battles in an immersive competitive environment.",
    headingGradient:
      "bg-gradient-to-r from-rose-400 via-red-400 to-pink-500",
    paragraphColor: "text-rose-100/90",
    buttonGradient:
      "bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-500 hover:to-pink-400 shadow-red-500/40",
    target: "#gameofwar",
  },
  {
    image: dip,
    title: "Bold Flavors. Elevated Taste.",
    subtitle: "Dip & Dash",
    description:
      "Signature burgers, loaded fries, and high-energy dining designed to excite every bite.",
    headingGradient:
      "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400",
    paragraphColor: "text-purple-100/90",
    buttonGradient:
      "bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 shadow-purple-500/40",
    target: "#dipdash",
  },
  {
    image: optimus,
    title: "Beyond Borders.",
    subtitle: "Optimus Overseas",
    description:
      "Empowering global careers through world-class postgraduate programs and guidance.",
    headingGradient:
      "bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400",
    paragraphColor: "text-blue-100/90",
    buttonGradient:
      "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 shadow-blue-500/40",
    target: "#optimus",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const handleScrollTo = (target: string) => {
  const section = document.querySelector(target);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >

            {/* Subtitle */}
            <p className="uppercase tracking-[0.4em] text-sm mb-6 text-gray-300">
              {slides[index].subtitle}
            </p>

            {/* Heading (Serif Font) */}
            <h1
  className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight 
              ${slides[index].headingGradient}
              bg-clip-text text-transparent`}
  style={{ fontFamily: "Playfair Display, serif" }}
>
  {slides[index].title}
</h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 ${slides[index].paragraphColor}`}>
              {slides[index].description}
            </p>

            {/* Explore Button */}
            <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => handleScrollTo(slides[index].target)}
  className={`px-8 py-3 rounded-xl font-semibold text-white
              transition-all duration-300 shadow-lg
              ${slides[index].buttonGradient}`}
>
  Explore
</motion.button>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HeroSection;