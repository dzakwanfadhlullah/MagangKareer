"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    workMode: string;
    index?: number;
}

export function JobCard({
    title,
    company,
    location,
    workMode,
    index = 0,
}: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-soft border border-transparent hover:border-slate-100"
        >
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-100">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{company}</p>
                </div>
            </div>
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-xs font-medium text-slate-400">
                    {location} • {workMode}
                </span>
                <Link
                    href="#"
                    className="text-xs font-semibold text-slate-900 opacity-0 transform translate-x-[-10px] transition-all duration-100 group-hover:opacity-100 group-hover:translate-x-0 inline-flex items-center gap-1"
                >
                    Detail
                    <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </motion.div>
    );
}
