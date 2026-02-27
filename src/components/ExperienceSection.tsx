import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import snookerLogo from "@/assets/snooker-logo.png";
import gameLogo from "@/assets/ps logo.png";
import dipLogo from "@/assets/Dip & Dash.png";
import optimusLogo from "@/assets/optimus-logo.png";
import kenseiLogo from "@/assets/Kensei-logo.png";

const experiences = [
  { logo: snookerLogo, label: "Snookers", path: "/snookers" },
  { logo: gameLogo, label: "GameOfWar", path: "/gameofwar" },
  { logo: dipLogo, label: "Dip & Dash", path: "/dipdash" },
  { logo: optimusLogo, label: "Optimus", path: "/optimus" },
];

const ExperienceSection = () => {
  const brandRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(brandRefs.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative py-32 bg-white">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE – BRAND STRUCTURE */}
          <div className="text-center md:text-left">

            {/* Parent Brand */}
            <Link to="/" className="inline-block mb-10">
              <img
                src={kenseiLogo}
                alt="Kensei"
                className="w-44 mx-auto md:mx-0 hover:scale-105 transition duration-300"
              />
            </Link>

            <h2 className="text-3xl font-bold text-gray-800 mb-10 tracking-wide">
              Our Brands
            </h2>

            <div className="flex flex-wrap gap-12">

              {experiences.map((exp, i) => (
                <Link
                  to={exp.path}
                  key={exp.label}
                  className="flex flex-col items-center group"
                >
                  <div
                    ref={(el) => (brandRefs.current[i] = el!)}
                    className="w-28 h-28 flex items-center justify-center
                                  transition duration-500
                                  group-hover:scale-110"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.label}
                      className="max-h-16 object-contain"
                    />
                  </div>

                  <span className="mt-3 text-sm font-semibold text-gray-600 tracking-wide">
                    {exp.label}
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE – MAP */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.236"
              width="100%"
              height="400"
              loading="lazy"
              className="w-full h-[400px]"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;