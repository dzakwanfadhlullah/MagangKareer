"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Compass, MagnifyingGlass, RocketLaunch, IconProps, CaretDown } from "@phosphor-icons/react";
import { ComponentType, useState } from "react";

interface Step {
    number: string;
    title: string;
    description: string;
    icon: ComponentType<IconProps>;
    detail: string;
    color: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Eksplorasi",
        description: "Temukan peran yang resonan dengan minat dan jurusan Anda.",
        detail: "Gunakan filter canggih kami untuk mencari magang berdasarkan skill, kurikulum kampus, atau minat industri spesifik Anda.",
        icon: Compass,
        color: "text-amber-500",
    },
    {
        number: "02",
        title: "Seleksi",
        description: "Proses transparan untuk mencocokkan potensi dengan kebutuhan.",
        detail: "Sistem pelacakan aplikasi kami memberikan update real-time. Anda akan tahu persis di tahap mana aplikasi Anda berada.",
        icon: MagnifyingGlass,
        color: "text-blue-500",
    },
    {
        number: "03",
        title: "Accelerate",
        description: "Mentorship nyata dan pengembangan skill profesional.",
        detail: "Dapatkan akses ke network alumni dan mentor industri yang akan membimbing Anda dari hari pertama magang hingga rekrutmen tetap.",
        icon: RocketLaunch,
        color: "text-purple-500",
    },
];

export function ProcessSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative z-10 py-32 overflow-hidden" id="proses">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative grid gap-20 md:gap-8 md:grid-cols-3 items-start">

                    {/* Desktop Natural Connector (SVG) */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] w-[80%] h-12 z-0 pointer-events-none opacity-40">
                        <svg width="100%" height="100%" viewBox="0 0 800 40" fill="none" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 20 Q 200 0, 400 20 T 800 20"
                                stroke="url(#line-gradient-process)"
                                strokeWidth="1.5"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                            <defs>
                                <linearGradient id="line-gradient-process" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                                    <stop offset="20%" stopColor="#cbd5e1" />
                                    <stop offset="80%" stopColor="#cbd5e1" />
                                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            {/* Mobile Natural Connector (SVG) */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden absolute top-[100%] left-1/2 -translate-x-1/2 w-8 h-20 z-0 pointer-events-none opacity-40">
                                    <svg width="100%" height="100%" viewBox="0 0 40 100" fill="none">
                                        <motion.path
                                            d="M 20 0 Q 0 50, 20 100"
                                            stroke="#cbd5e1"
                                            strokeWidth="1.5"
                                            strokeDasharray="4 4"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            viewport={{ once: true }}
                                        />
                                    </svg>
                                </div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`
                                    relative flex flex-col items-center text-center group z-10 
                                    p-8 rounded-3xl transition-all duration-500 cursor-pointer
                                    ${activeIndex === index ? 'bg-white shadow-2xl scale-[1.02] ring-1 ring-slate-100' : 'hover:bg-white/40 hover:shadow-xl hover:-translate-y-2'}
                                `}
                            >
                                <div className="relative mb-6">
                                    <span className={`text-8xl font-serif italic text-slate-100 transition-all duration-700 select-none inline-block ${activeIndex === index ? 'text-slate-200 scale-110' : 'group-hover:text-slate-200 group-hover:scale-105'}`}>
                                        {step.number}
                                    </span>

                                    {/* Icon with floating animation */}
                                    <motion.div
                                        animate={{
                                            y: activeIndex === index ? [0, -4, 0] : [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${activeIndex === index ? step.color : 'text-slate-400 group-hover:' + step.color}`}
                                    >
                                        <step.icon size={36} weight="duotone" />
                                    </motion.div>

                                    {/* Animated indicator dot on the path */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                                        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full transition-colors duration-500 ${activeIndex === index ? 'bg-blue-400 scale-125' : 'bg-slate-200'}`}
                                    />
                                </div>

                                <h3 className={`mb-3 text-2xl font-bold tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                                    {step.title}
                                </h3>
                                <p className="text-base text-slate-500 max-w-[260px] leading-relaxed font-light mb-4 text-center">
                                    {step.description}
                                </p>

                                <div className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-opacity duration-300 ${activeIndex === index ? 'opacity-0' : 'opacity-40 group-hover:opacity-100 text-blue-600'}`}>
                                    Tap for details <CaretDown size={12} weight="bold" />
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-4 border-t border-slate-50 text-sm text-slate-600 leading-relaxed text-left px-2">
                                                {step.detail}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
