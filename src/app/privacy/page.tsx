"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export default function PrivacyPolicy() {
  return (
    <main className="bg-jp-cream pt-32 pb-24 relative jp-grid-pattern">
        {/* Decorative blur elements */}
        <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-jp-sakura/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-jp-indigo/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-widest text-jp-indigo hover:text-jp-red transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              ホームに戻る
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-b border-jp-charcoal/10 pb-8 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-jp-indigo bg-jp-indigo/5 text-jp-indigo text-xs font-display tracking-widest uppercase font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              セキュリティ & 信頼
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-wider text-jp-charcoal leading-tight">
              プライバシーポリシー
            </h1>
            <p className="text-xs font-sans text-jp-charcoal/40 tracking-wider mt-4">
              最終更新日: 2026年5月22日
            </p>
          </motion.div>

          {/* Body Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 text-sm font-sans font-light leading-relaxed text-jp-charcoal/80 tracking-widest"
          >
            <p>
              {SITE_CONFIG.name}（以下、「当社」といいます）は、お客様の個人情報の重要性を深く認識し、その保護に取り組むことが社会的責務であると考えております。当社が提供するプレミアム旅行プランおよび各種サービス（以下、「本サービス」といいます）におけるお客様の個人情報の取り扱いについて、以下の通り方針を定めます。
            </p>

            {/* Sec 1 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                1. 個人情報の取得について
              </h2>
              <p>
                当社は、本サービスをご利用いただくにあたり、適法かつ公正な手段によってお客様の個人情報（氏名、生年月日、住所、電話番号、メールアドレス、パスポート情報、お支払い情報、カスタマイズ旅行に関するご要望等）を取得いたします。
              </p>
            </div>

            {/* Sec 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                2. 個人情報の利用目的
              </h2>
              <p>取得した個人情報は、以下の目的のためにのみ利用いたします。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>お客様専用のオーダーメイド旅行プランの作成、手配、および管理のため</li>
                <li>宿泊施設、交通機関、ガイド、文化体験等の手配状況のご連絡のため</li>
                <li>お問い合わせ、ご相談に対する迅速なカスタマーサポート対応のため</li>
                <li>メールマガジンによる特別な観光プランや秘密のデスティネーション情報の配信（ご同意いただいた場合のみ）のため</li>
                <li>サービスの品質向上および安全確保に向けた分析調査のため</li>
              </ul>
            </div>

            {/* Sec 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                3. 個人情報の第三者提供について
              </h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意を得ることなく個人情報を第三者に提供いたしません。ただし、旅行の手配（旅館の予約、専属ガイドの確保、交通機関の発券等）に必要な範囲において、当該提携先へ情報を提供する場合があります。この場合、提供先における厳格な安全管理を義務付け、適切な監督を行います。
              </p>
            </div>

            {/* Sec 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                4. 安全管理措置
              </h2>
              <p>
                当社は、取り扱う個人情報の漏洩、滅失、または毀損の防止その他の個人情報の安全管理のために、セキュリティ対策の強化、社内規正の整備、および従業員に対する徹底した教育を実施し、必要かつ適切な管理措置を講じます。
              </p>
            </div>

            {/* Sec 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                5. お問い合わせ窓口
              </h2>
              <p>
                当社の個人情報の取り扱いに関するご質問、開示・訂正・削除のご請求、その他苦情のお申し出につきましては、下記のコンシェルジュデスクまでご連絡ください。
              </p>
              
              <div className="glass-card rounded-2xl p-6 md:p-8 mt-6 border-jp-indigo/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-display tracking-widest text-jp-indigo uppercase font-semibold">
                    {SITE_CONFIG.name} コンシェルジュデスク
                  </div>
                  <div className="text-sm font-semibold text-jp-charcoal mt-1">
                    {SITE_CONFIG.address}
                  </div>
                </div>
                
                <Link
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-jp-indigo text-jp-cream rounded-full px-6 py-3 text-xs font-display font-bold tracking-widest hover:bg-jp-indigo/90 active:scale-95 transition-all duration-300 shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {SITE_CONFIG.email}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
    </main>
  );
}
