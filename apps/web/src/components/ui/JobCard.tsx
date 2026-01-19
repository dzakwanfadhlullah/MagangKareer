import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Bank, Money } from "@phosphor-icons/react";

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    workMode: string;
    salaryRange?: string;
    duration?: string;
    index?: number;
}

const workModeStyles: Record<string, string> = {
    "Remote": "bg-green-50 text-green-600 border-green-100",
    "WFO": "bg-blue-50 text-blue-600 border-blue-100",
    "Hybrid": "bg-purple-50 text-purple-600 border-purple-100",
};

export function JobCard({
    title,
    company,
    location,
    workMode,
    salaryRange = "Kompetitif",
    duration = "3-6 Bulan",
    index = 0,
}: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 hover:border-blue-200"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${workModeStyles[workMode] || "bg-slate-50 text-slate-600 border-slate-100"}`}>
                                {workMode}
                            </span>
                            {salaryRange && (
                                <span className="flex items-center gap-1 text-[11px] font-medium text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100">
                                    <Money size={12} weight="bold" />
                                    {salaryRange}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                            {title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-slate-500 mt-1 font-medium">
                            <Bank size={14} weight="duotone" className="text-slate-400" />
                            {company}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin size={16} weight="duotone" />
                        {location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={16} weight="duotone" />
                        {duration}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-5 border-t border-slate-50">
                    <Link
                        href="#"
                        className="text-sm font-bold text-slate-900 inline-flex items-center gap-1.5 group/link"
                    >
                        Lamar Sekarang
                        <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-300">
                        <ArrowRight size={14} weight="bold" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
