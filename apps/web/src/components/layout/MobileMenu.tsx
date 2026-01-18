"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Tentang", href: "#tentang" },
    { label: "Lowongan", href: "#lowongan" },
    { label: "Cerita", href: "#testimoni" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <span className="text-sm font-semibold text-slate-900">Menu</span>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="px-6 py-6">
                            <ul className="space-y-1">
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="block py-3 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-100 bg-slate-50/50">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="space-y-3"
                            >
                                <Link
                                    href="#"
                                    onClick={onClose}
                                    className="block w-full py-3 text-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href="#"
                                    onClick={onClose}
                                    className="block w-full py-3 text-center text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
                                >
                                    Daftar Sekarang
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
