import { motion } from "framer-motion";
import dipdashLogo from "@/assets/dipdash-og-logo.png";

const DipDashPage = () => {
  return (
    <section
      id="dipdash-page"
      className="relative min-h-screen py-24
                 bg-gradient-to-b from-black via-zinc-950 to-black
                 text-white overflow-hidden flex items-center"
    >
      {/* Ambient Orange/Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(234,88,12,0.15),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 items-center gap-20">

          {/* ================= LEFT (Logo 40%) ================= */}
          <div className="md:col-span-5 flex flex-col justify-center items-center relative">

            <div className="absolute w-[480px] h-[480px] bg-orange-500/20 blur-3xl rounded-full" />

            <motion.img
              src={dipdashLogo}
              alt="Dip & Dash Logo"
              className="relative w-80 md:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(234,88,12,0.7)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <p className="mt-8 text-yellow-400 tracking-widest uppercase text-xs">
              Street Food Reimagined
            </p>
          </div>

          {/* ================= RIGHT (Content 60%) ================= */}
          <div className="md:col-span-7 text-left">

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight
                         bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500
                         bg-clip-text text-transparent"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Bold Flavors. <br />
              <span className="text-yellow-400">Zero Compromise.</span>
            </h2>

            {/* Description (Shortened) */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
              Dip & Dash delivers high-energy street food with signature
              burgers, loaded fries, and unforgettable sauces-
              crafted for flavor lovers who crave impact.
            </p>

            {/* Reduced Highlights (2 only) */}
            <div className="space-y-8 mb-14">

              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Signature Loaded Burgers
                </h4>
                <p className="text-sm text-gray-400">
                  Double stacks, molten cheese, bold sauces-
                  every bite hits different.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Fully Loaded Fries
                </h4>
                <p className="text-sm text-gray-400">
                  Crispy golden fries layered with rich toppings
                  and house-crafted blends.
                </p>
              </div>

            </div>

            {/* Minimal Stats */}
            <div className="flex gap-20 mb-14">
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
              className="inline-block px-12 py-4 rounded-xl font-semibold
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
