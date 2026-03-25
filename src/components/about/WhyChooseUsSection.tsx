import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-blue-900 to-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-yellow-400">
          Why Choose Kensei Groups
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Discover what sets us apart in the premium lifestyle market
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-blue-900/30 p-8 rounded-2xl border border-yellow-400/20 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Award className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uncompromising standards across all ventures ensuring excellence in every experience
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-900/30 p-8 rounded-2xl border border-yellow-400/20 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Users className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Expert Leadership</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Visionary founders with proven track records driving innovation and growth
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-900/30 p-8 rounded-2xl border border-yellow-400/20 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Target className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Diverse Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Multi-industry presence spanning entertainment, dining, education, and manpower
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-900/30 p-8 rounded-2xl border border-yellow-400/20 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Consistent Growth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proven expansion trajectory and sustainable business performance year over year
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
