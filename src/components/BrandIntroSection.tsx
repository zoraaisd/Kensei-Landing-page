import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kenseiLogo from "@/assets/Kensie-logo.webp";

const MotionLink = motion(Link);

const BrandIntroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black flex items-center overflow-hidden">

      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* ===== LEFT — LOGO (Clean & Bigger) ===== */}
          <div className="md:col-span-5 flex justify-center md:justify-start relative">

            <div className="absolute w-[420px] h-[420px] bg-yellow-500/10 blur-3xl rounded-full" />

            <motion.img
              src={kenseiLogo}
              alt="Kensei Logo"
              className="relative w-96 md:w-[600px] object-contain
           drop-shadow-[0_0_100px_rgba(255,215,0,0.6)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          {/* ===== RIGHT — MINIMAL CONTENT ===== */}
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

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Redefining <span className="text-yellow-400">Experiences</span>
              <br />
              Across Industries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10"
            >
              A unified ecosystem of elite entertainment,
              premium dining, immersive gaming, and global
              education — built on ambition, precision, and excellence.
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
