"use client";

import { useState, useEffect } from "react";

interface UseActiveSectionOptions {
    sectionIds: string[];
    offset?: number;
}

export function useActiveSection({ sectionIds, offset = 100 }: UseActiveSectionOptions) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                {
                    rootMargin: `-${offset}px 0px -50% 0px`,
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds, offset]);

    return activeSection;
}
