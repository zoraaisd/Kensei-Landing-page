import { motion } from "framer-motion";
import gameVideo from "@/assets/video/Car-video1.webm";

const PlaystationCard = () => {

  return (
    <section
      id="gameofwar"
      className="relative scroll-mt-24 w-full overflow-hidden bg-black py-16 sm:py-20 md:py-12 lg:py-10 xl:min-h-[100svh] xl:py-0"
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
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <div className="px-6 py-3 pt-2 rounded-full
                bg-red-900/40 backdrop-blur-md
                border border-red-500/40
                shadow-[0_0_20px_rgba(239,68,68,0.35)]">
          <span className="text-red-300 text-xs sm:text-sm tracking-[0.2em] sm:tracking-widest font-semibold">
            Game Of War
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center pt-10 text-center sm:pt-12 lg:max-w-4xl lg:pt-14 xl:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-red-400 tracking-[0.2em] sm:tracking-widest text-[10px] sm:text-xs md:text-sm uppercase font-semibold">
                Next-Gen Gaming Arena
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 text-center text-3xl font-extrabold leading-[1.02] sm:text-4xl md:text-5xl lg:text-[4.1rem] xl:text-7xl"
            >
              <span className="text-white">Play Beyond</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-white to-red-600 bg-clip-text text-transparent">
                Imagination.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-center text-base italic text-red-300 md:text-lg"
            >
              "Step into worlds built for adrenaline."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-10 max-w-2xl text-center text-[0.95rem] leading-relaxed text-gray-300 sm:text-base md:text-lg"
            >
              From nostalgic console battles to cutting-edge PS5 adventures,
              our gaming zone delivers immersive 4K worlds, competitive
              multiplayer action and next-level performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://147-snooker.netlify.app/booking?type=SNOOKER&id=SNOOKER"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-semibold
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-semibold
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
