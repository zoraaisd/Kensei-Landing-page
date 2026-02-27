import { motion } from "framer-motion";
import kenseiLogo from "@/assets/Kensei-logo.png";
import snookerLogo from "@/assets/snooker-logo.png";
import gameLogo from "@/assets/ps logo.png";
import dipLogo from "@/assets/Dip & Dash.png";
import optimusLogo from "@/assets/optimus-logo.png";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black text-center pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />

        <motion.img
          src={kenseiLogo}
          alt="Kensei Logo"
          className="w-72 mx-auto mb-10 drop-shadow-[0_0_60px_rgba(255,215,0,0.6)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}>
          About <span className="text-yellow-400">Kensei Groups</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed px-6">
          A premium multi-venture lifestyle group redefining excellence across
          entertainment, dining, and global education.
        </p>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-24 container mx-auto px-0 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center px-6">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Our Story
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Kensei Groups was built on a singular philosophy — precision,
              performance, and purpose. Inspired by the discipline of mastery,
              we crafted a brand ecosystem that delivers premium experiences
              across multiple industries.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From elite snooker arenas to high-energy gaming lounges,
              from bold culinary ventures to global academic pathways,
              every Kensei venture reflects excellence and ambition.
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
        <div className="container mx-auto px-0 grid md:grid-cols-2 gap-16 px-6">

          <div className="p-10 rounded-3xl bg-blue-900/30 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver transformative experiences across entertainment,
              dining, and education — empowering individuals to pursue
              excellence, growth, and global success.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-blue-900/30 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become a globally recognized lifestyle group known
              for innovation, premium quality, and multi-industry impact.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOUNDERS ================= */}
      <section className="py-28 container mx-auto px-0 max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Meet Our Founders
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Founder 1 */}
          <div className="text-center bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20">

            <div className="w-40 h-40 mx-auto rounded-full bg-gray-800 mb-6 flex items-center justify-center text-gray-500">
              Founder Image
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Founder & Director Manager
            </h3>

            <p className="text-yellow-400 mb-4">
              Corporate Strategy & Operations Lead
            </p>

            <p className="text-gray-400 leading-relaxed">
              Leading Kensei's multi-venture operations with strategic
              precision and long-term vision, ensuring excellence
              across every brand vertical.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="text-center bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20">

            <div className="w-40 h-40 mx-auto rounded-full bg-gray-800 mb-6 flex items-center justify-center text-gray-500">
              Co-Founder Image
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Co-Founder & Chief Executive Officer
            </h3>

            <p className="text-yellow-400 mb-4">
              Innovation & Growth Architect
            </p>

            <p className="text-gray-400 leading-relaxed">
              Driving expansion, innovation, and brand positioning
              while building a scalable ecosystem of premium ventures.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SUB BRANDS ================= */}
      <section className="py-28 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-0 text-center max-w-6xl px-6">

          <h2 className="text-4xl font-bold mb-16 text-yellow-400">
            Our Sub Brands
          </h2>

          <div className="grid md:grid-cols-4 gap-12 items-center">

            <div className="space-y-4">
              <img src={snookerLogo} className="h-16 mx-auto" />
              <p className="text-gray-400 text-sm">
                Elite Snooker Experience
              </p>
            </div>

            <div className="space-y-4">
              <img src={gameLogo} className="h-16 mx-auto" />
              <p className="text-gray-400 text-sm">
                Next-Gen Gaming Arena
              </p>
            </div>

            <div className="space-y-4">
              <img src={dipLogo} className="h-16 mx-auto" />
              <p className="text-gray-400 text-sm">
                Premium Street Dining
              </p>
            </div>

            <div className="space-y-4">
              <img src={optimusLogo} className="h-16 mx-auto" />
              <p className="text-gray-400 text-sm">
                Global Academic Pathways
              </p>
            </div>

          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
