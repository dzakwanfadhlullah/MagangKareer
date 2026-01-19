"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClosingSection() {
    // Animation variants for stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section className="relative z-10 py-24 md:py-32" id="cta">
            <motion.div
                className="mx-auto max-w-4xl px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Headline */}
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
                >
                    Siap Memulai{" "}
                    <span className="font-serif italic font-normal text-slate-800">
                        Perjalanan Kariermu?
                    </span>
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Bergabung dengan ribuan mahasiswa yang sudah menemukan magang impian mereka.
                    Gratis, terkurasi, dan dirancang khusus untuk kesuksesan kariermu.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    {/* Primary CTA */}
                    <Link
                        href="#lowongan"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-[15px] font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200"
                    >
                        Mulai Sekarang
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="#filosofi"
                        className="group inline-flex items-center gap-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-900"
                    >
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-slate-400"
                >
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        100% Gratis
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        Tanpa Kartu Kredit
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        Daftar 2 Menit
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
