"use client";

import { motion } from "framer-motion";
import { Compass, MagnifyingGlass, RocketLaunch, IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

interface Step {
    number: string;
    title: string;
    description: string;
    icon: ComponentType<IconProps>;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Eksplorasi",
        description: "Temukan peran yang resonan dengan minat dan jurusan Anda.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Seleksi",
        description: "Proses transparan untuk mencocokkan potensi dengan kebutuhan.",
        icon: MagnifyingGlass,
    },
    {
        number: "03",
        title: "Accelerate",
        description: "Mentorship nyata dan pengembangan skill profesional.",
        icon: RocketLaunch,
    },
];

export function ProcessSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative grid gap-20 md:gap-12 md:grid-cols-3 items-start">

                    {/* Desktop Natural Connector (SVG) */}
                    <div className="hidden md:block absolute top-[2.8rem] left-[10%] right-[10%] w-[80%] h-12 z-0 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 800 40" fill="none" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 20 Q 200 0, 400 20 T 800 20"
                                stroke="url(#line-gradient)"
                                strokeWidth="1.5"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                                    <stop offset="20%" stopColor="#cbd5e1" />
                                    <stop offset="80%" stopColor="#cbd5e1" />
                                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group z-10"
                        >
                            {/* Mobile Natural Connector (SVG) */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden absolute top-28 left-1/2 -translate-x-1/2 w-8 h-20 z-0 pointer-events-none">
                                    <svg width="100%" height="100%" viewBox="0 0 40 100" fill="none">
                                        <motion.path
                                            d="M 20 0 Q 0 50, 20 100"
                                            stroke="#cbd5e1"
                                            strokeWidth="1.5"
                                            strokeDasharray="4 4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 0.4 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            viewport={{ once: true }}
                                        />
                                    </svg>
                                </div>
                            )}

                            <div className="relative mb-6">
                                <span className="text-8xl font-serif italic text-slate-100/80 transition-all duration-700 group-hover:text-slate-200/90 group-hover:scale-105 inline-block select-none">
                                    {step.number}
                                </span>

                                {/* Icon with floating animation */}
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5
                                    }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-600 transition-colors duration-500"
                                >
                                    <step.icon size={32} weight="duotone" />
                                </motion.div>

                                {/* Animated indicator dot on the path */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-200 shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-white"
                                />
                            </div>

                            <h3 className="mb-3 text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-base text-slate-500 max-w-[260px] leading-relaxed font-light">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
