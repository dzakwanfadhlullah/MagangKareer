"use client";

export function VideoBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Video Element */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23f8fafc' width='1920' height='1080'/%3E%3C/svg%3E"
            >
                <source
                    src="/wmremove-transformed.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Gradient Overlay - elegant multi-layer effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/90" />

            {/* Subtle overlay for consistent brightness and readability */}
            <div className="absolute inset-0 bg-white/20" />

            {/* Subtle dot pattern for texture */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `radial-gradient(circle, #334155 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />
        </div>
    );
}
