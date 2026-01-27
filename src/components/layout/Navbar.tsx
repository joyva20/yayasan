"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    // Jika href adalah anchor (dimulai dengan #)
    if (href.startsWith("#")) {
      // Jika sedang berada di halaman lain (bukan home), navigasi ke home dulu
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        // Jika sudah di home, scroll ke section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Jika href adalah path biasa, gunakan router.push
      router.push(href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#25D366] border-b border-[#1DA851] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] items-center py-4 md:py-5 min-h-24 md:min-h-28 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Logo Yayasan Al-Kalam" 
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <button
              onClick={() => handleNavClick("#home")}
              className="text-lg md:text-xl lg:text-2xl font-bold text-white hover:text-slate-200 transition-colors leading-tight text-left"
            >
              Yayasan Al-Kalam Ngali Indonesia
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-white hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                      <span className="text-xs">▾</span>
                    </button>
                    {openDropdown === link.label && (
                      <>
                        {/* Backdrop untuk menutup dropdown saat klik di luar */}
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setOpenDropdown(null)}
                        />
                        <div className="absolute left-0 mt-2 w-72 rounded-lg bg-white border border-slate-200 shadow-lg py-2 z-50">
                          {link.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => {
                                if (child.disabled) return;
                                handleNavClick(child.href);
                                setOpenDropdown(null);
                              }}
                              className={
                                child.disabled
                                  ? "block w-full text-left px-4 py-2 text-base text-slate-400 cursor-not-allowed"
                                  : "block w-full text-left px-4 py-2 text-base text-slate-700 hover:bg-slate-100 transition-colors"
                              }
                              aria-disabled={child.disabled ? true : undefined}
                              disabled={child.disabled}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href!)}
                    className="text-white hover:text-slate-200 transition-colors text-base md:text-lg font-semibold"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label} className="space-y-1">
                {link.href && (
                  <button
                    onClick={() => {
                      handleNavClick(link.href!);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-3 text-slate-700 hover:text-[#25D366] hover:bg-slate-50 rounded-md text-base font-semibold transition-colors"
                  >
                    {link.label}
                  </button>
                )}
                {!link.href && (
                  <div className="px-3 py-3 text-base font-bold text-slate-800">
                    {link.label}
                  </div>
                )}
                {link.children && (
                  <div className="ml-4 border-l-2 border-slate-200 pl-4 space-y-1">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => {
                          if (child.disabled) return;
                          handleNavClick(child.href);
                          setIsMenuOpen(false);
                        }}
                        className={
                          child.disabled
                            ? "block w-full text-left py-2 text-base text-slate-400 cursor-not-allowed"
                            : "block w-full text-left py-2 text-base text-slate-600 hover:text-[#25D366] transition-colors"
                        }
                        aria-disabled={child.disabled ? true : undefined}
                        disabled={child.disabled}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
