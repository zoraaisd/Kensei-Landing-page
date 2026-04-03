import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import vision from "@/assets/vision 1.webp";
import mission from "@/assets/mission 1.webp";
import missionVideo from "@/assets/video/mission-video.webm";
import visionVideo from "@/assets/video/vission-video.webm";

const MissionVisionSection = () => {
  return (
    <>
      {/* MISSION SECTION - Full Page */}
      <section className="min-h-screen py-20 bg-black flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              className="group relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={mission}
                alt="Our Mission"
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <video
                src={missionVideo}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-5xl font-bold text-yellow-400">
                  Our Mission
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-semibold">
                  To deliver transformative experiences across entertainment, dining and education- empowering individuals to pursue excellence and unlock their true potential.
                </p>

                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Our Core Commitment</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We are committed to creating premium yet accessible platforms where communities thrive, talents flourish and dreams become reality.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Precision & Excellence</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Every venture is designed with meticulous precision to exceed expectations, inspire continuous growth and set new industry standards.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Transformative Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      From Dip & Dash's culinary innovation to Optimus Academy's educational excellence, we transform industries and inspire communities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION SECTION - Full Page */}
      <section className="min-h-screen py-20 bg-gradient-to-b from-black to-blue-950 flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 md:order-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-5xl font-bold text-yellow-400">
                  Our Vision
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-semibold">
                  To become a globally recognized lifestyle group celebrated for innovation, excellence and transformative multi-industry impact worldwide.
                </p>

                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Global Recognition</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We envision Kensei Groups standing as the gold standard in premium experiences, recognized across continents for setting industry benchmarks.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Strategic Expansion</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Through strategic expansion and innovative ventures, we'll redefine entertainment, dining, gaming and education landscapes globally.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">Technology & Innovation</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We commit to technological innovation and unwavering excellence across all ventures, creating experiences that define the future.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="group relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={vision}
                alt="Our Vision"
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <video
                src={visionVideo}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-950/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionSection;
