"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Eye, Sparkles, Heart } from "lucide-react";
import { Button } from "./ui/Button";

interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  accentColor: string;
  themeLabel: string;
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    id: "zen-tea",
    title: "茶の湯と禅の精神",
    subtitle: "一期一会の茶会と、静寂なる石庭",
    description:
      "数百年変わらぬ静寂が息づく茶室で、茶道家元による極上の点前を。住職の講和を聞きながら巡る、通常非公開の名刹におけるプライベートな禅庭鑑賞など、心身を研ぎ澄ます特別な時間をお届けします。",
    features: [
      "家元によるプライベート茶会",
      "非公開寺院へのVIP貸切拝観",
      "住職との禅語・庭園談義",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000", // Warm light classic garden & tatami
    accentColor: "border-jp-indigo bg-jp-indigo/5 text-jp-indigo",
    themeLabel: "伝統・禅宗",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: "ryokan",
    title: "格式ある名旅館の隠れ家",
    subtitle: "木漏れ日の露天風呂と、極みの五感懐石",
    description:
      "歴史ある数寄屋造りの名旅館で、源泉掛け流しの湯に身を委ねる。料理長が全国から自ら集めた最上級の四季折々の食材を、極限の美意識で表現した芸術的な懐石料理として、お部屋で優雅にご堪能ください。",
    features: [
      "客室専用・源泉掛け流し露天風呂",
      "お部屋で楽しむ極上の一品懐石",
      "伝統工芸品が散りばめられた客室",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1000", // Historic red bridges & traditional hotel structures
    accentColor: "border-jp-red bg-jp-red/5 text-jp-red",
    themeLabel: "温泉・美食",
    icon: <Heart className="w-4 h-4" />,
  },
  {
    id: "bamboo-meditation",
    title: "竹林の息吹と森の瞑想",
    subtitle: "風に揺れる竹の薫りと、五感の解放",
    description:
      "朝霧の立ち込める清らかで神秘的な竹林を、専属ガイドとともに巡るプライベートウォーク。風が奏でる自然の囁きに耳を傾け、深い呼吸で森林のエネルギーを取り入れる、贅沢なマインドフルネスを体感いただけます。",
    features: [
      "早朝の静寂なるプライベート竹林散策",
      "呼吸法とマインドフルネス瞑想",
      "特製ウェルネス煎茶セレモニー",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000", // High contrast mountain/shrine/bamboo vibe
    accentColor: "border-jp-bamboo bg-jp-bamboo/5 text-jp-bamboo",
    themeLabel: "ウェルネス・瞑想",
    icon: <Eye className="w-4 h-4" />,
  },
];

export const TravelExperience: React.FC = () => {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-jp-cream relative overflow-hidden">
      {/* Decorative vertical background typography */}
      <div className="absolute right-0 top-10 font-display text-[15vw] font-bold text-jp-charcoal/3 select-none pointer-events-none tracking-widest leading-none vertical-text">
        静寂と伝統
      </div>
      
      <div className="absolute left-0 bottom-10 font-display text-[15vw] font-bold text-jp-charcoal/3 select-none pointer-events-none tracking-widest leading-none vertical-text">
        一期一会
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-jp-red" />
            <span className="text-[10px] md:text-xs font-display tracking-[0.3em] font-semibold text-jp-indigo uppercase">
              日本でしかできない体験
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider text-jp-charcoal leading-tight mb-6">
            心に残る、特別なひととき
          </h2>
          <div className="w-12 h-0.5 bg-jp-red mx-auto mb-6" />
          <p className="text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-widest">
            よく知られた観光地とは一味違う、職人や寺社、自然と直接つながる体験を集めました。
            大切なのは、あなたがその場で何を感じるかです。
          </p>
        </div>

        {/* Alternating Experience Rows */}
        <div className="flex flex-col gap-24 md:gap-36">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
              >
                {/* Image Section (Alternates on Large Screens) */}
                <motion.div
                  className={`w-full lg:w-1/2 relative aspect-4/3 rounded-3xl overflow-hidden shadow-md group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${exp.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-jp-charcoal/50 to-transparent" />
                  
                  {/* Subtle stamp detail on image */}
                  <div className="absolute bottom-6 left-6 bg-jp-cream/10 backdrop-blur-md border border-jp-cream/15 text-jp-cream px-4 py-2 rounded-xl text-[10px] font-display tracking-widest uppercase">
                    {exp.themeLabel}
                  </div>
                </motion.div>

                {/* Text Content Section */}
                <motion.div
                  className={`w-full lg:w-1/2 flex flex-col items-start ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Category Accent */}
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-display tracking-widest uppercase font-semibold mb-6 ${exp.accentColor}`}
                  >
                    {exp.icon}
                    {exp.themeLabel}
                  </div>

                  {/* Experience Headline */}
                  <span className="text-[11px] font-display font-medium tracking-[0.2em] text-jp-red mb-2 uppercase">
                    {exp.subtitle}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-wider text-jp-charcoal leading-snug mb-6">
                    {exp.title}
                  </h3>

                  {/* Detailed paragraph */}
                  <p className="text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-widest mb-8">
                    {exp.description}
                  </p>

                  {/* Bullet list of features */}
                  <ul className="flex flex-col gap-4 mb-10 w-full">
                    {exp.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs font-sans text-jp-charcoal/80 tracking-wider"
                      >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-jp-red/10 text-jp-red shrink-0 text-[10px] font-semibold mt-0.5">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-4">
                    <Button variant="primary" size="md" href="#destinations" icon={<Calendar className="w-4 h-4" />}>
                      予約枠を確認する
                    </Button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
