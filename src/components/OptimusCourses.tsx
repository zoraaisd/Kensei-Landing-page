import { motion } from "framer-motion";
import optimusLogo from "@/assets/opt-logo.webp";

const courses = [
  "MSc in Environmental Data Analytics",
  "MA in Media, Culture and Society",
  "LLM in International Commercial Dispute Resolution",
];

const OptimusCourses = () => {
  return (
    <section
      id="optimus-courses"
      className="relative min-h-screen py-24 bg-gradient-to-b
                 from-black via-zinc-950 to-black
                 overflow-hidden text-white"
    >
      {/* Blue Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-20 items-center">

          {/* ================= LEFT (Logo Only) ================= */}
          <div className="md:col-span-5 flex justify-center md:justify-start relative">

            <div className="absolute w-[480px] h-[480px] bg-blue-500/15 blur-3xl rounded-full" />

            <motion.img
              src={optimusLogo}
              alt="Optimus Logo"
              className="relative w-80 md:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(59,130,246,0.6)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

          </div>

          {/* ================= RIGHT (Content) ================= */}
          <div className="md:col-span-7">

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6
                         bg-gradient-to-r from-blue-300 via-yellow-400 to-blue-400
                         bg-clip-text text-transparent"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Global Academic Excellence
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-10 max-w-xl">
              Empowering ambitious students with internationally recognized
              postgraduate programs designed for global impact and leadership.
            </p>

            {/* Course List */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  MSc in Environmental Data Analytics
                </h3>
                <p className="text-gray-400">
                  Predictive modeling and AI-driven environmental solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  MA in Media, Culture and Society
                </h3>
                <p className="text-gray-400">
                  Global media systems and digital cultural transformation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  LLM in International Commercial Dispute Resolution
                </h3>
                <p className="text-gray-400">
                  Arbitration and cross-border legal frameworks.
                </p>
              </div>
              {/* Apply Button */}
            <motion.a
              href="#apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-14 px-10 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-blue-600 to-blue-500
                         text-white
                         shadow-[0_0_35px_rgba(59,130,246,0.6)]
                         hover:shadow-[0_0_50px_rgba(59,130,246,0.9)]
                         transition-all duration-300"
            >
              Apply Now
            </motion.a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM MARQUEE ================= */}
        <div className="relative overflow-hidden border-y border-blue-500/30 mt-24 py-5">

          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 text-yellow-400 font-semibold text-lg tracking-wide"
          >
            {courses.concat(courses).map((course, i) => (
              <span key={i}>🎓 {course}</span>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default OptimusCourses;