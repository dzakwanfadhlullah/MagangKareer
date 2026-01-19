"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group rounded-2xl transition-all duration-300 ${isOpen ? "bg-white/50 shadow-sm border border-slate-200/50" : "bg-transparent border-b border-slate-200"}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#0f172a" : "#94a3b8" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 ml-4"
                >
                    <CaretDown size={20} weight="bold" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-slate-500 leading-relaxed font-light">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    const faqs = [
        {
            question: "Apakah MagangKareer gratis?",
            answer: "Ya, MagangKareer 100% gratis untuk mahasiswa dan pencari magang. Kami berkomitmen untuk mendemokratisasi akses karier tanpa biaya pendaftaran apapun.",
        },
        {
            question: "Bagaimana proses seleksi lowongan?",
            answer: "Setiap lowongan melewati proses verifikasi ketat oleh tim kami untuk memastikan keaslian dan standar industri. User akan langsung terhubung dengan sistem rekrutmen perusahaan partner.",
        },
        {
            question: "Siapa saja yang bisa mendaftar?",
            answer: "Mahasiswa aktif dari semester berapapun, fresh graduates, hingga career switchers yang mencari pengalaman profesional awal di industri.",
        },
        {
            question: "Bagaimana cara menghubungi tim MagangKareer?",
            answer: "Anda dapat menghubungi kami melalui formulir kontak di website ini atau melalui social media resmi kami di Instagram dan LinkedIn @MagangKareer.",
        },
    ];

    return (
        <section className="relative z-10 py-24" id="faq">
            <div className="mx-auto max-w-3xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Pertanyaan Umum
                    </h2>
                    <p className="mt-4 text-slate-500 font-light">
                        Segala hal yang perlu Anda ketahui tentang MagangKareer.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
