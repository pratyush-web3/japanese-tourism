"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { SITE_CONFIG } from "@/config/site";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "ホーム", href: "/" },
  { label: "おすすめの場所", href: "/#destinations" },
  { label: "体験を探す", href: "/#experiences" },
  { label: "旅の声", href: "/#testimonials" },
  { label: "旅ブログ", href: SITE_CONFIG.links.blog },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-jp-red/30 bg-jp-cream overflow-hidden">
              <span className="absolute w-6 h-6 rounded-full bg-jp-red animate-pulse-slow" />
              <span className="relative z-10 font-display text-[10px] font-bold text-jp-cream">極</span>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-widest text-jp-charcoal group-hover:text-jp-red transition-colors duration-300">
                日本極旅
              </span>
              <span className="text-[9px] font-medium tracking-[0.25em] text-jp-indigo uppercase">
                Curated journeys across Japan
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="relative text-xs font-display tracking-widest text-jp-charcoal/80 hover:text-jp-charcoal py-2 group block transition-colors duration-300"
                  >
                    {link.label}
                    {/* Hover Red Line */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-jp-red group-hover:w-1/2 transition-all duration-300 ease-out" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={SITE_CONFIG.links.contact}
                  className="relative text-xs font-display tracking-widest text-jp-charcoal/80 hover:text-jp-charcoal py-2 group block transition-colors duration-300 font-bold"
                >
                  お問い合わせ
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-jp-red group-hover:w-1/2 transition-all duration-300 ease-out" />
                </Link>
              </li>
            </ul>
            
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="px-4 py-2"
              href={SITE_CONFIG.links.contact}
            >
              旅を始める
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-jp-charcoal focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-jp-cream/98 backdrop-blur-xl flex flex-col justify-between pt-32 pb-12 px-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-10">
              <span className="text-[10px] font-display tracking-[0.3em] text-jp-indigo/50 uppercase border-b border-jp-charcoal/5 pb-2">
                メニュー
              </span>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={`${link.href}-${link.label}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-2xl font-bold tracking-wider text-jp-charcoal hover:text-jp-red transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={SITE_CONFIG.links.contact}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-2xl font-bold tracking-wider text-jp-indigo hover:text-jp-red transition-colors block"
                  >
                    お問い合わせ
                  </Link>
                </motion.li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-xs font-display font-semibold text-jp-indigo">
                <Globe className="w-4 h-4" />
                <span className="text-jp-red">日本語</span>
                <span className="opacity-30">|</span>
                <span className="hover:text-jp-charcoal cursor-pointer">English</span>
              </div>
              <div className="text-[10px] font-sans text-jp-charcoal/40 tracking-wider">
                © {new Date().getFullYear()} 日本極旅 — Discover authentic Japan.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
