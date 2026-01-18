"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-20 transition-white-to-mist">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-4xl text-center"
            >
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Batch 12 Open
                </p>
                <h1 className="mb-8 text-slate-900">
                    <span className="block text-3xl md:text-4xl font-medium tracking-tight text-slate-600 mb-2">
                        Cara Paling Tepat
                    </span>
                    <span className="block text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        Memulai Karier{" "}
                        <span className="font-serif italic font-normal text-slate-800 ml-2">
                            Profesional.
                        </span>
                    </span>
                </h1>
                <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-slate-500 font-light">
                    Menghubungkan talenta muda dengan standar industri global. Akses
                    program magang di BUMN dan perusahaan teknologi tanpa bias.
                </p>
                <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
                    <Link
                        href="#lowongan"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-[15px] font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200"
                    >
                        Cari Magang
                    </Link>
                    <Link
                        href="#learn-more"
                        className="group inline-flex items-center gap-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-900"
                    >
                        Pelajari Program
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
