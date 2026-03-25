// import { motion } from "framer-motion";
// import { Target, Users, Heart, Zap } from "lucide-react";

// const MissionSection = () => {
//   return (
//     <section className="py-32 bg-gradient-to-b from-black to-blue-950">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
//             Our Mission
//           </h2>
//           <div className="flex items-center gap-3">
//             <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
//             <p className="text-gray-400 text-lg">Transforming Lives Through Premium Experiences</p>
//           </div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Image Placeholder */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative group"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-900/20 rounded-3xl blur-2xl"></div>
//             <div className="relative bg-gradient-to-br from-blue-900/40 to-black border-2 border-yellow-400/30 rounded-3xl overflow-hidden aspect-square flex items-center justify-center hover:border-yellow-400/60 transition-all duration-300">
//               <div className="text-center">
//                 <Target className="w-24 h-24 text-yellow-400/40 mx-auto mb-4" />
//                 <p className="text-gray-500 text-lg font-semibold">Mission Image</p>
//                 <p className="text-gray-600 text-sm mt-2">Add your mission-related image here</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Mission Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Main Mission Statement */}
//             <div className="p-8 rounded-2xl bg-blue-900/30 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-yellow-400 mb-4">Core Purpose</h3>
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 To deliver transformative experiences across entertainment, dining, and education- empowering individuals to pursue excellence and unlock their full potential.
//               </p>
//             </div>

//             {/* Mission Pillars */}
//             <div className="space-y-4">
//               <motion.div
//                 className="p-6 rounded-xl bg-blue-900/20 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="flex items-start gap-4">
//                   <Heart className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-white mb-2">Community First</h4>
//                     <p className="text-gray-400 text-sm">Creating premium yet accessible platforms where communities thrive and talents flourish</p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="p-6 rounded-xl bg-blue-900/20 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="flex items-start gap-4">
//                   <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-white mb-2">Excellence Driven</h4>
//                     <p className="text-gray-400 text-sm">Every venture designed with precision to exceed expectations and inspire continuous growth</p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="p-6 rounded-xl bg-blue-900/20 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="flex items-start gap-4">
//                   <Users className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-white mb-2">Dream Enabler</h4>
//                     <p className="text-gray-400 text-sm">Empowering dreams to become reality through strategic platforms and unwavering support</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Extended Mission Content */}
//             <div className="p-6 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-blue-900/5 border border-yellow-400/10">
//               <p className="text-gray-300 leading-relaxed">
//                 We are committed to creating impact-driven solutions that position Kensei Groups as a catalyst for positive change. Through innovation, integrity, and inclusive growth, we build ventures that serve not just stakeholders but entire communities, setting new standards for premium lifestyle experiences globally.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;
