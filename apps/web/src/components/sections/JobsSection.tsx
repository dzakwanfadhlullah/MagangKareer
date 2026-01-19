"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { JobCard } from "@/components/ui/JobCard";
import { ArrowRight, Funnel } from "@phosphor-icons/react";
import { useState } from "react";

const filters = ["Semua", "Remote", "Jakarta", "Bandung", "Tangerang"];

const jobs = [
    { title: "UI/UX Designer", company: "GoTo Financial", location: "Jakarta", workMode: "WFO" },
    { title: "Data Analyst", company: "Telkom Indonesia", location: "Bandung", workMode: "Hybrid" },
    { title: "Software Engineer", company: "Bank Central Asia", location: "Tangerang", workMode: "WFO" },
    { title: "Product Manager", company: "Traveloka", location: "Jakarta", workMode: "Remote" },
    { title: "Marketing Intern", company: "Shopee", location: "Jakarta", workMode: "Hybrid" },
    { title: "Finance Intern", company: "Bank Mandiri", location: "Jakarta", workMode: "WFO" },
    { title: "Backend Dev", company: "Tokopedia", location: "Jakarta", workMode: "Remote" },
    { title: "AI Research", company: "Nodeflux", location: "Jakarta", workMode: "WFO" },
];

export function JobsSection() {
    const [activeFilter, setActiveFilter] = useState("Semua");

    const filteredJobs = activeFilter === "Semua"
        ? jobs
        : jobs.filter(job => job.location === activeFilter || job.workMode === activeFilter);

    return (
        <section className="relative z-10 py-32" id="lowongan">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-slate-900 mb-2"
                        >
                            Peluang Terkini
                        </motion.h2>
                        <p className="text-slate-500 text-sm">Temukan langkah awal karir impianmu di sini.</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar select-none">
                        <div className="flex bg-slate-100/50 p-1 rounded-xl items-center">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeFilter === filter
                                            ? "text-blue-600"
                                            : "text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {activeFilter === filter && (
                                        <motion.div
                                            layoutId="active-filter-bg"
                                            className="absolute inset-0 bg-white shadow-sm rounded-lg z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{filter}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={`${job.title}-${job.company}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <JobCard {...job} index={index % 3} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredJobs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center"
                    >
                        <p className="text-slate-400">Belum ada lowongan di kategori ini.</p>
                    </motion.div>
                )}

                <div className="mt-16 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                        Lihat Semua Lowongan
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
