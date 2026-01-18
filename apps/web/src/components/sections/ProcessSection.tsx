"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Eksplorasi",
        description: "Temukan peran yang resonan dengan minat dan jurusan Anda.",
    },
    {
        number: "02",
        title: "Seleksi",
        description: "Proses transparan untuk mencocokkan potensi dengan kebutuhan.",
    },
    {
        number: "03",
        title: "Acelerate",
        description: "Mentorship nyata dan pengembangan skill profesional.",
    },
];

export function ProcessSection() {
    return (
        <section className="relative z-10 py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative grid gap-12 md:grid-cols-3 items-start">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <span className="text-6xl font-serif italic text-slate-100 mb-4 transition-colors group-hover:text-slate-200">
                                {step.number}
                            </span>
                            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="text-sm text-slate-500 max-w-[240px] leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
