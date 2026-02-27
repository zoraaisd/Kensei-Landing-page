import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

import kenseiLogo from "@/assets/Kensei-logo.png";
import snookerLogo from "@/assets/snooker-logo.png";
import gameLogo from "@/assets/ps logo.png";
import dipLogo from "@/assets/Dip & Dash.png";
import optimusLogo from "@/assets/optimus-logo.png";
import founderImg from "@/assets/Founder.jpg";
import coFounderImg from "@/assets/Co-Founder.jpg";

const AboutPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />

        <motion.img
          src={kenseiLogo}
          alt="Kensei Logo"
          className="w-72 mx-auto mb-10 drop-shadow-[0_0_60px_rgba(255,215,0,0.6)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          About <span className="text-yellow-400">Kensei Groups</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          A premium multi-venture lifestyle group redefining excellence across
          entertainment, dining, and global education.
        </p>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Our Story
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Kensei Groups was built on a philosophy of precision,
              performance, and purpose — delivering premium experiences
              across multiple industries.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From elite snooker arenas to global academic pathways,
              every venture reflects ambition and excellence.
            </p>
          </div>

          <div className="bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              What Makes Us Different
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Unified premium brand identity</li>
              <li>✔ Multi-industry ecosystem model</li>
              <li>✔ Performance-driven leadership</li>
              <li>✔ Community-centered experiences</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div className="p-10 rounded-3xl bg-blue-900/30 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver transformative experiences across entertainment,
              dining, and education — empowering individuals to pursue excellence.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-blue-900/30 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become a globally recognized lifestyle group known
              for innovation and premium multi-industry impact.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOUNDERS ================= */}
      <section className="py-28 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-20 text-yellow-400">
          Meet Our Founders
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Founder */}
          <div className="bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20 text-center hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-300">

            <div className="relative w-44 h-44 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
              <img
                src={founderImg}
                alt="Founder"
                className="relative w-full h-full object-cover rounded-full border-2 border-yellow-400"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Founder & Director Manager
            </h3>

            <p className="text-yellow-400 mb-4">
              Corporate Strategy & Operations Lead
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Leading Kensei’s ecosystem with strategic precision
              and operational excellence.
            </p>

            <div className="flex justify-center gap-8 mt-6">

              <a href="mailto:founder@kensei.com"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>

              <a href="#"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>

              <a href="#"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>

            </div>
          </div>

          {/* Co-Founder */}
          <div className="bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20 text-center hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-300">

            <div className="relative w-44 h-44 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
              <img
                src={coFounderImg}
                alt="Co-Founder"
                className="relative w-full h-full object-cover rounded-full border-2 border-yellow-400"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Co-Founder & CEO
            </h3>

            <p className="text-yellow-400 mb-4">
              Innovation & Growth Architect
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Driving expansion, innovation, and global positioning
              of the Kensei brand.
            </p>

            <div className="flex justify-center gap-8 mt-6">

              <a href="mailto:ceo@kensei.com"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>

              <a href="#"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>

              <a href="#"
                 className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SUB BRANDS ================= */}
<section className="py-28 bg-gradient-to-b from-blue-950 to-black">
  <div className="container mx-auto px-6 text-center max-w-6xl">

    <h2 className="text-4xl font-bold mb-20 text-yellow-400">
      Our Sub Brands
    </h2>

    <div className="grid md:grid-cols-4 gap-16 items-center">

      <div className="space-y-6">
        <img
          src={snookerLogo}
          className="h-20 md:h-24 mx-auto object-contain
                     hover:scale-105 transition-transform duration-300"
          alt="Snookers"
        />
        <p className="text-gray-400 text-sm">
          Elite Snooker Experience
        </p>
      </div>

      <div className="space-y-6">
        <img
          src={gameLogo}
          className="h-20 md:h-24 mx-auto object-contain
                     hover:scale-105 transition-transform duration-300"
          alt="Game Of War"
        />
        <p className="text-gray-400 text-sm">
          Next-Gen Gaming Arena
        </p>
      </div>

      <div className="space-y-6">
        <img
          src={dipLogo}
          className="h-20 md:h-24 mx-auto object-contain
                     hover:scale-105 transition-transform duration-300"
          alt="Dip & Dash"
        />
        <p className="text-gray-400 text-sm">
          Premium Street Dining
        </p>
      </div>

      <div className="space-y-6">
        <img
          src={optimusLogo}
          className="h-20 md:h-24 mx-auto object-contain
                     hover:scale-105 transition-transform duration-300"
          alt="Optimus Overseas"
        />
        <p className="text-gray-400 text-sm">
          Global Academic Pathways
        </p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
};

export default AboutPage;