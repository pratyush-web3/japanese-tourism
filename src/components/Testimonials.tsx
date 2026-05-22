"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "ハリス・エミリー",
    role: "ラグジュアリートラベルライター",
    location: "イギリス・ロンドン",
    comment:
      "「京都のプライベートな禅寺での早朝瞑想と茶会は、私の人生観を大きく変える特別な体験でした。伝統と静けさを肌で感じる、まさに極上の旅。日本極旅のきめ細やかなサポートと完璧な手配に感謝いたします。」",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150", // Emily Harris style
  },
  {
    id: "test-2",
    name: "佐藤 明美",
    role: "アートディレクター",
    location: "日本・東京都",
    comment:
      "「霊峰富士を仰ぎ見る露天風呂の素晴らしさは言葉では表現できません。料理長が手掛ける極みの懐石料理は、一品一品が器も含めて五感で楽しむ芸術品。日本の本当の贅沢と深いおもてなしを再定義する旅でした。」",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150", // Akemi Sato style
  },
  {
    id: "test-3",
    name: "ジャン・デュポン",
    role: "美術史キュレーター",
    location: "フランス・パリ",
    comment:
      "「千利休から続く茶の湯の精神に直に触れ、日本の『わびさび』の核心に迫ることができました。極限のシンプルさの中にある無限の精神的豊かさ。私たちのために設えられた床の間や茶室のすべての細部に感動しました。」",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", // Jean Dupont style
  },
];

export const Testimonials: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-jp-cream relative jp-grid-pattern overflow-hidden">
      {/* Decorative background sun / circular elements */}
      <div className="absolute -right-20 top-1/3 w-80 h-80 rounded-full bg-jp-sakura/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-1/3 w-96 h-96 rounded-full bg-jp-bamboo/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-jp-red" />
            <span className="text-[10px] md:text-xs font-display tracking-[0.3em] font-semibold text-jp-indigo uppercase">
              旅人たちの声
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider text-jp-charcoal leading-tight mb-6">
            心に残る声
          </h2>
          <div className="w-12 h-0.5 bg-jp-red mx-auto mb-6" />
          <p className="text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-widest">
            実際に旅した方たちの、率直な感想を集めました。小さな瞬間が、思い出を作ります。
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 md:p-10 relative flex flex-col justify-between group hover:border-jp-red/30 hover:shadow-lg transition-all duration-500"
              whileHover={{ y: -6 }}
            >
              {/* Premium Top quote decoration */}
              <div className="absolute top-8 right-8 text-jp-red/10 group-hover:text-jp-red/25 transition-colors duration-500">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-jp-red text-jp-red"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm font-sans font-light leading-relaxed text-jp-charcoal/80 tracking-widest mb-8 relative z-10">
                {test.comment}
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-jp-charcoal/5">
                {/* Custom premium framed avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-jp-red/20 p-0.5 bg-jp-cream">
                  <Image
                    src={test.avatarUrl}
                    alt={test.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="flex flex-col">
                  {/* Name */}
                  <span className="font-display text-sm font-bold tracking-widest text-jp-charcoal">
                    {test.name}
                  </span>
                  {/* Role / Info */}
                  <span className="text-[10px] font-sans text-jp-indigo/70 font-semibold tracking-wider">
                    {test.role}
                  </span>
                  {/* Location */}
                  <span className="text-[9px] font-sans text-jp-charcoal/40 tracking-wider">
                    {test.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Calligraphic Stamp Motif (Visual only, highly stylized) */}
        <div className="flex justify-center mt-20">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-jp-red/40 flex items-center justify-center rotate-12 text-[10px] font-display font-bold text-jp-red tracking-widest leading-none select-none opacity-60">
            極旅
          </div>
        </div>
      </div>
    </section>
  );
};
