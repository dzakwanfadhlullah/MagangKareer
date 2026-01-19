"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Logo data with file paths
const logos = [
    { name: "Telkom", src: "/logos/TelkomFIX.png", width: 150, height: 60 },
    { name: "GoTo", src: "/logos/goto.png", width: 130, height: 60 },
    { name: "Pertamina", src: "/logos/PertaminaFIX.png", width: 180, height: 60 },
    { name: "Traveloka", src: "/logos/traveloka.png", width: 170, height: 60 },
    { name: "BRI", src: "/logos/bri.svg", width: 120, height: 60 },
];

// Animation variants for stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const, // easeOut cubic-bezier
        },
    },
};

export function TrustLogosSection() {
    return (
        <section className="relative z-10 pt-16 pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-slate-400"
                >
                    Dipercaya Oleh Mitra Industri
                </motion.p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
                >
                    {logos.map((logo) => (
                        <motion.div
                            key={logo.name}
                            variants={itemVariants}
                            className="group relative flex items-center justify-center p-4"
                        >
                            {/* Logo container with hover effects */}
                            <div className="relative grayscale opacity-60 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                                <Image
                                    src={logo.src}
                                    alt={`Logo ${logo.name}`}
                                    width={logo.width}
                                    height={logo.height}
                                    loading="lazy"
                                    className="object-contain"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                />
                            </div>
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
