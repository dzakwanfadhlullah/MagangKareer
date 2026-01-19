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

// Single logo component for reusability
function LogoItem({ logo }: { logo: typeof logos[0] }) {
    return (
        <div className="group relative flex items-center justify-center px-8 md:px-12 flex-shrink-0">
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
        </div>
    );
}

export function TrustLogosSection() {
    return (
        <section className="relative z-10 pt-16 pb-24 overflow-hidden">
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
            </div>

            {/* Marquee Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full"
            >
                {/* Gradient fade effects on edges */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

                {/* Marquee Track - pauses on hover */}
                <div className="group flex overflow-hidden py-4">
                    <div
                        className="flex animate-marquee group-hover:[animation-play-state:paused]"
                        style={{
                            animationDuration: '30s',
                        }}
                    >
                        {/* First set of logos */}
                        {logos.map((logo) => (
                            <LogoItem key={`first-${logo.name}`} logo={logo} />
                        ))}
                        {/* Duplicate logos for seamless infinite scroll */}
                        {logos.map((logo) => (
                            <LogoItem key={`second-${logo.name}`} logo={logo} />
                        ))}
                        {/* Third set to ensure no gaps */}
                        {logos.map((logo) => (
                            <LogoItem key={`third-${logo.name}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
