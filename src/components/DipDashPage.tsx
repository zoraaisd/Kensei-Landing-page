import { motion } from "framer-motion";
import dipdashLogo from "@/assets/dipdash-og-logo.webp";
import BlurText from "@/components/ui/BlurText";

const DipDashPage = () => {
  return (
    <section
      id="dipdash-page"
      className="relative scroll-mt-24 py-14 sm:py-16 md:py-10 lg:py-12
                 bg-gradient-to-b from-[#1a0d05] via-[#090909] to-black
                 text-white overflow-hidden xl:min-h-screen xl:flex xl:items-center xl:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1f1207] via-[#1a0d05]/55 to-transparent" />
      {/* Ambient Orange/Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(234,88,12,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(245,158,11,0.08),transparent_32%)]" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-12 items-center gap-8 md:gap-6 lg:gap-10 xl:gap-20">

          {/* ================= LEFT (Logo 40%) ================= */}
          <div className="md:col-span-1 xl:col-span-5 flex flex-col justify-center items-center relative">

            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[480px] bg-orange-500/20 blur-3xl rounded-full" />

            <motion.img
              src={dipdashLogo}
              alt="Dip & Dash Logo"
              className="relative w-52 sm:w-64 md:w-[240px] lg:w-[320px] xl:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(234,88,12,0.7)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -30, 0], rotateZ: [-2, 2, -2] }}
              transition={{ 
                opacity: { duration: 1 },
                x: { duration: 1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
            />

            <p className="mt-6 md:mt-5 lg:mt-8 text-yellow-400 tracking-widest uppercase text-xs text-center">
              Street Food Reimagined
            </p>
          </div>

          {/* ================= RIGHT (Content 60%) ================= */}
          <div className="md:col-span-1 xl:col-span-7 mx-auto max-w-3xl pt-2 sm:pt-4 md:pt-0 lg:pt-8 xl:pt-0 text-center md:max-w-none md:text-left xl:mx-0 xl:max-w-none">

            {/* Heading */}
            <BlurText
              text="Bold Flavors. Zero Compromise."
              delay={100}
              className="justify-center text-3xl text-center sm:text-4xl min-[700px]:justify-start min-[700px]:text-left md:text-[2.35rem] lg:text-[3.25rem] xl:text-5xl font-bold mb-5 md:mb-6 lg:mb-8 leading-[1.03] bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
              animateBy="words"
              direction="bottom"
            />

            {/* Description (Shortened) */}
            <p className="mx-auto md:mx-0 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl md:max-w-none lg:max-w-xl mb-8 lg:mb-12">
              Dip & Dash delivers high-energy street food with signature
              burgers, loaded fries and unforgettable sauces crafted for
              flavor lovers who crave impact.
            </p>

            {/* Reduced Highlights (2 only) */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Signature Loaded Burgers
                </h4>
                <p className="text-sm text-white/90">
                  Double stacks, molten cheese, and bold sauces: every bite
                  hits different.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Fully Loaded Fries
                </h4>
                <p className="text-sm text-white/90">
                  Crispy golden fries layered with rich toppings
                  and house-made blends.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 lg:gap-6 mb-14">
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-yellow-400">50+</h3>
                <p className="text-orange-400 text-sm">Menu Variations</p>
              </div>

              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-yellow-400">Fast</h3>
                <p className="text-orange-400 text-sm">Service Speed</p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.dipanddash.com/get-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 rounded-xl font-semibold text-center
                         bg-gradient-to-r from-orange-600 to-orange-500
                         text-white
                         shadow-[0_0_35px_rgba(234,88,12,0.8)]
                         hover:shadow-[0_0_50px_rgba(234,88,12,1)]
                         transition-all duration-300"
            >
              Order Now
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DipDashPage;
