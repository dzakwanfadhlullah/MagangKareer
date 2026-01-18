"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialSection() {
    return (
        <section className="py-32 transition-cool-to-depth" id="testimoni">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.blockquote
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="font-serif text-3xl md:text-5xl leading-tight text-slate-900 block mb-8">
                        &quot;MagangKareer membantu saya mendapatkan posisi di perusahaan impian.
                        Prosesnya transparan dan mentornya sangat suportif.&quot;
                    </span>
                </motion.blockquote>
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full grayscale opacity-80 border border-slate-200">
                        <Image
                            alt="Sarah Amalia"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-bHUAm6--kYU1lUTHqNQwJkeuugl64ev9gDlGCRoBAnkp7vZOBWS3_0CTMFji18IYiGiND4D3J7KAH5Jy8kk7oqQH2HwuvjrWQSZUo4Kv0ukKC3qQUkTOsxpFc0aF9ZYilx2Tdic2EoOmDeOQlPY2Zx5PfkN3IvDBg-ruic355uOoV4rYbgD_98aJb6EhJIUtThSVuowCnet42u2bOE2P58TgBRA5TEOLIxzdcPzYoXFqkmem1qV_0mB9_0UY-JMCmLZUdGYv7LI"
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <div className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                            Sarah Amalia
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                            Ex-Intern Telkom Indonesia
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
