// app/page.js
'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import pic from '../../public/assets/perfume.png'
import Image from 'next/image';

export default function ScentAvenueUltimate() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const bottleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const bottleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);
  const bottleRotate = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#c5a15c] selection:text-black cursor-none relative"
    >
      <style jsx global>{`
        body { overflow: hidden; }
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
        .font-black { text-shadow: 0 0 20px rgba(197, 161, 92, 0.05); }
      `}</style>

      {/* --- CUSTOM CURSOR --- */}
      <motion.div 
        style={{ x: useSpring(useMotionValue(0)), y: useSpring(useMotionValue(0)) }}
        className="fixed w-4 h-4 bg-[#c5a15c] rounded-full pointer-events-none z-[100] mix-blend-difference"
      />

      {/* --- AMBIENT MIST --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-t from-[#c5a15c]/20 to-transparent blur-xl rounded-full"
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- TOP HUD --- */}
      <header className="fixed top-0 w-full z-50 p-10 flex justify-between items-start pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <h2 className="text-[10px] tracking-[0.8em] uppercase text-[#c5a15c] font-bold">Scent Avenue</h2>
          <p className="text-[8px] tracking-[0.4em] text-gray-500 uppercase mt-2 font-mono font-light">A way to your fragrance</p>
        </motion.div>
        <div className="text-[9px] tracking-[0.5em] uppercase text-gray-400 border-b border-gray-800 pb-2 pointer-events-auto cursor-pointer hover:text-white transition-colors">
          The Unveiling 2026
        </div>
      </header>

      {/* --- MAIN STAGE --- */}
      <main className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          style={{ x: useTransform(mouseX, [-0.5, 0.5], [50, -50]) }}
          className="absolute text-[22vw] font-serif font-black text-[#111] leading-none select-none italic pointer-events-none"
        >
          AVENUE
        </motion.div>

        {/* HERO PRODUCT IMAGE */}
        <motion.div 
          style={{ x: bottleX, y: bottleY, rotate: bottleRotate }}
          className="relative w-[70vw] h-[70vh] md:w-[35vw] md:h-[65vh] flex items-center justify-center p-8" // Padding added to prevent clipping
        >
          <div className="absolute inset-0 bg-[#c5a15c]/10 blur-[120px] rounded-full scale-75" />
          
          <div className="relative z-20 w-full h-full scale-[1.3] "> {/* Slight scale down for safety */}
            <Image 
              src={pic}
              alt="Scent Avenue"
              fill
              className="object-contain drop-shadow-[0_10px_60px_rgba(197,161,92,0.2)]"
              priority
              unoptimized 
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/5 bg-black/40 backdrop-blur-md rounded-[40px] p-12 text-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] tracking-[1em] text-[#c5a15c] uppercase mb-6">AI Synthetic Luxury</span>
            <div className="h-[1px] w-12 bg-gray-800 mb-6"></div>
            <p className="text-gray-400 text-[10px] tracking-widest leading-loose uppercase italic">
              Experience the convergence of algorithm and olfaction.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-16 w-full px-10 md:px-20 flex flex-col md:flex-row justify-between items-end">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a15c] animate-pulse" />
              <span className="text-[10px] tracking-widest text-gray-500 uppercase font-light">System Status: Distilling...</span>
            </div>
            <h3 className="text-xl md:text-2xl font-light tracking-wide text-gray-300 font-serif">A new dimension of scent <br/> is arriving.</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-10 md:mt-0 w-full md:w-80 pointer-events-auto cursor-auto"
          >
            <div className="relative border-b border-gray-800 py-3 group focus-within:border-[#c5a15c] transition-colors">
              <input 
                type="email" 
                placeholder="ENTER EMAIL FOR EARLY ACCESS" 
                className="bg-transparent border-none outline-none w-full text-[10px] tracking-[0.4em] uppercase placeholder:text-gray-700 focus:placeholder:text-gray-400"
              />
              <motion.button 
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="absolute right-0 text-[#c5a15c] text-[10px] tracking-widest font-bold uppercase transition-colors"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}