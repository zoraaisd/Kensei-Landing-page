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
      className="relative scroll-mt-24 py-14 sm:py-16 md:py-10 lg:py-12 bg-gradient-to-b
                 from-black via-zinc-950 to-black
                 overflow-hidden text-white xl:min-h-screen xl:py-24"
    >
      {/* Blue Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-12 gap-8 md:gap-6 lg:gap-10 xl:gap-20 items-center">

          {/* ================= LEFT (Logo Only) ================= */}
          <div className="md:col-span-1 xl:col-span-5 flex justify-center xl:justify-start relative">

            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[480px] bg-blue-500/15 blur-3xl rounded-full" />

            <motion.img
              src={optimusLogo}
              alt="Optimus Logo"
              className="relative w-52 sm:w-64 md:w-[240px] lg:w-[320px] xl:w-[420px] object-contain
                         drop-shadow-[0_0_80px_rgba(59,130,246,0.6)]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -32, 0], rotateZ: [-2, 2, -2] }}
              transition={{ 
                opacity: { duration: 1 },
                x: { duration: 1 },
                y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
            />

          </div>

          {/* ================= RIGHT (Content) ================= */}
          <div className="md:col-span-1 xl:col-span-7 mx-auto max-w-3xl pt-2 sm:pt-4 md:pt-0 lg:pt-8 xl:pt-0 text-center md:max-w-none md:text-left xl:mx-0 xl:max-w-none">

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-[2.35rem] lg:text-5xl font-bold leading-tight mb-5 lg:mb-6
                         bg-gradient-to-r from-blue-300 via-yellow-400 to-blue-400
                         bg-clip-text text-transparent"
              
            >
              Global Academic Excellence
            </h2>

            {/* Description */}
            <p className="mx-auto md:mx-0 text-white/90 leading-relaxed mb-8 lg:mb-10 max-w-xl">
              Empowering ambitious students with internationally recognized
              postgraduate programs designed for global impact and leadership.
            </p>

            {/* Course List */}
            <div className="space-y-8">

               <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  MBBS in Global Health and Tropical Medicine
                </h3>
                <p className="text-white/90">
                  Comprehensive medical training focused on global health challenges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  MSc in Environmental Data Analytics
                </h3>
                <p className="text-white/90">
                  Predictive modeling and AI-driven environmental solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  MA in Media, Culture and Society
                </h3>
                <p className="text-white/90">
                  Global media systems and digital cultural transformation.
                </p>
              </div>

             
              {/* Apply Button */}
              <motion.a
                href="https://www.optimusoverseasedu.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mb-14 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl font-semibold text-center
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
            className="flex whitespace-nowrap gap-12 sm:gap-20 text-yellow-400 font-semibold text-base sm:text-lg tracking-wide"
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
