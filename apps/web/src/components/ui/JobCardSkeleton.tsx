"use client";

import { motion } from "framer-motion";

export function JobCardSkeleton() {
    return (
        <div className="relative flex flex-col rounded-2xl bg-slate-50/50 p-6 border border-slate-100 overflow-hidden">
            {/* Shimmer Effect */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
            />

            <div className="relative z-10">
                <div className="mb-4">
                    <div className="flex gap-2 mb-3">
                        <div className="w-16 h-5 bg-slate-200 rounded-full animate-pulse" />
                        <div className="w-20 h-5 bg-slate-200 rounded-full animate-pulse" />
                    </div>
                    <div className="w-3/4 h-7 bg-slate-200 rounded-lg animate-pulse mb-2" />
                    <div className="w-1/2 h-4 bg-slate-200 rounded-md animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="w-full h-4 bg-slate-200 rounded-md animate-pulse" />
                    <div className="w-full h-4 bg-slate-200 rounded-md animate-pulse" />
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex justify-between items-center">
                    <div className="w-24 h-5 bg-slate-200 rounded-md animate-pulse" />
                    <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}
