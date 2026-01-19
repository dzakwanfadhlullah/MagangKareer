"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Compass, MagnifyingGlass, RocketLaunch } from "@phosphor-icons/react";

const steps = [
    { id: "step-01", label: "Eksplorasi", icon: Compass },
    { id: "step-02", label: "Seleksi", icon: MagnifyingGlass },
    { id: "step-03", label: "Accelerate", icon: RocketLaunch },
];

export function JourneyIndicator() {
    const [activeStep, setActiveStep] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStep(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
                rootMargin: "-10% 0% -10% 0%",
            }
        );

        steps.forEach((step) => {
            const el = document.getElementById(step.id);
            if (el) observer.observe(el);
        });

        // Observer for the entire section to handle visibility
        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById("proses");
        if (section) sectionObserver.observe(section);

        return () => {
            observer.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    const scrollToStep = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-6"
                >
                    <div className="flex items-center gap-4">
                        {steps.map((step, index) => {
                            const isActive = activeStep === step.id;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => scrollToStep(step.id)}
                                    className="relative flex items-center gap-2 group"
                                >
                                    {/* Line connector between dots */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-[0.75rem] right-[-1.25rem] top-1/2 -translate-y-1/2 h-[1px] bg-white/10" />
                                    )}

                                    <div
                                        className={`w-3 h-3 rounded-full transition-all duration-500 z-10 ${isActive
                                                ? "bg-blue-400 ring-4 ring-blue-400/20 scale-125"
                                                : "bg-white/30 group-hover:bg-white/60"
                                            }`}
                                    />

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.span
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: "auto", opacity: 1 }}
                                                exit={{ width: 0, opacity: 0 }}
                                                className="overflow-hidden whitespace-nowrap text-xs font-bold text-white tracking-widest uppercase hidden md:block"
                                            >
                                                {step.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                    {/* Tooltip for mobile or small screens */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900/90 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden">
                                        {step.label}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
