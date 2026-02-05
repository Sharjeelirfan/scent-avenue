// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaFacebookF, FaWhatsapp, FaUsers } from "react-icons/fa";

// const socials = [
//   { icon: <FaInstagram />, link: "https://www.instagram.com/scent.avenue_/", name: "Instagram" },
//   { icon: <FaFacebookF />, link: "https://www.facebook.com/scentavenueofficial", name: "Facebook" },
//   { icon: <FaWhatsapp />, link: "https://wa.me/923702205204", name: "WhatsApp" },
//   { icon: <FaUsers />, link: "https://chat.whatsapp.com/EgGetSaOrkKJXysQ7o6zPo", name: "The Club" },
// ];

// // Background Particles Component
// const Particles = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute bg-yellow-600/20 rounded-full"
//           style={{
//             width: Math.random() * 4 + "px",
//             height: Math.random() * 4 + "px",
//             left: Math.random() * 100 + "%",
//             top: Math.random() * 100 + "%",
//           }}
//           animate={{
//             y: [0, -100, 0],
//             x: [0, Math.random() * 50 - 25, 0],
//             opacity: [0, 0.8, 0],
//           }}
//           transition={{
//             duration: Math.random() * 10 + 10,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default function RunningAnimationPage() {
//   return (
//     <div className="relative min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center overflow-hidden">
      
//       {/* 1. Background Running Particles */}
//       <Particles />

//       {/* 2. Infinite Running Text (Marquee) */}
//       <div className="absolute top-1/4 w-full overflow-hidden opacity-5 select-none pointer-events-none">
//         <motion.div 
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="flex whitespace-nowrap text-[15vh] font-black uppercase tracking-tighter"
//         >
//           <span>Scent Avenue • Signature Fragrance • Luxury Essence •&nbsp;</span>
//           <span>Scent Avenue • Signature Fragrance • Luxury Essence •&nbsp;</span>
//         </motion.div>
//       </div>

//       {/* 3. Main Content Section */}
//       <div className="z-10 text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <motion.p 
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="uppercase tracking-[0.8em] text-[10px] md:text-xs text-yellow-700 mb-6"
//           >
//             The Wait is Almost Over
//           </motion.p>
          
//           <h1 className="text-5xl md:text-[120px] font-serif italic mb-2 tracking-tighter">
//             Coming <span className="relative">
//               Soon
//               <motion.div 
//                 className="absolute bottom-4 left-0 h-[2px] bg-yellow-700"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 1, duration: 2 }}
//               />
//             </span>
//           </h1>
//         </motion.div>

//         {/* 4. Animated CTA Button */}
//         <motion.div 
//           className="mt-16 relative inline-block group"
//           whileHover={{ scale: 1.05 }}
//         >
//           <a 
//             href="https://chat.whatsapp.com/EgGetSaOrkKJXysQ7o6zPo"
//             className="relative z-20 px-10 py-4 bg-transparent border border-white/20 backdrop-blur-sm text-[10px] tracking-[0.4em] uppercase font-bold block transition-all group-hover:border-yellow-700"
//           >
//             Enter The Club
//           </a>
//           {/* Running Border Animation around button */}
//           <motion.div 
//             className="absolute -inset-[2px] border border-yellow-700 opacity-0 group-hover:opacity-100 rounded-sm"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//           />
//         </motion.div>
//       </div>

//       {/* 5. Social Media - Bottom Dock */}
//       <motion.div 
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10 flex gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
//       >
//         {socials.map((social, i) => (
//           <motion.a
//             key={i}
//             href={social.link}
//             target="_blank"
//             whileHover={{ y: -5, scale: 1.2, color: "#b45309" }}
//             className="text-xl transition-colors cursor-pointer"
//             title={social.name}
//           >
//             {social.icon}
//           </motion.a>
//         ))}
//       </motion.div>

//       {/* 6. Floating Name Side-Decor */}
//       <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden lg:block">
//         <div className="flex items-center gap-4">
//           <div className="h-[1px] w-20 bg-yellow-700/50 animate-pulse"></div>
//           <p className="text-[10px] tracking-[0.5em] uppercase text-white/30">
//             SCENT AVENUE OFFICIAL
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// }





  "use client";
  import React from "react";
  import { motion } from "framer-motion";
  import { FaInstagram, FaFacebookF, FaWhatsapp, FaUsers } from "react-icons/fa";

  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/scent.avenue_/", name: "Instagram" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/scentavenueofficial", name: "Facebook" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923702205204", name: "WhatsApp" },
    { icon: <FaUsers />, link: "https://chat.whatsapp.com/EgGetSaOrkKJXysQ7o6zPo", name: "The Club" },
  ];

  // Background Particles (Running Animation)
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-600/20 rounded-full"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  export default function ScentAvenueComingSoon() {
    return (
      <div className="relative min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center overflow-hidden font-sans">
        
        {/* 1. Background Running Particles */}
        <Particles />

        {/* 2. Infinite Running Marquee Text */}
        <div className="absolute top-1/4 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap text-[18vh] font-black uppercase tracking-tighter"
          >
            <span>Scent Avenue • Signature Fragrance • Luxury Essence •&nbsp;</span>
            <span>Scent Avenue • Signature Fragrance • Luxury Essence •&nbsp;</span>
          </motion.div>
        </div>

        {/* 3. Main Brand Content */}
        <div className="z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Brand Name Small */}
            <h2 className="text-yellow-700 tracking-[0.6em] uppercase text-[10px] md:text-xs mb-4 font-bold">
              Scent Avenue Official
            </h2>

            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-neutral-400 text-xs md:text-sm uppercase tracking-[0.3em] mb-8"
            >
              Something Exquisite is being Bottled
            </motion.p>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-[130px] font-serif italic mb-6 tracking-tighter leading-none">
              Coming <span className="relative inline-block text-yellow-600">
                Soon
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-yellow-700"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </span>
            </h1>

            <p className="max-w-md mx-auto text-neutral-500 text-xs md:text-sm leading-relaxed tracking-widest uppercase opacity-80 mb-12">
              Experience the art of fine fragrance. <br /> 
              Launching our exclusive collection shortly.
            </p>
          </motion.div>

          {/* 4. Animated CTA Button */}
          <motion.div 
            className="relative inline-block group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://chat.whatsapp.com/EgGetSaOrkKJXysQ7o6zPo"
              className="relative z-20 px-12 py-5 bg-transparent border border-yellow-700/30 backdrop-blur-sm text-[10px] tracking-[0.5em] uppercase font-bold block transition-all group-hover:border-yellow-600 group-hover:bg-yellow-700 group-hover:text-black"
            >
              Join The Avenue C ommunity
            </a>
            {/* Rotating Border Effect */}
            <motion.div 
              className="absolute -inset-[3px] border-t border-b border-yellow-600 opacity-0 group-hover:opacity-100 rounded-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* 5. Social Media - Bottom Navigation */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-6"
        >
          <div className="flex gap-10 px-8 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.3, color: "#b45309" }}
                className="text-xl md:text-2xl text-neutral-400 transition-colors cursor-pointer"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 6. Vertical Side Decor */}
        <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden lg:block opacity-20">
          <p className="text-[9px] tracking-[1.2em] uppercase whitespace-nowrap">
            The Signature Experience
          </p>
        </div>

        <div className="absolute right-10 top-1/2 rotate-90 origin-right hidden lg:block">
          <div className="flex items-center gap-4">
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/30">
              Pakistan &nbsp; | &nbsp; 2026
            </p>
            <div className="h-[1px] w-16 bg-yellow-700/50 animate-pulse"></div>
          </div>
        </div>

      </div>
    );
  }