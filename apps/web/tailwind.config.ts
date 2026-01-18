import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0F172A",
                "primary-soft": "#334155",
                accent: "#3B82F6",
                // 5 Neutral Tones System (PromptGuide §3.1)
                "tone-1-white": "#FFFFFF",
                "tone-2-warm": "#FAF9F7",
                "tone-3-cool": "#F8FAFC",
                "tone-4-mist": "#F1F5F9",
                "tone-5-depth": "#FAFAF9",
                "text-main": "#0F172A",
                "text-muted": "#64748B",
                "border-light": "#E2E8F0",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
                serif: ["var(--font-playfair)", "Playfair Display", "serif"],
            },
            boxShadow: {
                subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                soft: "0 10px 40px -10px rgba(0,0,0,0.05)",
            },
        },
    },
    plugins: [],
};

export default config;
