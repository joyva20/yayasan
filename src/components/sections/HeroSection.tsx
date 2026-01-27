"use client";

import Image from "next/image";

const hero = {
  image: "/logo.png",
  imageAlt: "Banner Yayasan",
  title: "Yayasan Al-Kalam Ngali Indonesia",
  subtitle:
    "Bersama menebar manfaat melalui pendidikan, sosial, dan program kebaikan yang berkelanjutan.",
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          className="object-contain bg-white"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tentang-kami"
            className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1DA851] transition-colors shadow-lg"
          >
            Tentang Yayasan
          </a>
          <a
            href="#kontak"
            className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
