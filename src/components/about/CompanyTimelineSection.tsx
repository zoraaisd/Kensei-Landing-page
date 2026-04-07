import { motion } from "framer-motion";

const CompanyTimelineSection = () => {
  const timelineEvents = [
    {
      year: 2018,
      title: "Founded Kensei Groups",
      description: "Founded Kensei Groups with a vision to revolutionize premium lifestyle experiences",
      align: "left"
    },
    {
      year: 2019,
      title: "Launched Elite 147 Snooker",
      description: "Launched Elite 147 Snooker, establishing premium entertainment standards",
      align: "right"
    },
    {
      year: 2020,
      title: "Expanded into Online Gaming",
      description: "Expanded into online gaming with the Game Of War platform.",
      align: "left"
    },
    {
      year: 2021,
      title: "Introduced Dip & Dash",
      description: "Introduced Dip & Dash, revolutionizing the dining experience.",
      align: "right"
    },
    {
      year: 2022,
      title: "Launched Optimus Global",
      description: "Launched Optimus Global to deliver premium overseas education services.",
      align: "left"
    },
    {
      year: 2024,
      title: "Expanded Ecosystem",
      description: "Expanded with Optimus Manpower and Zora, solidifying our multi-venture ecosystem.",
      align: "right"
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Our Growth Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-900" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`relative md:flex items-center mb-8 ${event.align === "right" ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: event.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`md:w-1/2 pl-10 md:pl-0 ${event.align === "right" ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="bg-blue-900/40 p-6 rounded-2xl border border-yellow-400/20">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.year}</h3>
                    <p className="text-gray-300 font-semibold mb-2">{event.title}</p>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full top-6 md:top-1/2 md:-translate-y-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;
