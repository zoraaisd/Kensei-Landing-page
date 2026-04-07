import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import snookerLogo from "@/assets/New1 snookers-logo.webp";
import BlurText from "@/components/ui/BlurText";

const SnookerExperienceSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.08, 1]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.55, 0.35]);
  const logoY = useTransform(smoothProgress, [0, 1], [48, -28]);
  const contentY = useTransform(smoothProgress, [0, 1], [36, -20]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.55, 1, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="relative scroll-mt-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden py-14 sm:py-16 md:py-10 lg:py-12 xl:min-h-screen xl:flex xl:items-center xl:py-24"
    >

      {/* Ambient Emerald Glow */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_70%)]"
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        <div className="grid min-[700px]:grid-cols-2 xl:grid-cols-12 items-center gap-8 min-[700px]:gap-6 lg:gap-10 xl:gap-20">

          {/* ================= LEFT ================= */}
          <motion.div
            style={{ y: logoY }}
            className="min-[700px]:col-span-1 xl:col-span-5 flex flex-col justify-center items-center relative"
          >

            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[700px] lg:h-[700px] bg-emerald-500/20 blur-3xl rounded-full" />

            <motion.img
              src={snookerLogo}
              alt="Snooker Logo"
              className="relative w-52 sm:w-[240px] min-[700px]:w-[220px] md:w-[240px] lg:w-[360px] xl:w-[400px]
               object-contain
               drop-shadow-[0_0_80px_rgba(16,185,129,0.5)]"
              initial={{ opacity: 0, x: -40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              animate={{ y: [0, -30, 0], rotateZ: [-2, 2, -2] }}
              transition={{ 
                opacity: { duration: 0.9, ease: "easeOut" },
                x: { duration: 0.9, ease: "easeOut" },
                scale: { duration: 0.9, ease: "easeOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true, amount: 0.35 }}
            />

            <p className="mt-6 md:mt-5 lg:mt-8 text-emerald-300 tracking-widest uppercase text-xs text-center">
              Elite Snooker Lounge
            </p>

          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            style={{ y: contentY }}
            className="min-[700px]:col-span-1 xl:col-span-7 mx-auto max-w-3xl pt-2 sm:pt-4 min-[700px]:pt-0 lg:pt-10 xl:pt-0 text-center min-[700px]:max-w-none min-[700px]:text-left xl:mx-0 xl:max-w-none"
          >

            {/* Heading */}
            <BlurText
              text="Crafted for Champions"
              delay={100}
              className="text-3xl text-center sm:text-4xl min-[700px]:justify-start min-[700px]:text-left min-[700px]:text-[2.2rem] md:text-[2.45rem] lg:text-5xl font-bold mb-5 min-[700px]:mb-5 lg:mb-8 leading-[1.03] bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"
              animateBy="words"
              direction="bottom"
            />

            {/* Description (shortened) */}
            <p className="mx-auto min-[700px]:mx-0 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl min-[700px]:max-w-none lg:max-w-xl mb-8 lg:mb-12">
              A refined snooker arena built with tournament precision,
              focused lighting and championship-grade tables designed for
              players who demand mastery.
            </p>

            {/* Simplified Features */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Professional Tables
                </h4>
                <p className="text-sm text-white/90">
                  Calibrated surfaces for consistent precision and control.
                </p>
              </div>

              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Championship Lighting
                </h4>
                <p className="text-sm text-white/90">
                  Glare-free focused illumination built for elite gameplay.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex flex-wrap justify-center min-[700px]:justify-start gap-4 sm:gap-5 lg:gap-6 mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-emerald-400">12+</h3>
                <p className="text-white/90 text-sm">Premium Tables</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-emerald-400">500+</h3>
                <p className="text-white/90 text-sm">Elite Players</p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://147-snooker.netlify.app/booking?type=SNOOKER&id=SNOOKER"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 rounded-xl font-semibold text-center
                         bg-gradient-to-r from-emerald-600 to-green-500
                         text-white
                         shadow-[0_0_30px_rgba(16,185,129,0.6)]
                         hover:shadow-[0_0_45px_rgba(16,185,129,0.9)]
                         transition-all duration-300"
            >
              Book Your Experience
            </motion.a>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SnookerExperienceSection;
