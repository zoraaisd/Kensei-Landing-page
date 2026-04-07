import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Background Images
import snooker from "@/assets/snookers6.webp";
import game from "@/assets/ps4.webp";
import dip from "@/assets/dip5.webp";
import optimus from "@/assets/optimus3.webp";
import optimusMan from "@/assets/opt-man3.webp";

// Right Side Elements (Cards)
import snookersIcon from "@/assets/snookers/snookerss1.1.webp";
import gowIcon from "@/assets/gow/gow-card.webp";
import dipdashIcon from "@/assets/dipdash/dipdash-card.webp";
import optimusIcon from "@/assets/opt-over/opt-ove-card.webp";
import manpowerIcon from "@/assets/opt-man/opt-man-card.webp";
import Stack from "./Stack";

type HeroSlide = {
  image: string;
  rightElement: string;
  title: string;
  subtitle: string;
  description: string;
  headingGradient: string;
  paragraphColor: string;
  buttonGradient: string;
  accentColor: string;
  target: string;
  cardBorderColor?: string;
  cardGlowColor?: string;
};

const slides: HeroSlide[] = [
  {
    image: snooker,
    rightElement: snookersIcon,
    title: "Precision. Power. Prestige.",
    subtitle: "Snookers Lounge",
    description:
      "Step into a championship arena crafted for focus, finesse and elite competition.",
    headingGradient:
      "from-emerald-300 via-emerald-400 to-teal-400",
    paragraphColor: "text-emerald-100/90",
    buttonGradient:
      "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-emerald-500/40",
    accentColor: "rgba(16, 185, 129, 0.3)",
    target: "#snookers",
  },
  {
    image: game,
    rightElement: gowIcon,
    title: "Enter The Arena.",
    subtitle: "GameOfWar",
    description:
      "Experience next-generation PlayStation battles in an immersive competitive environment.",
    headingGradient:
      "from-rose-400 via-red-400 to-pink-500",
    paragraphColor: "text-rose-100/90",
    buttonGradient:
      "bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-500 hover:to-pink-400 shadow-red-500/40",
    accentColor: "rgba(220, 38, 38, 0.3)",
    target: "#gameofwar",
  },
  {
    image: dip,
    rightElement: dipdashIcon,
    title: "Bold Flavors. Elevated Taste.",
    subtitle: "Dip & Dash",
    description:
      "Signature burgers, loaded fries and high-energy dining designed to excite every bite.",
    headingGradient:
      "from-orange-400 via-red-500 to-yellow-400",
    paragraphColor: "text-orange-100/90",
    buttonGradient:
      "bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 shadow-orange-500/40",
    accentColor: "rgba(255, 102, 0, 0.3)",
    target: "#dipdash",
  },
  {
    image: optimus,
    rightElement: optimusIcon,
    title: "Beyond Borders.",
    subtitle: "Optimus Overseas",
    description:
      "Empowering global careers through world-class postgraduate programs and expert guidance.",
    headingGradient:
      "from-blue-400 via-indigo-400 to-sky-400",
    paragraphColor: "text-blue-100/90",
    buttonGradient:
      "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 shadow-blue-500/40",
    accentColor: "rgba(59, 130, 246, 0.3)",
    target: "#optimus",
  },
  {
    image: optimusMan,
    rightElement: manpowerIcon,
    title: "Empower Your Workforce.",
    subtitle: "Optimus Manpower",
    description:
      "Connecting businesses with skilled professionals to drive sustainable growth and excellence.",
    headingGradient:
      "from-slate-300 via-gray-400 to-slate-300",
    paragraphColor: "text-slate-200/90",
    buttonGradient:
      "bg-gradient-to-r from-slate-600 to-gray-500 hover:from-slate-500 hover:to-gray-400 shadow-slate-500/40",
    accentColor: "rgba(148, 163, 184, 0.3)",
    cardBorderColor: "rgba(226, 232, 240, 0.96)",
    cardGlowColor: "rgba(226, 232, 240, 0.55)",
    target: "#manpower",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const stackCards = useMemo(
    () =>
      slides.map((slide, i) => {
        const borderColor = slide.cardBorderColor ?? slide.accentColor.replace("0.3", "0.98");
        const glowColor = slide.cardGlowColor ?? slide.accentColor.replace("0.3", "0.58");
        const secondaryGlow = slide.cardGlowColor ?? slide.accentColor.replace("0.3", "0.34");
        const edgeTint = slide.cardGlowColor ?? slide.accentColor.replace("0.3", "0.52");

        return (
        <div
          key={i}
          className="relative w-full h-full overflow-hidden pointer-events-none select-none"
          style={{
            borderRadius: "1rem",
            border: `2.5px solid ${borderColor}`,
            boxShadow: `
              0 0 0 1px ${edgeTint} inset,
              0 0 20px ${glowColor},
              0 0 42px ${glowColor},
              0 0 78px ${secondaryGlow},
              0 18px 40px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${slide.accentColor.replace("0.3", "0.42")} 0%, transparent 32%, transparent 68%, ${slide.accentColor.replace("0.3", "0.3")} 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              boxShadow: `inset 0 0 28px ${secondaryGlow}`,
            }}
          />
          <img
            src={slide.rightElement}
            alt={slide.subtitle}
            draggable={false}
            className="relative w-full h-full object-cover"
          />
        </div>
        );
      }),
    [],
  );

  const handleScrollTo = (target: string) => {
    const section = document.querySelector(target);
    if (section) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar instanceof HTMLElement ? navbar.offsetHeight : 72;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25,
    });
  };

  // Auto-play is driven entirely by the Stack component to ensure visual sync

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shimmer-text {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={slides[index].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover will-change-opacity"
          />
        </AnimatePresence>

        {/* Dark Overlay - Base */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Dark Overlay - Fades in on Right Side */}
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-12 py-16 sm:py-24 lg:py-20 xl:py-16">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center">

            {/* LEFT SIDE - ANIMATED CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -30, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 space-y-4 sm:space-y-6 text-center xl:order-1 xl:text-left max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-none mx-auto xl:mx-0"
              >
                {/* Subtitle - Capsule Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block mx-auto xl:mx-0 px-3 sm:px-5 py-2 rounded-full backdrop-blur-sm border"
                  style={{
                    borderColor: slides[index].accentColor.replace("0.3", "1"),
                    backgroundColor: slides[index].accentColor.replace("0.3", "0.2"),
                  }}
                >
                  <p className="uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[9px] sm:text-xs md:text-sm font-semibold" 
                    style={{
                      color: slides[index].paragraphColor.includes("emerald") ? "#34d399" : slides[index].paragraphColor.includes("rose") ? "#fb7185" : slides[index].paragraphColor.includes("orange") ? "#fed7aa" : slides[index].paragraphColor.includes("blue") ? "#60a5fa" : "#cbd5e1",
                    }}
                  >
                    {slides[index].subtitle}
                  </p>
                </motion.div>

                {/* Main Heading - Shimmer Text Effect */}
                <style>{`
                  @keyframes shimmer {
                    0% {
                      background-position: -2000px 0;
                    }
                    100% {
                      background-position: 2000px 0;
                    }
                  }
                  .shimmer-text {
                    background: linear-gradient(
                      90deg,
                      currentColor 0%,
                      rgba(255, 255, 255, 0.8) 50%,
                      currentColor 100%
                    );
                    background-size: 2000px 100%;
                    animation: shimmer 3s infinite;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                  }
                `}</style>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-[2.05rem] leading-[1.02] sm:text-5xl md:text-6xl xl:text-7xl font-bold drop-shadow-2xl"
                  style={{
                    fontFamily: "Rockwell, serif",
                    perspective: "1000px",
                  }}
                >
                  <span
                    className="shimmer-text"
                    style={{
                      color: slides[index].headingGradient.includes("emerald") ? "#34d399" : slides[index].headingGradient.includes("rose") ? "#ef4444" : slides[index].headingGradient.includes("orange") ? "#ff9966" : slides[index].headingGradient.includes("blue") ? "#60a5fa" : "#cbd5e1",
                      textShadow: `0 0 30px ${slides[index].headingGradient.includes("emerald") ? "rgba(52, 211, 153, 0.8)" : slides[index].headingGradient.includes("rose") ? "rgba(239, 68, 68, 0.8)" : slides[index].headingGradient.includes("orange") ? "rgba(255, 153, 51, 0.8)" : slides[index].headingGradient.includes("blue") ? "rgba(96, 165, 250, 0.8)" : "rgba(203, 213, 225, 0.8)"}, 0 0 60px ${slides[index].headingGradient.includes("emerald") ? "rgba(52, 211, 153, 0.5)" : slides[index].headingGradient.includes("rose") ? "rgba(239, 68, 68, 0.5)" : slides[index].headingGradient.includes("orange") ? "rgba(255, 153, 51, 0.5)" : slides[index].headingGradient.includes("blue") ? "rgba(96, 165, 250, 0.5)" : "rgba(203, 213, 225, 0.5)"}, 0 0 90px ${slides[index].headingGradient.includes("emerald") ? "rgba(52, 211, 153, 0.3)" : slides[index].headingGradient.includes("rose") ? "rgba(239, 68, 68, 0.3)" : slides[index].headingGradient.includes("orange") ? "rgba(255, 153, 51, 0.3)" : slides[index].headingGradient.includes("blue") ? "rgba(96, 165, 250, 0.3)" : "rgba(203, 213, 225, 0.3)"}`,
                      background: `linear-gradient(
                        90deg,
                        ${slides[index].headingGradient.includes("emerald") ? "#34d399" : slides[index].headingGradient.includes("rose") ? "#ef4444" : slides[index].headingGradient.includes("orange") ? "#ff9966" : slides[index].headingGradient.includes("blue") ? "#60a5fa" : "#cbd5e1"} 0%,
                        rgba(255, 255, 255, 1) 25%,
                        rgba(255, 255, 255, 1) 50%,
                        rgba(255, 255, 255, 1) 75%,
                        ${slides[index].headingGradient.includes("emerald") ? "#34d399" : slides[index].headingGradient.includes("rose") ? "#ef4444" : slides[index].headingGradient.includes("orange") ? "#ff9966" : slides[index].headingGradient.includes("blue") ? "#60a5fa" : "#cbd5e1"} 100%
                      )`,
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slides[index].title}
                  </span>
                </motion.h1>

                {/* Description with Parallax */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`text-[0.95rem] sm:text-lg md:text-xl leading-relaxed max-w-md sm:max-w-xl lg:max-w-2xl mx-auto xl:mx-0 ${slides[index].paragraphColor}`}
                  style={{
                    transform: `translateY(${mousePosition.y * 0.5}px)`,
                  }}
                >
                  {slides[index].description}
                </motion.p>

                {/* Explore Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="pt-1"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleScrollTo(slides[index].target)}
                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base text-white
                      transition-all duration-300 shadow-lg
                      ${slides[index].buttonGradient}`}
                    style={{ fontFamily: "Rockwell, serif" }}
                  >
                    Explore Now
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT SIDE - STACKED CARDS */}
            <div className="order-1 flex justify-center items-center min-h-[15rem] h-[17rem] sm:h-[24rem] md:h-[27rem] lg:h-[30rem] xl:order-2 xl:h-[32rem] relative w-full perspective-[1000px]">
              <motion.div
                key={`card-glow-${index}`}
                className="absolute inset-x-[10%] inset-y-[14%] sm:inset-x-[8%] sm:inset-y-[12%] rounded-[2rem] blur-3xl"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  background: `radial-gradient(circle, ${slides[index].cardGlowColor ?? slides[index].accentColor.replace("0.3", "0.5")} 0%, transparent 72%)`,
                }}
              />
              <div className="w-[11.5rem] h-[15.5rem] min-[390px]:w-[12.5rem] min-[390px]:h-[17rem] sm:w-[16rem] sm:h-[22rem] md:w-[18rem] md:h-[24rem] lg:w-[21rem] lg:h-[27rem] xl:w-[23rem] xl:h-[29rem] z-20">
                <Stack 
                  cards={stackCards}
                  randomRotation={false}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  sendToBackOnClick={true}
                  sensitivity={100}
                  onTopCardChange={(id) => setIndex(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-7 sm:w-8 bg-white"
                : "w-2 bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
