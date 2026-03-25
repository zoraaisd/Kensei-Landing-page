import { motion, useInView, animate } from "framer-motion";
import { TrendingUp, Award, Users, Target, BarChart3, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "", prefix = "", duration = 2.5, delay = 0 }: { value: number, suffix?: string, prefix?: string, duration?: number, delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, duration, delay]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const chartData = [
  { year: "'20", value: 12 },
  { year: "'21", value: 25 },
  { year: "'22", value: 45 },
  { year: "'23", value: 78 },
  { year: "'24", value: 110 },
  { year: "'25", value: 140 },
  { year: "'26", value: 175 },
];
const maxValue = Math.max(...chartData.map((d) => d.value));

const FinancialPerformanceSection = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-[#020617] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Growth & Scale
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Financial <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">Performance</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Demonstrating strong market presence, consistent year-over-year revenue expansion, and a robust platform for future global scale.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Growing Graph Card (Spans 7 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 relative group rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 md:p-12 backdrop-blur-2xl hover:bg-white/[0.04] transition-colors overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10 gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <BarChart3 className="text-yellow-400 w-6 h-6" />
                  </div>
                  Turnover Trajectory
                </h3>
                <p className="text-gray-400 mt-2 text-sm font-medium">Annual revenue growth in Crores (₹)</p>
              </div>
              <div className="md:text-right border-l-2 md:border-l-0 border-yellow-400/30 pl-4 md:pl-0">
                <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">
                  <Counter value={73} suffix="%" />
                </div>
                <p className="text-yellow-400/80 text-xs md:text-sm font-bold mt-1 uppercase tracking-widest">YoY Growth</p>
              </div>
            </div>

            {/* The Graph */}
            <div className="h-48 md:h-72 w-full flex items-end justify-between gap-3 md:gap-8 relative z-10 mt-auto pt-6">
              {/* Grid lines (decorative) */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-white/[0.04] flex items-center relative">
                    <span className="text-white/20 text-[10px] sm:text-xs absolute -left-2 lg:-left-6 -translate-y-1/2 font-medium">
                      {Math.round(maxValue - (maxValue/3)*i)}
                    </span>
                  </div>
                ))}
              </div>

              {chartData.map((data, index) => {
                const heightPercentage = Math.max(5, (data.value / maxValue) * 100);
                return (
                  <div key={data.year} className="relative flex flex-col items-center flex-1 group/bar z-10 h-full justify-end">
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 opacity-0 group-hover/bar:opacity-100 group-hover/bar:-translate-y-2 transition-all duration-300 bg-[#020617] border border-yellow-400/30 text-yellow-400 text-xs md:text-sm font-bold py-1.5 px-3 md:px-4 rounded-xl whitespace-nowrap shadow-[0_10px_30px_rgba(250,204,21,0.2)]">
                      ₹ <Counter value={data.value} duration={1} /> Cr
                    </div>

                    {/* The Bar */}
                    <motion.div
                      className="w-full max-w-[40px] md:max-w-[70px] rounded-t-2xl bg-gradient-to-t from-yellow-600/20 via-yellow-400/60 to-yellow-300 relative overflow-hidden group-hover/bar:via-yellow-400/80 group-hover/bar:from-yellow-500/30 transition-colors border-x border-t border-yellow-100/20 shadow-[0_0_30px_rgba(250,204,21,0)] group-hover/bar:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
                      initial={{ height: "0%" }}
                      whileInView={{ height: `${heightPercentage}%` }}
                      transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {/* Shimmer effect inside bar */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    {/* Year Label */}
                    <div className="mt-4 md:mt-6 text-xs md:text-sm font-bold text-gray-500 group-hover/bar:text-yellow-400 transition-colors tracking-wider">
                      {data.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Metrics Grid (Spans 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            
            <MetricCard 
              icon={<Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />}
              title="Active Brands"
              value={6}
              suffix="+"
              delay={0.2}
            />
            
            <MetricCard 
              icon={<Briefcase className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />}
              title="Sectors"
              value={5}
              suffix="+"
              delay={0.3}
            />
            
            <MetricCard 
              icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />}
              title="Team Members"
              value={500}
              suffix="+"
              delay={0.4}
            />
            
            <MetricCard 
              icon={<Target className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />}
              title="Customer Base"
              value={100}
              suffix="K+"
              delay={0.5}
            />

            {/* Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="col-span-2 rounded-[2rem] bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-8 md:p-10 relative overflow-hidden group cursor-pointer shadow-[0_15px_40px_rgba(250,204,21,0.2)] hover:shadow-[0_20px_50px_rgba(250,204,21,0.4)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 p-6 opacity-10 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <TrendingUp className="w-48 h-48 text-black" />
              </div>
              <div className="relative z-10">
                <h3 className="text-black font-black text-2xl md:text-3xl mb-3 tracking-tight">Future Outlook</h3>
                <p className="text-black/80 font-bold text-sm md:text-base leading-relaxed max-w-[90%]">
                  Targeting exponential growth and expanding into 3 new global territories by 2026. Join us.
                </p>
              </div>
              {/* Arrow button */}
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center group-hover:bg-black group-hover:text-yellow-400 text-black transition-colors duration-300">
                <TrendingUp className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ icon, title, value, suffix, delay }: { icon: React.ReactNode, title: string, value: number, suffix: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} // custom spring-like ease Out
      viewport={{ once: true, margin: "-50px" }}
      className="rounded-[2rem] bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.05] hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] transition-all duration-500 group flex flex-col justify-between min-h-[160px] md:min-h-[180px]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-yellow-400/10">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-yellow-500 transition-colors drop-shadow-md">
          <Counter value={value} suffix={suffix} delay={delay} />
        </div>
        <p className="text-gray-500 text-xs md:text-sm font-bold mt-2 uppercase tracking-wider group-hover:text-gray-300 transition-colors">{title}</p>
      </div>
    </motion.div>
  );
};

export default FinancialPerformanceSection;
