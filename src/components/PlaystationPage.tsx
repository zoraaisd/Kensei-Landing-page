import { motion } from "framer-motion";
import { Gamepad2, MonitorPlay, Zap } from "lucide-react";
import gameLogo from "@/assets/Gow-logo.webp";

const PlaystationPage = () => {
  return (
    <section
      id="playstation"
      className="relative min-h-screen py-28
                 bg-gradient-to-b from-black via-zinc-950 to-black
                 overflow-hidden flex items-center"
    >
      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* ================= LEFT 40% ================= */}
          {/* ================= LEFT ================= */}
          <div className="md:col-span-5 flex flex-col justify-center items-center relative">

            {/* Glow */}
            <div className="absolute w-[480px] h-[480px] bg-red-600/20 blur-3xl rounded-full" />

            <motion.img
              src={gameLogo}
              alt="Game Of War"
              className="relative w-80 md:w-[420px] object-contain
               drop-shadow-[0_0_80px_rgba(255,0,0,0.6)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <p className="mt-8 text-red-400 tracking-widest uppercase text-xs">
              Next-Gen Console Arena
            </p>

          </div>

          {/* ================= RIGHT 60% ================= */}
          <div className="md:col-span-7 text-left">

            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Enter The <span className="text-red-500">Arena</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              Relive legendary classics and dominate next-gen multiplayer
              battles in a competitive arena built for performance.
            </p>

            {/* Reduced Feature Grid (Cleaned) */}
            <div className="grid sm:grid-cols-3 gap-10 mb-12">

              <div>
                <Gamepad2 className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS2 Classics
                </h4>
                <p className="text-gray-500 text-sm">
                  The golden era of gaming.
                </p>
              </div>

              <div>
                <MonitorPlay className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS4 Competitive
                </h4>
                <p className="text-gray-500 text-sm">
                  Stunning visuals & multiplayer.
                </p>
              </div>

              <div>
                <Zap className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS5 Power
                </h4>
                <p className="text-gray-500 text-sm">
                  Ultra-fast & immersive.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex gap-16 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-red-500">30+</h3>
                <p className="text-gray-400 text-sm">Top Games</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-500">24/7</h3>
                <p className="text-gray-400 text-sm">Gaming Access</p>
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
                         bg-gradient-to-r from-red-600 to-red-500
                         text-white
                         shadow-[0_0_30px_rgba(255,0,0,0.6)]
                         hover:shadow-[0_0_45px_rgba(255,0,0,0.9)]
                         transition-all duration-300"
            >
              Book Your Console
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PlaystationPage;