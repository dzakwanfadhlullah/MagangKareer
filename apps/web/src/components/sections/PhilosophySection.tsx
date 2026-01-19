"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Student, ChartLineUp, CaretDown, IconProps } from "@phosphor-icons/react";
import { ComponentType, useState } from "react";

interface Feature {
    title: string;
    description: string;
    detailContent: string;
    icon: ComponentType<IconProps>;
    color: string;
}

const features: Feature[] = [
    {
        title: "Terkurasi Ketat",
        description:
            "Hanya menampilkan lowongan yang telah diverifikasi standar mentoring dan kejelasan job desc-nya.",
        detailContent:
            "Setiap lowongan melalui proses kurasi 3 tahap: verifikasi perusahaan, review job description oleh tim HR profesional, dan validasi program mentoring. Kami menolak lebih dari 60% submission yang tidak memenuhi standar kualitas kami.",
        icon: ShieldCheck,
        color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
    },
    {
        title: "Ekosistem Kampus",
        description:
            "Terintegrasi dengan sistem akademik untuk konversi SKS dan jadwal yang menghormati waktu kuliah.",
        detailContent:
            "Bekerjasama dengan 30+ universitas di Indonesia untuk memastikan program magang dapat dikonversi menjadi SKS. Sistem scheduling kami mempertimbangkan jadwal kuliah mahasiswa sehingga tidak mengganggu kegiatan akademik.",
        icon: Student,
        color: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    },
    {
        title: "Jalur Karier",
        description:
            "Bukan sekadar magang, melainkan pipeline talent untuk rekrutmen full-time pasca kelulusan.",
        detailContent:
            "85% mitra perusahaan kami memiliki program konversi dari magang ke karyawan tetap. Kami juga menyediakan mentoring karier, review CV, dan persiapan interview untuk memaksimalkan peluang Anda mendapatkan pekerjaan impian.",
        icon: ChartLineUp,
        color: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    },
];

export function PhilosophySection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="relative z-10 py-32" id="tentang">
            <div className="mx-auto max-w-2xl px-6 text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-4xl italic text-slate-800 mb-6 leading-tight"
                >
                    &quot;Kami percaya setiap langkah awal harus memiliki arah yang jelas.&quot;
                </motion.h2>
                <p className="text-lg leading-loose text-slate-500 font-light">
                    Dunia kerja seringkali membingungkan bagi pemula. MagangKareer hadir
                    sebagai kurator peluang, memastikan jembatan antara akademik dan
                    profesional dibangun di atas transparansi dan kualitas.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            {/* Icon with circular background */}
                            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${feature.color}`}>
                                <feature.icon size={24} weight="duotone" />
                            </div>

                            {/* Title with border accent */}
                            <div className="mb-3 text-slate-900 font-semibold text-lg border-l-2 border-slate-200 pl-4 transition-colors group-hover:border-slate-900">
                                {feature.title}
                            </div>

                            {/* Description */}
                            <p className="text-slate-500 leading-relaxed pl-[18px] mb-3">
                                {feature.description}
                            </p>

                            {/* Expand/Collapse Button */}
                            <button
                                onClick={() => toggleExpand(index)}
                                className="flex items-center gap-1.5 pl-[18px] text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <span>{expandedIndex === index ? "Tutup" : "Pelajari Lebih Lanjut"}</span>
                                <motion.div
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <CaretDown size={14} weight="bold" />
                                </motion.div>
                            </button>

                            {/* Expandable Detail Content */}
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-4 pl-[18px] pr-2 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300">
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {feature.detailContent}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
