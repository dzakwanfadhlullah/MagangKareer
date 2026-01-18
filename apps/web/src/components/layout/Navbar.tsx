"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 h-[56px] backdrop-blur-md transition-all duration-200 border-b ${scrolled
                        ? "bg-white/95 shadow-md border-slate-200/50"
                        : "bg-white/70 shadow-none border-black/5"
                    }`}
            >
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                    >
                        <Image
                            src="/logo.png?v=3"
                            alt="MagangKareer"
                            width={140}
                            height={28}
                            className="h-6 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            href="#tentang"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            Tentang
                        </Link>
                        <Link
                            href="#lowongan"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            Lowongan
                        </Link>
                        <Link
                            href="#testimoni"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            Cerita
                        </Link>
                    </div>

                    {/* Auth Buttons & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Auth */}
                        <div className="hidden items-center gap-6 md:flex">
                            <Link
                                href="#"
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                            >
                                Masuk
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-8 items-center justify-center rounded-full border border-slate-200 bg-transparent px-5 text-sm font-medium text-slate-700 transition-all hover:border-slate-800 hover:text-slate-900"
                            >
                                Daftar
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}

