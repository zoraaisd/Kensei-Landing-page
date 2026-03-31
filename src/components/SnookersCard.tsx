import { motion } from "framer-motion";
import snookerVideo from "@/assets/video/snooker-hero-video.webm";

const SnookersPage = () => {
  return (
    <section
      id="snookers"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={snookerVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* PRIMARY DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      {/* SECONDARY EMERALD OVERLAY for Premium Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_70%)]" />

      {/* Top Left Small Brand Label */}
      <div className="absolute left-6 top-6 z-20">
        <div
          className="rounded-full border border-emerald-400/40 bg-emerald-900/40 px-6 py-2
                     shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md"
        >
          <span className="text-sm font-semibold tracking-widest text-emerald-300">
            147 Snookers
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 md:text-sm">
                Precision • Prestige • Performance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 text-center text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
            >
              <span className="text-white">Play with</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-500 bg-clip-text text-transparent">
                Elite Precision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-center text-base italic text-emerald-300 md:text-lg"
            >
              "Where strategy meets mastery."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Experience world-class snooker tables, professional lighting,
              and a championship atmosphere crafted for enthusiasts and
              competitive players alike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://147-snooker.netlify.app/booking?type=SNOOKER&id=SNOOKER"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.6)] transition hover:scale-105"
              >
                Reserve a Table
              </a>

              <a
                href="https://147-snooker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-emerald-400 px-8 py-4 font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
              >
                Explore Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnookersPage;
