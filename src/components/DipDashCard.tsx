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
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
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

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-8 pt-10 pb-16 md:px-16">

        {/* Badge */}
        <div className="mb-5 flex items-center gap-3 rounded-full border border-[#f59e0b]/25 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#ff8c00] shadow-[0_0_16px_rgba(255,140,0,0.95)]" />
          <span className="text-[11px] uppercase tracking-[0.42em] text-white/70">Dip & Dash</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full max-w-4xl flex-col justify-center"
        >
          <h2
            className="text-6xl font-bold leading-tight md:text-7xl xl:text-8xl"
          >
            <span className="block text-white">Crafted to</span>
            <span className="block bg-gradient-to-r from-[#ff5a1f] via-[#ff8c00] to-[#facc15] bg-clip-text text-transparent">
              Perfection.
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-9 text-white/80 md:text-xl">
            A signature stack crafted like a hero shot, where each ingredient lands in precision, bathed in a warm glow, building layer by layer into a bold, appetite-first spectacle to captivate and crave.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="https://www.dipanddash.com/get-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-gradient-to-r from-[#ff5a1f] to-[#ff8c00] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(255,90,31,0.5)] transition-shadow hover:shadow-[0_0_45px_rgba(255,90,31,0.75)]"
            >
              Order Now
            </motion.a>
            <motion.a
              href="https://www.dipanddash.com/get-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-[#ff8c00]/50 px-8 py-4 font-semibold text-[#ff8c00] backdrop-blur-sm transition-colors hover:bg-[#ff8c00]/10"
            >
              View Menu
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
    </section>
  );
};

export default DipDashCard;
