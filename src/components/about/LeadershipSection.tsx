import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import founderImg from "@/assets/Founder.webp";
import coFounderImg from "@/assets/Co-Founder.webp";

const LeadershipSection = () => {
  const XIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="fill-current"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.4l-5.79-7.57-6.63 7.57H.5l8.6-9.83L0 1.153h7.6l5.23 6.91 6.07-6.91ZM17.6 20.64h2.04L6.5 3.25H4.3L17.6 20.64Z" />
    </svg>
  );

  return (
    <section className="py-28 container mx-auto px-6 max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-20 text-yellow-400">
        Meet Our Leadership
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Founder */}
        <motion.div 
          className="bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20 text-center hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-44 h-44 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
            <img
              src={founderImg}
              alt="Founder"
              className="relative w-full h-full object-cover rounded-full border-2 border-yellow-400"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">
            Founder & Managing Director
          </h3>

          <p className="text-yellow-400 mb-4 font-semibold">
            Corporate Strategy & Operations Lead
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            With strategic precision and operational excellence, our Founder spearheads Kensei's corporate vision. Leading with a data-driven approach, they ensure every venture aligns with our premium standards while maintaining sustainable growth. Their expertise in multi-industry management has been instrumental in building the Kensei ecosystem.
          </p>

          <div className="flex justify-center gap-8 mt-6">
            <a href="mailto:info@kenseifnbgroup.com"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>

            <a href="https://x.com/Adv_Dr_S_Ansar"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <XIcon size={20} />
              {/* <span className="text-sm">X</span> */}
            </a>

            <a href="https://www.linkedin.com/in/dransarali/"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Co-Founder */}
        <motion.div 
          className="bg-blue-900/20 p-10 rounded-3xl border border-yellow-400/20 text-center hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-44 h-44 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
            <img
              src={coFounderImg}
              alt="Co-Founder"
              className="relative w-full h-full object-cover rounded-full border-2 border-yellow-400"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">
            Co-Founder & Chief Executive Officer
          </h3>

          <p className="text-yellow-400 mb-4 font-semibold">
            Innovation & Growth Architect
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            As the visionary driving expansion and innovation, our Co-Founder brings a forward-thinking approach to every challenge. Their expertise in brand development and market positioning has expanded Kensei's global reach. They champion technological advancement and are committed to establishing Kensei as an industry benchmark.
          </p>

          <div className="flex justify-center gap-8 mt-6">
            <a href="mailto:info@kenseifnbgroup.com"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>

            <a href="https://x.com/Adv_Dr_S_Ansar"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <XIcon size={20} />
              {/* <span className="text-sm">X</span> */}
            </a>

            <a href="https://www.linkedin.com/in/dransarali/"
               className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
