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
            {/* Dot Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #334155 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Floating Geometric Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top Right Circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-slate-100 to-slate-200/50 blur-3xl opacity-60"
                />

                {/* Bottom Left Circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-50 to-slate-100/50 blur-3xl opacity-50"
                />

                {/* Floating Small Elements */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-slate-300/40"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute top-1/3 right-[20%] w-4 h-4 rounded-sm bg-slate-200/50 rotate-45"
                />
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-1/3 left-[25%] w-2 h-2 rounded-full bg-slate-400/30"
                />
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                    className="absolute top-[45%] right-[12%] w-2 h-2 rounded-sm bg-slate-300/40 rotate-12"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
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

                {/* Stats Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
                >
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">500+</div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Magang Tersalurkan</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-slate-200" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">50+</div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Perusahaan Partner</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-slate-200" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">98%</div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Tingkat Kepuasan</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

