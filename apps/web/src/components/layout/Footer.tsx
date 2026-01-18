import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    perusahaan: [
        { label: "Tentang Kami", href: "#" },
        { label: "Karier", href: "#" },
        { label: "Blog", href: "#" },
    ],
    mahasiswa: [
        { label: "Cari Lowongan", href: "#" },
        { label: "Panduan Magang", href: "#" },
        { label: "Kalkulator Gaji", href: "#" },
    ],
    kontak: [
        { label: "hello@magangkareer.id", href: "mailto:hello@magangkareer.id" },
        { label: "Jakarta Selatan, Indonesia", href: null },
    ],
};

export function Footer() {
    return (
        <footer className="transition-mist-to-white pb-12 pt-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-lg font-bold text-slate-900">
                                MagangKareer
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Platform magang profesional #1 di Indonesia untuk mahasiswa dan
                            fresh graduates.
                        </p>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-900">
                            Perusahaan
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mahasiswa */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-900">
                            Mahasiswa
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.mahasiswa.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-900">
                            Kontak
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.kontak.map((item) => (
                                <li key={item.label}>
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-sm text-slate-500">{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50">
                    <p className="text-xs text-slate-400">
                        © 2024 MagangKareer. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <Link
                            href="#"
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={16} />
                        </Link>
                        <Link
                            href="#"
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter size={16} />
                        </Link>
                        <Link
                            href="#"
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
