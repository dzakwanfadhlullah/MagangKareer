"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Animated text component that splits into characters
function AnimatedText({
    text,
    className,
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    return (
        <span className={className} style={{ display: "inline-block" }}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring" as const,
                        damping: 12,
                        stiffness: 200,
                        delay: delay + index * 0.03,
                    }}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}

export function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-20 transition-white-to-mist overflow-hidden">
            <div className="mx-auto max-w-4xl text-center">
                {/* Badge */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                    Batch 12 Open
                </motion.p>

                {/* Headline */}
                <h1 className="mb-8 text-slate-900">
                    {/* Line 1 */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="block text-3xl md:text-4xl font-medium tracking-tight text-slate-600 mb-2"
                    >
                        Cara Paling Tepat
                    </motion.span>

                    {/* Line 2 - Main headline */}
                    <span className="block text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="inline-block"
                        >
                            Memulai Karier{" "}
                        </motion.span>

                        {/* Animated "Profesional." - per character */}
                        <span className="font-serif italic font-normal text-slate-800">
                            <AnimatedText text="Profesional." delay={0.6} />
                        </span>
                    </span>
                </h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-slate-500 font-light"
                >
                    Menghubungkan talenta muda dengan standar industri global. Akses
                    program magang di BUMN dan perusahaan teknologi tanpa bias.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8"
                >
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
                </motion.div>
            </div>
        </section>
    );
}

