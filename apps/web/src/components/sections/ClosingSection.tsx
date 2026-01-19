"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Clock, Users } from "@phosphor-icons/react";

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

    const trustBadges = [
        { icon: CheckCircle, label: "100% Gratis", color: "text-emerald-600" },
        { icon: ShieldCheck, label: "Data Terproteksi", color: "text-blue-600" },
        { icon: Clock, label: "Daftar 2 Menit", color: "text-amber-600" },
        { icon: Users, label: "500+ Alumni", color: "text-slate-600" },
    ];

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



                {/* Enhanced Trust Badges */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4"
                >
                    {trustBadges.map((badge, index) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/80 transition-all duration-200"
                        >
                            <badge.icon size={16} weight="fill" className={badge.color} />
                            <span className="text-sm font-medium text-slate-600">
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
