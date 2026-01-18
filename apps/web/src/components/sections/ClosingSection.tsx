"use client";

import { motion } from "framer-motion";

export function ClosingSection() {
    return (
        <section className="relative z-10 py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl font-medium text-slate-700 leading-normal"
                >
                    MagangKareer dirancang untuk membuat langkah awal karier lebih jelas
                    dan bertanggung jawab.
                </motion.p>
            </div>
        </section>
    );
}
