import { motion } from "framer-motion";
import { Gamepad2, MonitorPlay, Zap } from "lucide-react";
import gameLogo from "@/assets/Gow-logo.webp";
import BlurText from "@/components/ui/BlurText";
import { useRef, useState } from "react";

const PlaystationPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section
      id="playstation"
      className="relative scroll-mt-24 py-14 sm:py-16 md:py-10 lg:py-12
                 bg-gradient-to-b from-black via-zinc-950 to-black
                 overflow-hidden xl:min-h-screen xl:flex xl:items-center xl:py-24"
    >
      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-12 gap-8 md:gap-6 lg:gap-10 xl:gap-16 items-center">

          {/* ================= LEFT 40% ================= */}
          {/* ================= LEFT ================= */}
          <div className="md:col-span-1 xl:col-span-5 flex flex-col justify-center items-center relative">

            {/* Glow */}
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[480px] bg-red-600/20 blur-3xl rounded-full" />

            {/* Logo & Video Container - Circular */}
            <motion.div
              className="relative w-52 sm:w-64 md:w-[240px] lg:w-[320px] xl:w-[420px] cursor-pointer aspect-square"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                opacity: { duration: 1 },
                x: { duration: 1 },
              }}
              viewport={{ once: true }}
              onMouseEnter={() => {
                setIsHovering(true);
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  void videoRef.current.play();
                }
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
            >
              {/* Clean Circular Container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/95 bg-white">
                {/* Video - Behind */}
                <video
                  ref={videoRef}
                  src={new URL("../assets/gow/PS.webm", import.meta.url).href}
                  className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-500 ${
                    isHovering ? "opacity-100" : "opacity-0"
                  }`}
                  muted
                  loop
                  playsInline
                />

                {/* Logo - On Top, Fades on Hover */}
                <motion.img
                  src={gameLogo}
                  alt="Game Of War"
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                    isHovering ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </motion.div>

            <p className="mt-6 md:mt-5 lg:mt-8 text-red-400 tracking-widest uppercase text-xs text-center">
              Next-Gen Console Arena
            </p>

          </div>

          {/* ================= RIGHT 60% ================= */}
          <div className="md:col-span-1 xl:col-span-7 mx-auto max-w-3xl pt-2 sm:pt-4 md:pt-0 lg:pt-8 xl:pt-0 text-center md:max-w-none md:text-left xl:mx-0 xl:max-w-none">

            <BlurText
              text="Enter The Arena"
              delay={100}
              className="justify-center text-center text-3xl sm:text-5xl min-[700px]:justify-start min-[700px]:text-left md:text-[2.4rem] lg:text-[3.3rem] xl:text-6xl font-bold mb-5 lg:mb-6 leading-tight bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
              animateBy="words"
              direction="bottom"
            />

            <p className="mx-auto md:mx-0 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 lg:mb-10">
              Relive legendary classics and dominate next-gen multiplayer
              battles in a competitive arena built for performance.
            </p>

            {/* Reduced Feature Grid (Cleaned) */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 mb-12 text-left">

              <div>
                <Gamepad2 className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS2 Classics
                </h4>
                <p className="text-white/90 text-sm">
                  The golden era of gaming.
                </p>
              </div>

              <div>
                <MonitorPlay className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS4 Competitive
                </h4>
                <p className="text-white/90 text-sm">
                  Stunning visuals & multiplayer.
                </p>
              </div>

              <div>
                <Zap className="text-red-500 mb-3" size={26} />
                <h4 className="text-white font-semibold mb-1">
                  PS5 Power
                </h4>
                <p className="text-white/90 text-sm">
                  Ultra-fast & immersive.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-4 sm:gap-6 mb-12">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-red-500">30+</h3>
                <p className="text-white/90 text-sm">Top Games</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-red-500">24/7</h3>
                <p className="text-white/90 text-sm">Gaming Access</p>
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
