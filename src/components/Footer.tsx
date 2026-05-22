"use client";

import React from "react";
import { Compass, Mail, Globe, Instagram, Facebook, ArrowUp } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-jp-charcoal text-jp-cream relative pt-24 pb-12 overflow-hidden border-t border-jp-cream/5">
      {/* Decorative background sun / circular elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-jp-red/5 blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-0 w-80 h-80 rounded-full bg-jp-indigo/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Newsletter & Brand section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-jp-cream/10">
          
          {/* Logo & Brand Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <span className="relative flex items-center justify-center w-12 h-12 rounded-full border border-jp-red/30 bg-jp-cream overflow-hidden">
                <span className="absolute w-8 h-8 rounded-full bg-jp-red" />
                <span className="relative z-10 font-display text-xs font-bold text-jp-cream">極</span>
              </span>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-widest text-jp-cream group-hover:text-jp-sakura transition-colors duration-300">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-jp-sakura/50 uppercase">
                  {SITE_CONFIG.englishName}
                </span>
              </div>
            </Link>
            
            <p className="text-sm font-sans font-light leading-relaxed text-jp-cream/60 tracking-widest max-w-sm mb-6">
              日本の本質に触れる、完全オーダーメイドのプライベートツアーです。
              歴史ある文化、静かな自然、心のこもったおもてなしで、あなただけの時間を作ります。
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-jp-cream/5 border border-jp-cream/10 flex items-center justify-center text-jp-cream hover:bg-jp-red hover:border-jp-red hover:text-jp-cream transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-jp-cream/5 border border-jp-cream/10 flex items-center justify-center text-jp-cream hover:bg-jp-red hover:border-jp-red hover:text-jp-cream transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href={SITE_CONFIG.socials.tripAdvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-jp-cream/5 border border-jp-cream/10 flex items-center justify-center text-jp-cream hover:bg-jp-red hover:border-jp-red hover:text-jp-cream transition-all duration-300"
                aria-label="TripAdvisor"
              >
                <Compass className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-lg font-display font-bold tracking-wider text-jp-cream mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-jp-red" />
              特別な旅の便りを受け取る
            </h3>
            <p className="text-xs font-sans font-light text-jp-cream/60 tracking-widest mb-6">
              隠れた名所や季節の見どころ、限定の体験プランなどを定期的にお届けします。
              知っていると旅がもっと面白くなる、ちょっと特別な情報です。
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                placeholder="メールアドレス"
                required
                className="grow bg-jp-cream/5 border border-jp-cream/10 rounded-full px-6 py-3.5 text-xs text-jp-cream placeholder-jp-cream/35 focus:outline-none focus:border-jp-red/50 tracking-widest transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-jp-red text-jp-cream rounded-full px-8 py-3.5 text-xs font-display font-bold tracking-widest hover:bg-jp-red/80 active:scale-95 shadow-md shadow-jp-red/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                購読する
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold tracking-[0.25em] text-jp-sakura uppercase border-l-2 border-jp-red pl-3">
              厳選目的地
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#destinations" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">京都 - 歴史と古都</Link></li>
              <li><Link href="/#destinations" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">富士・箱根 - 温泉</Link></li>
              <li><Link href="/#destinations" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">北海道 - 広大なる自然</Link></li>
              <li><Link href="/#destinations" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">金沢 - 伝統工芸と美</Link></li>
            </ul>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold tracking-[0.25em] text-jp-sakura uppercase border-l-2 border-jp-red pl-3">
              特別な体験
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#experiences" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">茶室・禅庭拝観</Link></li>
              <li><Link href="/#experiences" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">極上の客室露天風呂</Link></li>
              <li><Link href="/#experiences" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">竹林プライベート散策</Link></li>
              <li><Link href="/#experiences" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">極み懐石とお座敷文化</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold tracking-[0.25em] text-jp-sakura uppercase border-l-2 border-jp-red pl-3">
              会社案内
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">私たちの想い</Link></li>
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">パートナーシップ</Link></li>
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">ニュース・プレス</Link></li>
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">採用情報</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold tracking-[0.25em] text-jp-sakura uppercase border-l-2 border-jp-red pl-3">
              サポート
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">よくある質問 (FAQ)</Link></li>
              <li><Link href="#" className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">ご旅行までの流れ</Link></li>
              <li><Link href={SITE_CONFIG.links.privacy} className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">プライバシーポリシー</Link></li>
              <li><Link href={SITE_CONFIG.links.terms} className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">旅行業約款・利用規約</Link></li>
              <li><Link href={SITE_CONFIG.links.contact} className="text-xs font-sans font-light text-jp-cream/60 hover:text-jp-cream transition-colors duration-300 tracking-wider">お問い合わせ窓口</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-jp-cream/10 mt-4 text-[10px] font-sans text-jp-cream/40 tracking-wider">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Globe className="w-3.5 h-3.5" />
            <span className="text-jp-red">日本語</span>
            <span>|</span>
            <span className="hover:text-jp-cream cursor-pointer">English</span>
          </div>
          
          <div className="text-center md:text-right">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
            <span className="mx-2">|</span>
            <Link href={SITE_CONFIG.links.privacy} className="hover:text-jp-cream transition-colors">プライバシーポリシー</Link>
            <span className="mx-2">|</span>
            <Link href={SITE_CONFIG.links.terms} className="hover:text-jp-cream transition-colors">旅行業約款</Link>
          </div>

          {/* Floating Scroll back to top */}
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-full bg-jp-cream/5 border border-jp-cream/10 flex items-center justify-center text-jp-cream hover:bg-jp-red hover:border-jp-red hover:text-jp-cream transition-all duration-300 cursor-pointer mt-6 md:mt-0 shadow-md group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
