import { motion } from "framer-motion";
import optmanLogo from "@/assets/opt-glob-trans.png";

const OptimusManpowerPage = () => {
  return (
    <section
      id="optimus-manpower-page"
      className="relative min-h-screen py-24
                 bg-gradient-to-b from-black via-zinc-950 to-black
                 text-white overflow-hidden flex items-center"
    >
      {/* Ambient Silver Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(209,213,219,0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 items-center gap-20">

          {/* ================= LEFT (Logo 40%) ================= */}
          <div className="md:col-span-5 flex flex-col justify-center items-center relative">

            <div className="absolute w-[480px] h-[480px] bg-gray-500/15 blur-3xl rounded-full" />

            <motion.img
              src={optmanLogo}
              alt="Optimus Manpower Logo"
              className="relative w-80 md:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(209,213,219,0.5)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <p className="mt-8 text-gray-300 tracking-widest uppercase text-xs">
              Global HR Solutions
            </p>
          </div>

          {/* ================= RIGHT (Content 60%) ================= */}
          <div className="md:col-span-7 text-left">

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight
                         bg-gradient-to-r from-gray-300 via-white to-gray-400
                         bg-clip-text text-transparent"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Expert Talent. <br />
              <span className="text-gray-300">Proven Results.</span>
            </h2>

            {/* Description (Shortened) */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
              Optimus Manpower delivers strategic workforce solutions with
              precision staffing, talent acquisition, and HR consulting-
              designed for organizations that demand excellence.
            </p>

            {/* Reduced Highlights (2 only) */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-gray-200 font-semibold mb-2">
                  Talent Acquisition & Recruitment
                </h4>
                <p className="text-sm text-gray-400">
                  Strategic sourcing and placement of top-tier professionals
                  across industries and geographies.
                </p>
              </div>

              <div>
                <h4 className="text-gray-200 font-semibold mb-2">
                  HR Consulting & Solutions
                </h4>
                <p className="text-sm text-gray-400">
                  Comprehensive workforce planning, compliance, and organizational
                  development strategies.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex gap-20 mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-gray-300">500+</h3>
                <p className="text-gray-500 text-sm">Placements Yearly</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-gray-300">50+</h3>
                <p className="text-gray-500 text-sm">Industry Partners</p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.optimusglobalhr.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 rounded-lg font-semibold
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
