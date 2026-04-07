import { motion } from "framer-motion";
import optmanLogo from "@/assets/Logo1.webp";
import BlurText from "@/components/ui/BlurText";

const OptimusManpowerPage = () => {
  return (
    <section
      id="optimus-manpower-page"
      className="relative scroll-mt-24 py-14 sm:py-16 md:py-10 lg:py-12
                 bg-gradient-to-b from-black via-zinc-950 to-black
                 text-white overflow-hidden xl:min-h-screen xl:flex xl:items-center xl:py-24"
    >
      {/* Ambient Silver Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(209,213,219,0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-12 items-center gap-8 md:gap-6 lg:gap-10 xl:gap-20">

          {/* ================= LEFT (Logo 40%) ================= */}
          <div className="md:col-span-1 xl:col-span-5 flex flex-col justify-center items-center relative">

            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[480px] bg-gray-500/15 blur-3xl rounded-full" />

            <motion.img
              src={optmanLogo}
              alt="Optimus Manpower Logo"
              className="relative w-52 sm:w-64 md:w-[240px] lg:w-[320px] xl:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(209,213,219,0.5)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -28, 0], rotateZ: [-2, 2, -2] }}
              transition={{ 
                opacity: { duration: 1 },
                x: { duration: 1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
            />

            <p className="mt-6 md:mt-5 lg:mt-8 text-white/90 tracking-widest uppercase text-xs text-center">
              Global HR Solutions
            </p>
          </div>

          {/* ================= RIGHT (Content 60%) ================= */}
          <div className="md:col-span-1 xl:col-span-7 mx-auto max-w-3xl pt-2 sm:pt-4 md:pt-0 lg:pt-8 xl:pt-0 text-center md:max-w-none md:text-left xl:mx-0 xl:max-w-none">

            {/* Heading */}
            <BlurText
              text="Expert Talent. Proven Results."
              delay={100}
              className="justify-center text-3xl text-center sm:text-4xl min-[700px]:justify-start min-[700px]:text-left md:text-[2.35rem] lg:text-[3.25rem] xl:text-5xl font-bold mb-5 md:mb-6 lg:mb-8 leading-[1.03] bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent"
              animateBy="words"
              direction="bottom"
            />

            {/* Description (Shortened) */}
            <p className="mx-auto md:mx-0 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl md:max-w-none lg:max-w-xl mb-8 lg:mb-12">
              Optimus Manpower delivers strategic workforce solutions with
              precision staffing, talent acquisition and HR consulting
              designed for organizations that demand excellence.
            </p>

            {/* Reduced Highlights (2 only) */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-white/90 font-semibold mb-2">
                  Talent Acquisition & Recruitment
                </h4>
                <p className="text-sm text-white/90">
                  Strategic sourcing and placement of top-tier professionals
                  across industries and geographies.
                </p>
              </div>

              <div>
                <h4 className="text-white/90 font-semibold mb-2">
                  HR Consulting & Solutions
                </h4>
                <p className="text-sm text-white/90">
                  Comprehensive workforce planning, compliance and organizational
                  development strategies.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 lg:gap-6 mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white/90">500+</h3>
                <p className="text-white/90 text-sm">Placements Yearly</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white/90">50+</h3>
                <p className="text-white/90 text-sm">Industry Partners</p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.optimusglobalhr.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 rounded-lg font-semibold text-center
                         bg-white text-black
                         hover:bg-gray-200
                         shadow-[0_0_35px_rgba(209,213,219,0.6)]
                         hover:shadow-[0_0_50px_rgba(209,213,219,0.8)]
                         transition-all duration-300"
            >
              Explore Solutions
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OptimusManpowerPage;
