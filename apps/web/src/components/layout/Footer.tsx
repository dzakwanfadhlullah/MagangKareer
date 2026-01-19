"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    InstagramLogo,
    TwitterLogo,
    LinkedinLogo,
    Globe,
    ArrowUp,
    AppStoreLogo,
    GooglePlayLogo
} from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const footerLinks = {
    perusahaan: [
        { label: "Tentang Kami", href: "#tentang" },
        { label: "Karier", href: "#" },
        { label: "Partner Kami", href: "#partner" },
        { label: "Blog & Berita", href: "#" },
    ],
    mahasiswa: [
        { label: "Cari Lowongan", href: "#lowongan" },
        { label: "Life at MagangKareer", href: "#" },
        { label: "Panduan Magang", href: "#" },
        { label: "Kalkulator Gaji", href: "#" },
    ],
    legal: [
        { label: "Syarat & Ketentuan", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Kebijakan Cookie", href: "#" },
        { label: "Pusat Bantuan", href: "#faq" },
    ],
};

export function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-10 pb-12 pt-16 bg-transparent border-t border-slate-200/50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12 mb-12">
                    {/* Brand & App Badges */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className="mb-4">
                            <Image
                                src="/logo.png?v=3"
                                alt="MagangKareer"
                                width={140}
                                height={28}
                                className="h-7 w-auto object-contain"
                                unoptimized
                            />
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6 font-light">
                            Platform magang profesional #1 di Indonesia. Membantu talenta muda
                            membangun karier impian.
                        </p>

                        {/* App Store Badges - Scaled Down */}
                        <div className="flex flex-wrap gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white shadow-md transition-all"
                            >
                                <AppStoreLogo size={18} weight="fill" />
                                <div className="text-left leading-none">
                                    <div className="text-[8px] opacity-70 uppercase tracking-tighter">Download on</div>
                                    <div className="text-xs font-semibold">App Store</div>
                                </div>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white shadow-md transition-all"
                            >
                                <GooglePlayLogo size={18} weight="fill" />
                                <div className="text-left leading-none">
                                    <div className="text-[8px] opacity-70 uppercase tracking-tighter">GET IT ON</div>
                                    <div className="text-xs font-semibold">Google Play</div>
                                </div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
                            Perusahaan
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mahasiswa */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
                            Mahasiswa
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.mahasiswa.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
                            Legal & Support
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200/50 gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className="text-[11px] text-slate-400">
                            © 2024 MagangKareer. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100/50 text-slate-500 text-[10px] border border-slate-200/50">
                            <Globe size={12} />
                            <span>Bahasa Indonesia</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: InstagramLogo, label: "Instagram" },
                                { icon: TwitterLogo, label: "Twitter" },
                                { icon: LinkedinLogo, label: "LinkedIn" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href="#"
                                    className="text-slate-400 hover:text-slate-900 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} weight="bold" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 10 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-colors group"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} weight="bold" className="group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
