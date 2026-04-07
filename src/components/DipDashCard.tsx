import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import bgVideo from "@/assets/dipdash/background.mp4";


const DipDashCard = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dipdash"
      ref={sectionRef}
      className="relative scroll-mt-24 w-full overflow-hidden bg-[#050505] py-16 text-white sm:py-20 md:py-12 lg:py-10 xl:min-h-[100svh] xl:py-0"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={bgVideo}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/60 via-[#1a0f05]/40 to-[#050505]/60" />
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        animate={{
          background: [
            "radial-gradient(circle at 15% 25%, rgba(255,90,31,0.3) 0%, transparent 45%)",
            "radial-gradient(circle at 25% 55%, rgba(255,140,0,0.25) 0%, transparent 45%)",
            "radial-gradient(circle at 15% 25%, rgba(255,90,31,0.3) 0%, transparent 45%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute bottom-0 left-0 z-0 h-[22rem] w-[28rem] rounded-full blur-[90px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        style={{ background: "radial-gradient(circle, rgba(255,80,0,0.3) 0%, transparent 80%)" }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[8%] top-[10%] z-0 h-[14rem] w-[14rem] rounded-full blur-2xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        style={{ background: "radial-gradient(circle, rgba(255,190,0,0.35) 0%, transparent 100%)" }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Left Small Brand Label */}
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <div
          className="rounded-full border border-[#ff8c00]/40 bg-[#7c2d12]/40 px-6 py-2
                     shadow-[0_0_20px_rgba(255,140,0,0.3)] backdrop-blur-md"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#facc15] sm:text-sm sm:tracking-widest">
            Dip &amp; Dash
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center pt-10 text-center sm:pt-12 lg:max-w-4xl lg:pt-14 xl:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffb347] sm:text-xs sm:tracking-widest md:text-sm">
                Signature Flavour | Layered Indulgence | Bold Cravings
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 text-center text-3xl font-extrabold leading-[1.02] sm:text-4xl md:text-5xl lg:text-[4.1rem] xl:text-7xl"
            >
              <span className="text-white">Crafted to</span>
              <br />
              <span className="bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15] bg-clip-text text-transparent">
                Perfection.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-center text-base italic text-[#ffd089] md:text-lg"
            >
              "Every layer lands with flavour-first precision."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mb-10 max-w-2xl text-center text-[0.95rem] leading-relaxed text-white/80 sm:text-base md:text-lg"
            >
              A signature stack crafted like a hero shot, where each ingredient
              lands with precision and builds layer by layer into a bold,
              appetite-first spectacle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
            >
            <motion.a
              href="https://www.dipanddash.com/get-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#ff5a1f] to-[#ff8c00] px-8 py-4 text-center font-semibold text-white shadow-[0_0_30px_rgba(255,90,31,0.5)] transition-shadow hover:shadow-[0_0_45px_rgba(255,90,31,0.75)]"
            >
              Order Now
            </motion.a>
            <motion.a
              href="https://www.dipanddash.com/get-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto rounded-xl border border-[#ff8c00]/50 px-8 py-4 text-center font-semibold text-[#ff8c00] backdrop-blur-sm transition-colors hover:bg-[#ff8c00]/10"
            >
              View Menu
            </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
    </section>
  );
};

export default DipDashCard;
