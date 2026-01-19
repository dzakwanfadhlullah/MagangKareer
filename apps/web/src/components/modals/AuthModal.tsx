"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    GoogleLogo,
    LinkedinLogo,
    Eye,
    EyeSlash,
    User,
    Buildings,
    ArrowRight
} from "@phosphor-icons/react";
import { useState } from "react";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
    const [mode, setMode] = useState<"login" | "signup">(initialMode);
    const [signupRole, setSignupRole] = useState<"student" | "partner">("student");
    const [showPassword, setShowPassword] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
                    />

                    {/* Modal Card */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] bg-white/95 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-5 top-5 z-10 p-1.5 rounded-full bg-slate-100/30 text-slate-400 hover:bg-slate-100/80 hover:text-slate-900 transition-all duration-300"
                        >
                            <X size={18} weight="bold" />
                        </button>

                        <div className="p-8 md:p-9">
                            {/* Header */}
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                    {mode === "login" ? "Selamat Datang" : "Gabung Sekarang"}
                                </h2>
                                <p className="mt-1.5 text-sm text-slate-500 font-light px-4">
                                    {mode === "login"
                                        ? "Pintu gerbang karier impianmu."
                                        : "Mulai langkah pertamamu hari ini."}
                                </p>
                            </div>

                            {/* Mode Switcher - Premium Apple Pill Style */}
                            <div className="relative flex p-1 mb-8 rounded-full bg-slate-100/50 border border-slate-200/30">
                                <motion.div
                                    className="absolute inset-y-1 bg-white rounded-full shadow-sm"
                                    initial={false}
                                    animate={{
                                        x: mode === "login" ? 0 : "100%",
                                        width: "50%"
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                />
                                <button
                                    onClick={() => setMode("login")}
                                    className={`relative z-10 flex-1 py-1.5 text-xs font-bold transition-colors duration-300 ${mode === "login" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    MASUK
                                </button>
                                <button
                                    onClick={() => setMode("signup")}
                                    className={`relative z-10 flex-1 py-1.5 text-xs font-bold transition-colors duration-300 ${mode === "signup" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    DAFTAR
                                </button>
                            </div>

                            {/* Role Selector (Signup) - Compact & Elegant */}
                            <AnimatePresence mode="wait">
                                {mode === "signup" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="grid grid-cols-2 gap-3 mb-6"
                                    >
                                        <button
                                            onClick={() => setSignupRole("student")}
                                            className={`group relative flex flex-col items-center gap-2 p-3.5 rounded-2xl border transition-all duration-300 ${signupRole === "student"
                                                    ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]"
                                                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                                                }`}
                                        >
                                            <User size={20} weight={signupRole === "student" ? "fill" : "regular"} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Mahasiswa</span>
                                        </button>
                                        <button
                                            onClick={() => setSignupRole("partner")}
                                            className={`group relative flex flex-col items-center gap-2 p-3.5 rounded-2xl border transition-all duration-300 ${signupRole === "partner"
                                                    ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]"
                                                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                                                }`}
                                        >
                                            <Buildings size={20} weight={signupRole === "partner" ? "fill" : "regular"} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Partner</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Form Section */}
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</label>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="nama@email.com"
                                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-100 focus:border-slate-900/10 focus:ring-[6px] focus:ring-slate-900/[0.03] outline-none transition-all duration-300 placeholder:text-slate-300 text-sm font-medium shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                                        {mode === "login" && (
                                            <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Lupa?</button>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-100 focus:border-slate-900/10 focus:ring-[6px] focus:ring-slate-900/[0.03] outline-none transition-all duration-300 placeholder:text-slate-300 text-sm font-medium shadow-sm"
                                        />
                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-300 hover:text-slate-900 transition-colors"
                                        >
                                            {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full mt-8 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-900 text-white text-sm font-bold shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all group"
                            >
                                <span>{mode === "login" ? "Masuk" : "Buat Akun"}</span>
                                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            {/* Divider */}
                            <div className="relative my-7 text-center">
                                <div className="absolute inset-x-4 inset-y-1/2 border-t border-slate-100"></div>
                                <span className="relative px-3 text-[10px] font-bold text-slate-300 bg-white/0 uppercase tracking-widest">Atau</span>
                            </div>

                            {/* Social Logins - More Minimalist */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex items-center justify-center gap-2.5 py-2.5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 transition-all duration-300 group shadow-sm">
                                    <GoogleLogo size={18} weight="bold" className="text-slate-900" />
                                    <span className="text-xs font-bold text-slate-700">GOOGLE</span>
                                </button>
                                <button className="flex items-center justify-center gap-2.5 py-2.5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 transition-all duration-300 group shadow-sm">
                                    <LinkedinLogo size={18} weight="fill" className="text-[#0077b5]" />
                                    <span className="text-xs font-bold text-slate-700">LINKEDIN</span>
                                </button>
                            </div>
                        </div>

                        {/* Footer Link */}
                        <div className="p-5 bg-slate-50/50 text-center border-t border-slate-100/50">
                            <p className="text-[11px] text-slate-400 font-medium">
                                {mode === "login" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
                                <button
                                    onClick={() => setMode(mode === "login" ? "signup" : "login")}
                                    className="font-bold text-slate-900 hover:underline transition-all"
                                >
                                    {mode === "login" ? "Daftar Sekarang" : "Masuk"}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
