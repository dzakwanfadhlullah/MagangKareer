"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Amalia",
        role: "Software Engineer Intern",
        company: "Telkom Indonesia",
        quote: "MagangKareer membantu saya mendapatkan posisi di perusahaan impian. Prosesnya transparan dan mentornya sangat suportif.",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Amalia&background=6366f1&color=fff&size=128&font-size=0.4",
    },
    {
        id: 2,
        name: "Budi Santoso",
        role: "Data Analyst Intern",
        company: "GoTo",
        quote: "Platform yang sangat user-friendly! Dalam 2 minggu saya sudah dapat interview di 3 perusahaan tech unicorn.",
        avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0ea5e9&color=fff&size=128&font-size=0.4",
    },
    {
        id: 3,
        name: "Dina Pratiwi",
        role: "UI/UX Design Intern",
        company: "Traveloka",
        quote: "Kurasi lowongannya ketat, jadi saya yakin semua posisi yang ditampilkan memang berkualitas. Highly recommended!",
        avatar: "https://ui-avatars.com/api/?name=Dina+Pratiwi&background=10b981&color=fff&size=128&font-size=0.4",
    },
    {
        id: 4,
        name: "Rizki Fauzan",
        role: "Business Development Intern",
        company: "BRI",
        quote: "Sebagai mahasiswa non-tech, saya senang ada banyak pilihan role yang sesuai. Proses aplikasinya juga sangat mudah.",
        avatar: "https://ui-avatars.com/api/?name=Rizki+Fauzan&background=f59e0b&color=fff&size=128&font-size=0.4",
    },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds

export function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const goToPrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    }, [currentIndex]);

    // Auto-rotate
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(goToNext, AUTOPLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [isPaused, goToNext]);

    const currentTestimonial = testimonials[currentIndex];

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <section className="relative z-10 py-32" id="testimoni">
            <div
                className="mx-auto max-w-4xl px-6 text-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Quote Container */}
                <div className="relative min-h-[380px] md:min-h-[320px] flex items-center justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentTestimonial.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 },
                            }}
                            className="flex flex-col items-center justify-center px-4"
                        >
                            {/* Quote */}
                            <blockquote className="mb-8">
                                <span className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-slate-900 block max-w-3xl">
                                    &quot;{currentTestimonial.quote}&quot;
                                </span>
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-slate-100 shadow-lg">
                                    <Image
                                        alt={currentTestimonial.name}
                                        src={currentTestimonial.avatar}
                                        width={56}
                                        height={56}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                                        {currentTestimonial.name}
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        {currentTestimonial.role} • {currentTestimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot Navigation */}
                <div className="flex items-center justify-center gap-2 mt-14">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className="group relative p-1"
                        >
                            <motion.div
                                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${index === currentIndex
                                    ? "bg-slate-900"
                                    : "bg-slate-300 group-hover:bg-slate-400"
                                    }`}
                                animate={{
                                    scale: index === currentIndex ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            {/* Progress indicator for current slide */}
                            {index === currentIndex && !isPaused && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-slate-900"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.8, opacity: 0 }}
                                    transition={{
                                        duration: AUTOPLAY_INTERVAL / 1000,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Pause Indicator */}
                <AnimatePresence>
                    {isPaused && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 text-xs text-slate-400 font-medium"
                        >
                            Paused
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
