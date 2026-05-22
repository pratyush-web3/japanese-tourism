import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "【公式】日本観光・伝統と革新が織りなす極上の旅 | NIHON TRIP",
  description: "静けさと伝統が出会う場所、日本。京都の歴史ある街並み、豊かな自然、そしてモダンな体験。五感で楽しむ贅沢な旅へあなたを誘います。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-jp-cream text-jp-charcoal antialiased selection:bg-jp-red/20 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
