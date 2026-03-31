import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import kenseiLogo from "@/assets/Kensie-logo.webp";
import BlurText from "@/components/ui/BlurText";

const MotionLink = motion(Link);

const BrandIntroSection = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setIsSpinning(true);
    // Reset after animation completes
    setTimeout(() => setIsSpinning(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">

      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.25) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 blur-3xl opacity-60"
      />

      {/* Animated Moving Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-yellow-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-blue-500/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* ===== LEFT - 3D FLOATING LOGO ===== */}
          <div className="md:col-span-5 flex justify-center md:justify-start relative h-[400px]">

            {/* Glow Background */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 80px rgba(255, 215, 0, 0.4), 0 0 120px rgba(59, 130, 246, 0.2)",
                  "0 0 120px rgba(255, 215, 0, 0.6), 0 0 160px rgba(59, 130, 246, 0.3)",
                  "0 0 80px rgba(255, 215, 0, 0.4), 0 0 120px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[400px] h-[400px] bg-gradient-to-r from-yellow-500/10 to-blue-500/10 blur-3xl rounded-full"
            />

            

            {/* 3D Floating Logo with Click-Based Horizontal Spin */}
            <motion.img
              src={kenseiLogo}
              alt="Kensei Logo"
              onClick={handleLogoClick}
              animate={{
                y: [0, -30, 0],
                rotateY: isSpinning ? [0, 360] : 0,
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="relative w-80 md:w-[430px] object-contain
                drop-shadow-[0_0_100px_rgba(255,215,0,0.6)]
                drop-shadow-[0_0_150px_rgba(59,130,246,0.4)]
                cursor-pointer transition-transform hover:scale-110"
              style={{
                perspective: "1200px",
                filter: "drop-shadow(0 0 50px rgba(255, 215, 0, 0.5))",
              }}
              whileHover={{
                scale: 1.08,
              }}
            />

          </div>

          {/* ===== RIGHT - MINIMAL CONTENT ===== */}
          <div className="md:col-span-7 text-left">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-6"
            >
              The Kensei Standard
            </motion.p>

            <BlurText
              text="Redefining Experiences Across Industries"
              delay={100}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-blue-300 via-yellow-400 to-blue-400 bg-clip-text text-transparent"
              animateBy="words"
              direction="bottom"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10"
            >
              A unified ecosystem of elite entertainment,
              premium dining, immersive gaming, and global
              education- built on ambition, precision, and excellence.
            </motion.p>

            <div className="flex gap-6">
              <MotionLink
                to="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold
                           bg-gradient-to-r from-yellow-500 to-yellow-400
                           text-black
                           shadow-[0_0_25px_rgba(255,215,0,0.4)]
                           hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]
                           transition-all duration-300"
              >
                Discover More
              </MotionLink>

              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold
                           border border-yellow-400
                           text-yellow-400
                           hover:bg-yellow-400 hover:text-black
                           transition-all duration-300"
              >
                Connect
              </MotionLink>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
