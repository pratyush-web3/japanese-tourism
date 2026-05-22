"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Compass,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  kana: string;
  tag: string;
  description: string;
  imageUrl: string;
  duration: string;
  rating: string;
}

const destinations: Destination[] = [
  {
    id: "kyoto",

    name: "京都",

    kana: "きょうと",

    tag: "静寂と伝統の古都",

    description:
      "千年以上の歴史を持つ古都・京都。朱色の鳥居、静かな寺院、幻想的な竹林、石畳の街並みが、日本文化の美しさを感じさせます。",

    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1800&auto=format&fit=crop",

    duration: "4泊5日",

    rating: "4.9",
  },

  {
    id: "fuji",

    name: "富士山",

    kana: "ふじさん",

    tag: "日本を象徴する絶景",

    description:
      "世界的に有名な霊峰・富士山。湖畔に映る壮大な景色、静かな温泉旅館、四季折々の自然美が旅人を魅了します。",

    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop",

    duration: "3泊4日",

    rating: "4.9",
  },

  {
    id: "tokyo",

    name: "東京",

    kana: "とうきょう",

    tag: "未来と伝統が交差する都市",

    description:
      "ネオンが輝く近未来都市と、日本古来の文化が融合する東京。渋谷、新宿、浅草など、多彩な魅力を持つ世界最大級の都市です。",

    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1800&auto=format&fit=crop",

    duration: "5泊6日",

    rating: "4.8",
  },
];

export const FeaturedDestinations: React.FC = () => {
  return (
    <section
      id="destinations"
      className="relative bg-jp-cream py-24 md:py-32 jp-grid-pattern overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-jp-sakura/10 blur-3xl" />

      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-jp-indigo/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-jp-red" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-jp-indigo md:text-xs">
                厳選デスティネーション
              </p>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-jp-charcoal md:text-6xl">
              五感を揺さぶる、
              <br />
              日本の極みへ
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 tracking-wide text-jp-charcoal/70 md:text-base">
              単なる旅行ではなく、
              日本文化の奥深さを体験する特別な旅。
              静寂、自然、伝統、そして洗練された美意識を巡ります。
            </p>
          </div>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 border-b border-jp-red/20 pb-1 text-xs font-semibold tracking-[0.25em] text-jp-red transition hover:text-jp-charcoal"
          >
            すべての旅を見る

            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={`/destinations/${dest.id}`}
                className="group relative block h-130 overflow-hidden rounded-4xl bg-jp-charcoal"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={dest.imageUrl}
                    alt={dest.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 bg-linear-to-t from-jp-red/20 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* Border */}
                <div className="absolute inset-6 rounded-3xl border border-white/10 transition duration-500 group-hover:border-white/20" />

                {/* Tag */}
                <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md">
                  <Compass className="h-3 w-3 text-jp-red" />

                  <span className="text-[10px] font-semibold tracking-wide text-jp-charcoal">
                    {dest.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-jp-sakura/80">
                    {dest.kana}
                  </p>

                  <h3 className="mb-4 flex items-center gap-2 font-display text-3xl font-bold text-white">
                    {dest.name}

                    <span className="h-1.5 w-1.5 rounded-full bg-jp-red" />
                  </h3>

                  <p className="mb-6 line-clamp-3 text-sm leading-7 text-white/70 transition-all duration-500 group-hover:line-clamp-none">
                    {dest.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-4 text-[11px] tracking-wide text-white/60">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {dest.duration}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        日本
                      </span>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition duration-300 group-hover:border-jp-red group-hover:bg-jp-red">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};