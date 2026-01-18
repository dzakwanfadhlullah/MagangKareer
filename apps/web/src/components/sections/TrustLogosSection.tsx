"use client";

import { motion } from "framer-motion";

const logos = ["TELKOM", "GOTO", "PERTAMINA", "TRAVELOKA", "BRI"];

export function TrustLogosSection() {
    return (
        <section className="relative z-10 pt-16 pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Dipercaya Oleh Mitra Industri
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale mix-blend-multiply transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                >
                    {logos.map((logo) => (
                        <div
                            key={logo}
                            className="text-xl font-bold text-slate-600 tracking-tight"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
