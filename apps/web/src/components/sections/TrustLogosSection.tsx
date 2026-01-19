"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Search, X, Sparkles, GraduationCap, Building2, Users, Briefcase, Info } from "lucide-react";

// ============================================
// ORIGINAL MARQUEE LOGOS (untuk tampilan luar)
// ============================================
const logos = [
    { name: "Telkom", src: "/logos/TelkomFIX.png", width: 150, height: 60 },
    { name: "GoTo", src: "/logos/goto.png", width: 130, height: 60 },
    { name: "Pertamina", src: "/logos/PertaminaFIX.png", width: 180, height: 60 },
    { name: "Traveloka", src: "/logos/traveloka.png", width: 170, height: 60 },
    { name: "BRI", src: "/logos/bri.svg", width: 120, height: 60 },
];

// Single logo component for marquee (ORIGINAL style with Tailwind)
function LogoItem({ logo }: { logo: typeof logos[0] }) {
    return (
        <div className="group relative flex items-center justify-center px-8 md:px-12 flex-shrink-0">
            <div className="relative grayscale opacity-60 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                <Image
                    src={logo.src}
                    alt={`Logo ${logo.name}`}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    className="object-contain"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </div>
        </div>
    );
}

// ============================================
// DATA PARTNER UNTUK MODAL (Enhanced)
// ============================================
type Category = "Semua" | "Teknologi" | "BUMN" | "Startup" | "E-commerce" | "Travel";
type Badge = "Sering Magang" | "Partner Kampus" | "Ramah Mahasiswa" | "Pernah Rekrut Ex-Intern";
type SpecialFilter = "ramah-magang" | "non-tech" | "fresh-graduate";

interface Partner {
    name: string;
    src: string;
    width: number;
    height: number;
    category: Exclude<Category, "Semua">;
    badges: Badge[];
    specialTags: SpecialFilter[];
    description: string;
}

const allPartners: Partner[] = [
    // TEKNOLOGI (5 partners)
    { name: "GoTo", src: "/logos/goto.png", width: 130, height: 60, category: "Teknologi", badges: ["Sering Magang", "Pernah Rekrut Ex-Intern"], specialTags: ["ramah-magang"], description: "Ekosistem digital terbesar Indonesia (Gojek + Tokopedia)" },
    { name: "Traveloka", src: "/logos/traveloka.png", width: 170, height: 60, category: "Teknologi", badges: ["Sering Magang", "Ramah Mahasiswa"], specialTags: ["ramah-magang", "fresh-graduate"], description: "Platform travel & lifestyle terkemuka di Asia Tenggara" },
    { name: "Tokopedia", src: "/logos/goto.png", width: 130, height: 60, category: "Teknologi", badges: ["Sering Magang", "Partner Kampus"], specialTags: ["ramah-magang"], description: "Marketplace #1 Indonesia dengan program magang terstruktur" },
    { name: "Shopee Indonesia", src: "/logos/goto.png", width: 130, height: 60, category: "Teknologi", badges: ["Sering Magang"], specialTags: ["ramah-magang", "non-tech"], description: "Platform e-commerce dengan berbagai divisi magang" },
    { name: "Bukalapak", src: "/logos/goto.png", width: 130, height: 60, category: "Teknologi", badges: ["Partner Kampus", "Ramah Mahasiswa"], specialTags: ["fresh-graduate"], description: "E-commerce lokal dengan program pengembangan talenta" },

    // BUMN (5 partners)
    { name: "Pertamina", src: "/logos/PertaminaFIX.png", width: 180, height: 60, category: "BUMN", badges: ["Partner Kampus", "Sering Magang"], specialTags: ["non-tech", "fresh-graduate"], description: "BUMN energi nasional dengan program magang komprehensif" },
    { name: "PLN", src: "/logos/TelkomFIX.png", width: 150, height: 60, category: "BUMN", badges: ["Partner Kampus"], specialTags: ["non-tech"], description: "Perusahaan listrik negara dengan program magang reguler" },
    { name: "Telkom Indonesia", src: "/logos/TelkomFIX.png", width: 150, height: 60, category: "BUMN", badges: ["Sering Magang", "Pernah Rekrut Ex-Intern", "Partner Kampus"], specialTags: ["ramah-magang", "fresh-graduate"], description: "BUMN telekomunikasi dengan jalur rekrutmen dari magang" },
    { name: "BRI", src: "/logos/bri.svg", width: 120, height: 60, category: "BUMN", badges: ["Sering Magang", "Partner Kampus"], specialTags: ["non-tech", "fresh-graduate"], description: "Bank terbesar Indonesia dengan program BRILiaN Internship" },
    { name: "KAI", src: "/logos/PertaminaFIX.png", width: 180, height: 60, category: "BUMN", badges: ["Partner Kampus"], specialTags: ["non-tech"], description: "Kereta Api Indonesia dengan berbagai posisi magang" },

    // STARTUP (5 partners)
    { name: "Ruangguru", src: "/logos/goto.png", width: 130, height: 60, category: "Startup", badges: ["Sering Magang", "Ramah Mahasiswa"], specialTags: ["ramah-magang", "fresh-graduate"], description: "Edutech #1 Indonesia dengan kultur belajar yang kuat" },
    { name: "Kumparan", src: "/logos/goto.png", width: 130, height: 60, category: "Startup", badges: ["Ramah Mahasiswa"], specialTags: ["non-tech", "fresh-graduate"], description: "Platform media digital untuk role content & editorial" },
    { name: "Sirclo", src: "/logos/goto.png", width: 130, height: 60, category: "Startup", badges: ["Sering Magang"], specialTags: ["ramah-magang"], description: "E-commerce enabler dengan hands-on experience" },
    { name: "Xendit", src: "/logos/goto.png", width: 130, height: 60, category: "Startup", badges: ["Pernah Rekrut Ex-Intern"], specialTags: ["ramah-magang"], description: "Fintech payment dengan kultur startup yang dinamis" },
    { name: "Mekari", src: "/logos/goto.png", width: 130, height: 60, category: "Startup", badges: ["Sering Magang", "Ramah Mahasiswa"], specialTags: ["ramah-magang", "non-tech", "fresh-graduate"], description: "SaaS HR & Finance dengan program magang terstruktur" },

    // E-COMMERCE (5 partners)
    { name: "Tokopedia", src: "/logos/goto.png", width: 130, height: 60, category: "E-commerce", badges: ["Sering Magang", "Partner Kampus"], specialTags: ["ramah-magang", "non-tech"], description: "Marketplace terbesar dengan berbagai divisi magang" },
    { name: "Shopee", src: "/logos/goto.png", width: 130, height: 60, category: "E-commerce", badges: ["Sering Magang"], specialTags: ["ramah-magang", "non-tech"], description: "E-commerce regional dengan program magang kompetitif" },
    { name: "Lazada", src: "/logos/goto.png", width: 130, height: 60, category: "E-commerce", badges: ["Ramah Mahasiswa"], specialTags: ["non-tech", "fresh-graduate"], description: "Alibaba Group company dengan exposure internasional" },
    { name: "Blibli", src: "/logos/goto.png", width: 130, height: 60, category: "E-commerce", badges: ["Partner Kampus", "Sering Magang"], specialTags: ["ramah-magang", "non-tech"], description: "E-commerce lokal dengan program Graduate Development" },
    { name: "Zalora", src: "/logos/goto.png", width: 130, height: 60, category: "E-commerce", badges: ["Ramah Mahasiswa"], specialTags: ["non-tech", "fresh-graduate"], description: "Fashion e-commerce untuk role marketing & operations" },

    // TRAVEL (5 partners)
    { name: "Traveloka", src: "/logos/traveloka.png", width: 170, height: 60, category: "Travel", badges: ["Sering Magang", "Ramah Mahasiswa"], specialTags: ["ramah-magang"], description: "OTA terbesar SE Asia dengan berbagai program magang" },
    { name: "Tiket.com", src: "/logos/traveloka.png", width: 170, height: 60, category: "Travel", badges: ["Sering Magang", "Pernah Rekrut Ex-Intern"], specialTags: ["ramah-magang", "fresh-graduate"], description: "Platform tiket dengan kultur kerja yang supportive" },
    { name: "Garuda Indonesia", src: "/logos/PertaminaFIX.png", width: 180, height: 60, category: "Travel", badges: ["Partner Kampus"], specialTags: ["non-tech"], description: "Maskapai nasional untuk hospitality & operations" },
    { name: "Lion Air Group", src: "/logos/PertaminaFIX.png", width: 180, height: 60, category: "Travel", badges: ["Sering Magang"], specialTags: ["non-tech", "fresh-graduate"], description: "Grup maskapai terbesar dengan berbagai divisi" },
    { name: "AirAsia Indonesia", src: "/logos/PertaminaFIX.png", width: 180, height: 60, category: "Travel", badges: ["Ramah Mahasiswa"], specialTags: ["non-tech"], description: "Low-cost carrier dengan program magang dinamis" },
];

const categories: Category[] = ["Semua", "Teknologi", "BUMN", "Startup", "E-commerce", "Travel"];

const specialFilters: { id: SpecialFilter; label: string; icon: React.ReactNode }[] = [
    { id: "ramah-magang", label: "Paling ramah magang", icon: <Sparkles className="h-3.5 w-3.5" /> },
    { id: "non-tech", label: "Banyak role non-tech", icon: <Briefcase className="h-3.5 w-3.5" /> },
    { id: "fresh-graduate", label: "Cocok untuk fresh graduate", icon: <GraduationCap className="h-3.5 w-3.5" /> },
];

const badgeConfig: Record<Badge, { color: string; icon: React.ReactNode }> = {
    "Sering Magang": { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: <Users className="h-3 w-3" /> },
    "Partner Kampus": { color: "bg-blue-100 text-blue-700 border-blue-200", icon: <Building2 className="h-3 w-3" /> },
    "Ramah Mahasiswa": { color: "bg-amber-100 text-amber-700 border-amber-200", icon: <GraduationCap className="h-3 w-3" /> },
    "Pernah Rekrut Ex-Intern": { color: "bg-purple-100 text-purple-700 border-purple-200", icon: <Sparkles className="h-3 w-3" /> },
};

// ============================================
// MAIN COMPONENT
// ============================================
export function TrustLogosSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category>("Semua");
    const [activeSpecialFilters, setActiveSpecialFilters] = useState<SpecialFilter[]>([]);
    const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

    const toggleSpecialFilter = (filter: SpecialFilter) => {
        setActiveSpecialFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
    };

    const resetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("Semua");
        setActiveSpecialFilters([]);
    };

    const filteredPartners = useMemo(() => {
        return allPartners.filter((partner) => {
            const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "Semua" || partner.category === selectedCategory;
            const matchesSpecialFilters = activeSpecialFilters.length === 0 ||
                activeSpecialFilters.some(filter => partner.specialTags.includes(filter));
            return matchesSearch && matchesCategory && matchesSpecialFilters;
        });
    }, [searchQuery, selectedCategory, activeSpecialFilters]);

    return (
        <section className="relative z-10 pt-16 pb-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-slate-400"
                >
                    Dipercaya Oleh Mitra Industri
                </motion.p>
            </div>

            {/* STATIC LOGO DISPLAY (Reverted from Marquee) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto max-w-7xl px-6"
            >
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-4">
                    {logos.map((logo) => (
                        <LogoItem key={logo.name} logo={logo} />
                    ))}
                </div>
            </motion.div>

            {/* LINK TO MODAL */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
            >
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm font-medium text-slate-400 underline underline-offset-4 transition-colors hover:text-slate-600"
                >
                    Lihat {allPartners.length}+ Partner Lainnya
                </button>
            </motion.div>

            {/* MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/20 px-4 pt-20 pb-4 backdrop-blur-xl md:px-8 md:pt-24 md:pb-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex h-full max-h-[75vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl md:max-h-[70vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between border-b border-slate-100 p-6 md:p-8">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Partner Industri</h2>
                                    <p className="text-sm text-slate-500 md:text-base">Jaringan perusahaan terkurasi yang mempercayai talenta MagangKareer</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-slate-200 hover:text-slate-900"
                                >
                                    <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
                                </button>
                            </div>

                            {/* Controls */}
                            <div className="space-y-4 border-b border-slate-100 px-6 pb-6 pt-4 md:px-8">
                                {/* Search */}
                                <div className="relative w-full">
                                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Cari perusahaan..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-100"
                                    />
                                </div>

                                {/* Category Filters */}
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === cat
                                                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Special Filters */}
                                <div className="flex flex-wrap gap-2">
                                    {specialFilters.map((filter) => (
                                        <button
                                            key={filter.id}
                                            onClick={() => toggleSpecialFilter(filter.id)}
                                            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${activeSpecialFilters.includes(filter.id)
                                                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                                }`}
                                        >
                                            {filter.icon}
                                            {filter.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results Grid */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8">
                                {filteredPartners.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {filteredPartners.map((partner, idx) => (
                                            <motion.div
                                                key={`${partner.name}-${partner.category}-${idx}`}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.03 }}
                                                onMouseEnter={() => setHoveredPartner(`${partner.name}-${idx}`)}
                                                onMouseLeave={() => setHoveredPartner(null)}
                                                className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-slate-200 hover:shadow-lg"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2">
                                                        <Image
                                                            src={partner.src}
                                                            alt={partner.name}
                                                            width={partner.width}
                                                            height={partner.height}
                                                            className="h-8 w-auto object-contain"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-semibold text-slate-900 truncate">{partner.name}</h3>
                                                        <span className="text-xs text-slate-500">{partner.category}</span>
                                                    </div>
                                                    <div className="relative">
                                                        <Info className="h-4 w-4 text-slate-300 transition-colors group-hover:text-slate-400" />
                                                        {hoveredPartner === `${partner.name}-${idx}` && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="absolute right-0 top-6 z-20 w-48 rounded-lg bg-slate-900 p-3 text-xs text-white shadow-xl"
                                                            >
                                                                {partner.description}
                                                                <div className="absolute -top-1.5 right-2 h-3 w-3 rotate-45 bg-slate-900" />
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {partner.badges.slice(0, 2).map((badge) => (
                                                        <span
                                                            key={badge}
                                                            className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeConfig[badge].color}`}
                                                        >
                                                            {badgeConfig[badge].icon}
                                                            {badge}
                                                        </span>
                                                    ))}
                                                    {partner.badges.length > 2 && (
                                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                                                            +{partner.badges.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex h-full flex-col items-center justify-center py-20 text-center"
                                    >
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 scale-150 bg-slate-100/50 blur-3xl rounded-full" />
                                            <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                                                <Search className="h-10 w-10 text-slate-300" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Belum ada partner yang cocok</h3>
                                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                                            Hmm, kriteria filter kamu belum menemukan hasil. Coba reset filter atau gunakan kata kunci lain.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={resetFilters}
                                            className="mt-8 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800"
                                        >
                                            Reset semua filter
                                        </motion.button>
                                    </motion.div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 md:px-8">
                                <p className="text-center text-xs text-slate-400">
                                    MagangKareer mengkurasi perusahaan yang realistis dan relevan untuk mahasiswa & fresh graduate
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
