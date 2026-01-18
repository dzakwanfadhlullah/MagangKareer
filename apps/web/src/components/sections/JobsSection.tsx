"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { JobCard } from "@/components/ui/JobCard";
import { ArrowRight } from "lucide-react";

const jobs = [
    { title: "UI/UX Designer", company: "GoTo Financial", location: "Jakarta", workMode: "WFO" },
    { title: "Data Analyst", company: "Telkom Indonesia", location: "Bandung", workMode: "Hybrid" },
    { title: "Software Engineer", company: "Bank Central Asia", location: "Tangerang", workMode: "WFO" },
    { title: "Product Manager", company: "Traveloka", location: "Jakarta", workMode: "Remote" },
    { title: "Marketing Intern", company: "Shopee", location: "Jakarta", workMode: "Hybrid" },
    { title: "Finance Intern", company: "Bank Mandiri", location: "Jakarta", workMode: "WFO" },
];

export function JobsSection() {
    return (
        <section className="py-32 bg-tone-3-cool" id="lowongan">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-end justify-between border-b border-slate-200 pb-6"
                >
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        Peluang Terkini
                    </h2>
                    <Link
                        href="#"
                        className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                    >
                        Lihat Semua
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job, index) => (
                        <JobCard key={job.title + job.company} {...job} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
