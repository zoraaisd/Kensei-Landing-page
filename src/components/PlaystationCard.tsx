import { motion } from "framer-motion";
import gameVideo from "@/assets/video/Car-video1.webm";

const PlaystationCard = () => {

  return (
    <section
      id="gameofwar"
      className="relative h-screen w-full overflow-hidden bg-black"
    >

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={gameVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* PRIMARY DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      {/* SECONDARY RED OVERLAY for Premium Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.12),transparent_70%)]" />

      {/* Top Left Small Brand Label */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-6 py-3 pt-2 rounded-full
                bg-red-900/40 backdrop-blur-md
                border border-red-500/40
                shadow-[0_0_20px_rgba(239,68,68,0.35)]">
          <span className="text-red-300 text-sm tracking-widest font-semibold">
            Game Of War
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full max-w-2xl">
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-red-400 tracking-widest text-xs md:text-sm uppercase font-semibold">
                Next-Gen Gaming Arena
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-left"
            >
              <span className="text-white">Play Beyond</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-white to-red-600 bg-clip-text text-transparent">
                Imagination.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed text-left"
            >
              From nostalgic console battles to cutting-edge PS5 adventures,
              our gaming zone delivers immersive 4K worlds, competitive
              multiplayer action and next-level performance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://147-snooker.netlify.app/booking?type=SNOOKER&id=SNOOKER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-red-600 to-red-500
                         text-white
                         shadow-[0_0_25px_rgba(220,38,38,0.6)]
                         hover:scale-105 transition"
            >
              Reserve a PS5 Pod
            </a>

            <a
              href="https://147-snooker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold
                         border border-red-400
                         text-red-300
                         hover:bg-red-500/10
                         transition"
            >
              Explore Consoles
            </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaystationCard;
