import { motion } from "framer-motion";
import { Award, Users, Target } from "lucide-react";
import kenseiLogo from "@/assets/Kensei-logo.webp";

const HeroSection = () => {
  return (
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

      <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-8">
        A premium multi-venture lifestyle group redefining excellence across
        entertainment, dining and global education.
      </p>

      {/* Enhanced Kensei Groups Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        <motion.div
          className="bg-blue-900/20 p-6 rounded-2xl border border-yellow-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Target className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-yellow-400 font-bold mb-2">Our Focus</h3>
          <p className="text-gray-400 text-sm">
            Creating premium experiences through strategic ventures in entertainment, dining and education
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-900/20 p-6 rounded-2xl border border-yellow-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-yellow-400 font-bold mb-2">Our Expertise</h3>
          <p className="text-gray-400 text-sm">
            Multi-industry excellence combining operational mastery with innovative brand development
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-900/20 p-6 rounded-2xl border border-yellow-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-yellow-400 font-bold mb-2">Our Community</h3>
          <p className="text-gray-400 text-sm">
            Building a thriving ecosystem of premium lifestyle brands serving discerning audiences
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
