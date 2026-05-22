"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Compass, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/config/site";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "kyoto",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium transmission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-jp-cream pt-32 pb-24 relative jp-grid-pattern">
        {/* Decorative blur elements */}
      <div className="absolute top-40 left-0 w-100 h-100 rounded-full bg-jp-sakura/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-jp-bamboo/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-jp-red" />
              <span className="text-[10px] md:text-xs font-display tracking-[0.3em] font-semibold text-jp-indigo uppercase">
                コンシェルジュデスク
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-wider text-jp-charcoal leading-tight mb-6">
              旅のご相談・お問い合わせ
            </h1>
            <div className="w-12 h-0.5 bg-jp-red mx-auto mb-6" />
            <p className="text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-widest">
              日本の真髄に触れる、あなただけの特別な旅路の始まり。専属コンシェルジュが、ご要望を丁寧に反映したオーダーメイドプランをご提案いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-bold tracking-wider text-jp-charcoal">
                  旅の理想を、お聞かせください
                </h2>
                <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-wider">
                  「伝統的な数寄屋造りの名旅館で静かな時間を過ごしたい」「特別な茶会をプライベートで体験したい」など、どんな些細なご希望もコンシェルジュへお伝えください。
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6 pt-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-jp-indigo/20 bg-jp-indigo/5 text-jp-indigo shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-display font-medium tracking-widest text-jp-indigo uppercase">
                      メールでのお問い合わせ
                    </span>
                    <Link
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="block text-sm font-semibold tracking-wider text-jp-charcoal hover:text-jp-red transition-colors duration-300 mt-1"
                    >
                      {SITE_CONFIG.email}
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-jp-red/20 bg-jp-red/5 text-jp-red shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-display font-medium tracking-widest text-jp-red uppercase">
                      お電話でのお問い合わせ
                    </span>
                    <Link
                      href={`tel:${SITE_CONFIG.phone.replace(/-/g, "")}`}
                      className="block text-sm font-semibold tracking-wider text-jp-charcoal hover:text-jp-red transition-colors duration-300 mt-1"
                    >
                      {SITE_CONFIG.phone}
                    </Link>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-jp-charcoal/20 bg-jp-charcoal/5 text-jp-charcoal shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-display font-medium tracking-widest text-jp-charcoal/60 uppercase">
                      手配事務局・オフィス
                    </span>
                    <p className="text-xs font-semibold leading-relaxed tracking-wider text-jp-charcoal mt-1">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-jp-bamboo/20 bg-jp-bamboo/5 text-jp-bamboo shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-display font-medium tracking-widest text-jp-bamboo uppercase">
                      営業時間
                    </span>
                    <p className="text-xs font-semibold tracking-wider text-jp-charcoal mt-1">
                      月曜日 - 金曜日 / 10:00 - 18:00 (日本標準時)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Inquiry Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-display font-bold tracking-wider text-jp-indigo"
                        >
                          お名前 (漢字) <span className="text-jp-red font-normal">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="例：佐藤 明美"
                          className="w-full bg-jp-cream/40 border border-jp-charcoal/10 rounded-xl px-5 py-3.5 text-xs text-jp-charcoal placeholder-jp-charcoal/30 focus:outline-none focus:border-jp-red focus:bg-jp-cream/80 tracking-widest transition-all duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-display font-bold tracking-wider text-jp-indigo"
                        >
                          メールアドレス <span className="text-jp-red font-normal">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="例：akemi.sato@domain.com"
                          className="w-full bg-jp-cream/40 border border-jp-charcoal/10 rounded-xl px-5 py-3.5 text-xs text-jp-charcoal placeholder-jp-charcoal/30 focus:outline-none focus:border-jp-red focus:bg-jp-cream/80 tracking-widest transition-all duration-300"
                        />
                      </div>

                      {/* Desired Destination selection */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="destination"
                          className="text-xs font-display font-bold tracking-wider text-jp-indigo"
                        >
                          ご希望の目的地
                        </label>
                        <div className="relative">
                          <select
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            className="w-full bg-jp-cream/40 border border-jp-charcoal/10 rounded-xl px-5 py-3.5 text-xs text-jp-charcoal focus:outline-none focus:border-jp-red focus:bg-jp-cream/80 tracking-widest transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="kyoto">京都 (歴史・文化の旅)</option>
                            <option value="fuji">富士・箱根 (温泉・絶景の旅)</option>
                            <option value="hokkaido">北海道 (広大な自然と美味)</option>
                            <option value="multi">複数都市の巡回 (完全オーダーメイド)</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-jp-indigo opacity-55 text-[10px]">
                            ▼
                          </span>
                        </div>
                      </div>

                      {/* Date input */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="date"
                          className="text-xs font-display font-bold tracking-wider text-jp-indigo"
                        >
                          ご旅行予定時期
                        </label>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          placeholder="例：2026年秋頃、10月中旬から1週間程度"
                          className="w-full bg-jp-cream/40 border border-jp-charcoal/10 rounded-xl px-5 py-3.5 text-xs text-jp-charcoal placeholder-jp-charcoal/30 focus:outline-none focus:border-jp-red focus:bg-jp-cream/80 tracking-widest transition-all duration-300"
                        />
                      </div>

                      {/* Message textarea */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="message"
                          className="text-xs font-display font-bold tracking-wider text-jp-indigo"
                        >
                          ご相談・ご要望内容
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder="ご希望のアクティビティ、旅館へのご要望、人数や旅のこだわりをお書きください。"
                          className="w-full bg-jp-cream/40 border border-jp-charcoal/10 rounded-xl px-5 py-3.5 text-xs text-jp-charcoal placeholder-jp-charcoal/30 focus:outline-none focus:border-jp-red focus:bg-jp-cream/80 tracking-widest transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* Submit button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full mt-4 bg-jp-indigo border-jp-indigo text-jp-cream hover:text-jp-indigo shadow-md shadow-jp-indigo/10 py-4.5"
                        disabled={isSubmitting}
                        icon={
                          isSubmitting ? (
                            <span className="w-4 h-4 border-2 border-jp-cream border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )
                        }
                      >
                        {isSubmitting ? "送信中..." : "ご相談を送信する"}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-jp-bamboo/10 flex items-center justify-center text-jp-bamboo animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-display font-bold text-jp-charcoal tracking-wide">
                          ご相談を承りました
                        </h3>
                        <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-jp-charcoal/70 tracking-widest max-w-md mx-auto">
                          お問い合わせいただき誠にありがとうございます。24時間以内に専属の旅コンシェルジュより、ご入力いただいたメールアドレス（{formData.email}）宛てにご連絡いたします。
                        </p>
                      </div>

                      <div className="pt-6">
                        <Button
                          variant="outline"
                          size="md"
                          onClick={() => {
                            setFormData({
                              name: "",
                              email: "",
                              destination: "kyoto",
                              date: "",
                              message: "",
                            });
                            setFormSubmitted(false);
                          }}
                        >
                          新たにお問い合わせする
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
    </main>
  );
}
