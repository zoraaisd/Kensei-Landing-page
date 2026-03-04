import { motion } from "framer-motion";
import snookerLogo from "@/assets/New1 snookers-logo.webp";

const SnookerExperienceSection = () => {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden flex items-center">

      {/* Ambient Emerald Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 items-center gap-20">

          {/* ================= LEFT ================= */}
          <div className="md:col-span-5 flex flex-col justify-center items-center relative">

            <div className="absolute w-[700px] h-[700px] bg-emerald-500/20 blur-3xl rounded-full" />

            <motion.img
              src={snookerLogo}
              alt="Snooker Logo"
              className="relative w-[85%] sm:w-[250px] md:w-[300px] lg:w-[400px]
               object-contain
               drop-shadow-[0_0_80px_rgba(16,185,129,0.5)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <p className="mt-8 text-emerald-300 tracking-widest uppercase text-xs text-center">
              Elite Snooker Lounge
            </p>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="md:col-span-7 text-left">

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Crafted for <span className="text-emerald-400">Champions</span>
            </h2>

            {/* Description (shortened) */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
              A refined snooker arena built with tournament precision,
              focused lighting, and championship-grade tables —
              designed for players who demand mastery.
            </p>

            {/* Simplified Features */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Professional Tables
                </h4>
                <p className="text-sm text-gray-400">
                  Calibrated surfaces for consistent precision and control.
                </p>
              </div>

              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Championship Lighting
                </h4>
                <p className="text-sm text-gray-400">
                  Glare-free focused illumination built for elite gameplay.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex gap-20 mb-14">
              <div>
                <h3 className="text-3xl font-bold text-emerald-400">12+</h3>
                <p className="text-gray-500 text-sm">Premium Tables</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-emerald-400">500+</h3>
                <p className="text-gray-500 text-sm">Elite Players</p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://147-snooker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-emerald-600 to-green-500
                         text-white
                         shadow-[0_0_30px_rgba(16,185,129,0.6)]
                         hover:shadow-[0_0_45px_rgba(16,185,129,0.9)]
                         transition-all duration-300"
            >
              Book Your Experience
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SnookerExperienceSection;