"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;

        gsap.to(bgRef.current, {
          y: scrolled * 0.2,
          duration: 0.3,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/80" />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-jp-red" />

              <p className="text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm">
                日本の伝統美
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl xl:text-8xl"
            >
              日本の静けさと
              <br />
              美しさを巡る旅
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg"
            >
              京都の石畳を歩き、静かな寺院で風を感じる。
              春の桜、秋の紅葉、冬の雪景色──四季が織りなす表情を
              ゆっくり味わいながら、あなたの時間を見つけてください。
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <button className="rounded-full bg-jp-red px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-jp-red/90">
                旅を始める
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:bg-white/10">
                体験を探す
              </button>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};