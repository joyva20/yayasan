"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ReportItem } from "@/data/reports";

type Props = {
  title: string;
  description: string;
  reports: ReportItem[];
};

const ORANGE = "#F97316";

export default function ReportGrid({ title, description, reports }: Props) {
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(reports.map((r) => r.year)));
    uniqueYears.sort((a, b) => b - a);
    return uniqueYears;
  }, [reports]);

  const [selectedYear, setSelectedYear] = useState<number | "all">(
    years[0] ?? "all"
  );

  const filtered = useMemo(() => {
    if (selectedYear === "all") return reports;
    return reports.filter((r) => r.year === selectedYear);
  }, [reports, selectedYear]);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-6" style={{ color: ORANGE }}>
            {title}
          </h1>
          <p className="text-center text-slate-600 text-base md:text-lg max-w-4xl mx-auto">
            {description}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16" style={{ backgroundColor: ORANGE }} />
          </div>

          <div className="mt-14 flex items-end gap-6">
            <div className="text-left">
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                Filter Tahun
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSelectedYear(value === "all" ? "all" : Number(value));
                  }}
                  className="w-44 rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                >
                  <option value="all">Semua</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500"
                  aria-label="Cari"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                style={{ borderTopWidth: 4, borderTopColor: ORANGE }}
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  {item.coverImageSrc ? (
                    <Image
                      src={item.coverImageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      Tidak ada cover
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-3xl font-bold" style={{ color: "#B08D57" }}>
                    {item.year}
                  </div>
                  <div className="mt-4 font-semibold text-slate-900 leading-snug">
                    {item.title}
                  </div>

                  <div className="mt-5">
                    {item.disabled || !item.fileHref ? (
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 cursor-not-allowed"
                        disabled
                        aria-disabled="true"
                      >
                        Unduh
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span className="ml-2 text-xs font-medium text-slate-400">
                          (segera)
                        </span>
                      </button>
                    ) : (
                      <a
                        href={item.fileHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: "#B08D57" }}
                      >
                        Unduh
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
