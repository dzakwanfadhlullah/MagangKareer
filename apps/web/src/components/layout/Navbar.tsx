"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 h-[56px] bg-white/70 backdrop-blur-md transition-all duration-300 border-b border-black/5"
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                    <Briefcase className="w-5 h-5 text-slate-800" strokeWidth={2.5} />
                    <span className="text-lg font-semibold tracking-tight text-slate-900">
                        MagangKareer
                    </span>
                </Link>

                {/* Navigation Links */}
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

                {/* Auth Buttons */}
                <div className="flex items-center gap-6">
                    <Link
                        href="#"
                        className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
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
            </div>
        </motion.nav>
    );
}
