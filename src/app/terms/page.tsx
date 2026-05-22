"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export default function TermsAndConditions() {
  return (
    <main className="bg-jp-cream pt-32 pb-24 relative jp-grid-pattern">
        {/* Decorative blur elements */}
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-jp-sakura/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-jp-indigo/5 blur-3xl pointer-events-none" />

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
              <FileText className="w-4 h-4" />
              約款 & 法的規約
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-wider text-jp-charcoal leading-tight">
              旅行業約款・利用規約
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
              この利用規約および手配旅行約款（以下、「本規約」といいます）は、{SITE_CONFIG.name}（以下、「当社」といいます）が企画・手配・提供するプレミアム旅行プランおよび各種ガイドサービス（以下、「本サービス」といいます）の契約条件およびご利用規約を定めるものです。本サービスのご予約にあたっては、本規約に全面的にご同意いただいたものとみなします。
            </p>

            {/* Sec 1 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                1. 契約の成立と効力
              </h2>
              <p>
                当社が提示したオーダーメイド旅行プランに対し、お客様から正式なお申し込みおよび当社が規定する申込金（または旅行代金全額）の受領をもって、手配旅行契約が正式に成立するものとします。契約の成立後は、交通機関や宿泊施設の空き状況および料金変動により変更が生じる場合を除き、提示されたスケジュールおよび条件が確定されます。
              </p>
            </div>

            {/* Sec 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                2. 旅行代金のお支払い
              </h2>
              <p>
                旅行代金のお支払いは、銀行振込または当社が指定する主要クレジットカードにより行っていただきます。お支払いの期限は以下の通りです。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>申込金：</strong>お申し込み内容の確定から7日以内にお支払いいただきます。</li>
                <li><strong>残金：</strong>ご旅行出発日の30日前までに、全額お支払いいただきます。</li>
                <li>ご出発まで30日未満のお申し込みの場合、契約成立時に全額を一括してお支払いいただきます。</li>
              </ul>
            </div>

            {/* Sec 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                3. キャンセルポリシー (取消料)
              </h2>
              <p>
                お客様のご都合により旅行契約を解除される場合、ご旅行開始日の前日から起算して以下のキャンセル料（取消料）を申し受けます。なお、交通機関や一部の格式ある旅館につきましては、別途独自の厳しいキャンセル基準が適用される場合がございます。
              </p>
              
              {/* Cancellation Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-xs text-left border-collapse border border-jp-charcoal/10 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-jp-indigo/5 text-jp-indigo font-display font-bold tracking-wider border-b border-jp-charcoal/10">
                      <th className="px-6 py-4">お申し出の時期</th>
                      <th className="px-6 py-4">キャンセル料（旅行代金に対する比率）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-jp-charcoal/5">
                      <td className="px-6 py-4 font-semibold">旅行開始日の30日前から15日前まで</td>
                      <td className="px-6 py-4">旅行代金の 20%</td>
                    </tr>
                    <tr className="border-b border-jp-charcoal/5">
                      <td className="px-6 py-4 font-semibold">旅行開始日の14日前から8日前まで</td>
                      <td className="px-6 py-4">旅行代金の 30%</td>
                    </tr>
                    <tr className="border-b border-jp-charcoal/5">
                      <td className="px-6 py-4 font-semibold">旅行開始日の7日前から2日前まで</td>
                      <td className="px-6 py-4">旅行代金の 50%</td>
                    </tr>
                    <tr className="border-b border-jp-charcoal/5">
                      <td className="px-6 py-4 font-semibold">旅行開始日の前日</td>
                      <td className="px-6 py-4">旅行代金の 80%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">旅行開始日当日または無連絡不参加</td>
                      <td className="px-6 py-4 text-jp-red font-bold">旅行代金の 100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sec 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                4. 免責事項
              </h2>
              <p>
                当社はお客様に最高の安全と感動的な体験を提供するよう万全を期しますが、以下のような当社または手配代行者の関与できない事由によりお客様が被った損害につきましては、責任を負いかねます。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>天災地変、戦乱、暴動、気象条件、またはこれらによる旅行日程の変更・中止</li>
                <li>運送・宿泊機関等の事故、火災、またはこれらによるサービス提供の中止・遅延</li>
                <li>日本国内外における官公署の命令、感染症による渡航制限、またはこれらによる日程変更</li>
                <li>お客様ご自身の不注意、法令違反、または健康上の理由によるアクティビティ中の怪我・疾病</li>
              </ul>
            </div>

            {/* Sec 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-jp-charcoal tracking-wide border-l-3 border-jp-red pl-4">
                5. 規約の変更および管轄裁判所
              </h2>
              <p>
                当社は、法令の改正、社会情勢の変化、またはサービス内容の改定等に伴い、本規約をいつでも変更できるものとします。変更後の規約は、公式ウェブサイトに掲載された時点より効力を生じるものとします。本手配旅行契約に関して裁判上の紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所といたします。
              </p>
            </div>

            {/* Inquiries */}
            <div className="space-y-4 pt-6">
              <p>
                本規約や手配内容に関する詳細な確認、およびキャンセルや変更の申請につきましては、下記のコンシェルジュ窓口まで直接ご連絡ください。
              </p>
              
              <div className="glass-card rounded-2xl p-6 md:p-8 mt-6 border-jp-indigo/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-display tracking-widest text-jp-indigo uppercase font-semibold">
                    {SITE_CONFIG.name} 手配事務局
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
