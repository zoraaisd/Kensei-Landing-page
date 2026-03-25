import { motion } from "framer-motion";
import snookerLogo from "@/assets/snookers-logo.webp";
import gameLogo from "@/assets/Gow-logo.webp";
import dipLogo from "@/assets/dipdash-og-logo.webp";
import optimusLogo from "@/assets/opt-logo.webp";
import zoralogo from "@/assets/Zora Icon.webp";
import manpowerLogo from "@/assets/opt-glob-trans.webp";

const BrandsSection = () => {
  const subBrands = [
    {
      name: "Elite 147 Snooker",
      alt: "Snookers",
      image: snookerLogo,
      href: "https://147-snooker.netlify.app/",
    },
    {
      name: "Game Of War",
      alt: "Game Of War",
      image: gameLogo,
      href: "https://147-snooker.netlify.app/",
    },
    {
      name: "Dip&Dash",
      alt: "Dip & Dash",
      image: dipLogo,
      href: "https://www.dipanddash.com/",
    },
    {
      name: "Optimus Global",
      alt: "Optimus Overseas",
      image: optimusLogo,
      href: "https://www.optimusoverseasedu.com/",
    },
    {
      name: "Zora",
      alt: "Zora",
      image: zoralogo,
      href: "https://www.zoraglobalai.com/",
    },
    {
      name: "Optimus Manpower",
      alt: "Optimus Manpower",
      image: manpowerLogo,
      href: "https://www.optimusglobalhr.com/",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="absolute -top-24 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="relative container mx-auto px-6 text-center max-w-6xl">
        <motion.p
          className="mx-auto mb-4 w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Brands
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A diverse portfolio of premium brands united by our commitment to excellence and innovation
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {subBrands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noreferrer"
              className="group relative h-full min-h-[240px] rounded-[28px] border border-yellow-400/15 bg-gradient-to-br from-blue-950/40 via-black/40 to-blue-950/20 p-6 flex flex-col items-center justify-between overflow-hidden transition-all duration-300"
              whileHover={{ y: -10, rotateZ: -0.4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-yellow-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-blue-500/20 blur-2xl opacity-60" />
              <div className="absolute left-0 top-0 h-full w-20 -translate-x-24 bg-gradient-to-r from-yellow-400/0 via-yellow-400/15 to-yellow-400/0 transition-transform duration-700 group-hover:translate-x-[22rem]" />

              <div className="flex w-full items-center justify-between">
                <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] font-semibold tracking-[0.3em] text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Brand
                </span>
              </div>

              <img
                src={brand.image}
                className="relative h-16 md:h-20 object-contain mb-4 group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-300"
                alt={brand.alt}
              />

              <div className="relative text-center">
                <p className="text-gray-200 text-sm font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                  {brand.name}
                </p>
                <div className="mt-3 h-[2px] w-10 mx-auto rounded-full bg-yellow-400/30 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
