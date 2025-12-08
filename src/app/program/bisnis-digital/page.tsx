"use client";

import { useState } from "react";
import { bisnisDigital } from "@/data/programStudi";

export default function BisnisDigitalPage() {
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#A64D4D] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            {bisnisDigital.title}
          </h1>
          <p className="text-white text-lg">
            {bisnisDigital.subtitle}
          </p>
        </div>
      </section>

      {/* Deskripsi Program Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-6">
          Deskripsi Program
        </h2>
        <div className="space-y-4">
          {bisnisDigital.description.map((paragraph, index) => (
            <p key={index} className="text-slate-700 leading-relaxed">
              • {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-6">
            Kurikulum
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <p className="text-slate-700 mb-4">
              Kurikulum mengacu pada <strong>{bisnisDigital.kurikulum.standar}</strong> dan berbasis pada pendekatan{" "}
              <strong>{bisnisDigital.kurikulum.pendekatan}</strong>. Ciri khas kurikulum ini adalah integrasi{" "}
              <strong>{bisnisDigital.kurikulum.ciriKhas}</strong> sebagai kekuatan utama, serta penekanan pada praktik technopreneurship dan kolaborasi lintas disiplin.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-[#8B3A3A] mb-4">
            Keunggulan Kurikulum:
          </h3>
          <ul className="space-y-2">
            {bisnisDigital.kurikulum.keunggulan.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#8B3A3A] mt-1">•</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Jenis Program Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-6">
          Jenis Program
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#8B3A3A]">
            <h3 className="text-xl font-semibold text-[#8B3A3A] mb-3">
              {bisnisDigital.jenisProgram.reguler.title}
            </h3>
            <p className="text-slate-700">
              {bisnisDigital.jenisProgram.reguler.description}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#A64D4D]">
            <h3 className="text-xl font-semibold text-[#8B3A3A] mb-3">
              {bisnisDigital.jenisProgram.karyawan.title}
            </h3>
            <p className="text-slate-700">
              {bisnisDigital.jenisProgram.karyawan.description}
            </p>
          </div>
        </div>
      </section>

      {/* Prospek Karir Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-6">
            Prospek Karir Lulusan menjadi Ahli dan Praktis
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bisnisDigital.prospekKarir.map((karir, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-[#8B3A3A] hover:shadow-md transition-shadow"
              >
                <p className="text-slate-700 font-medium">• {karir}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      {bisnisDigital.pdfPath && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-6 text-center">
            Jadwal Perkuliahan
          </h2>
          <div className="bg-slate-100 rounded-xl shadow-lg overflow-hidden">
            {!pdfError ? (
              <iframe
                src={`${bisnisDigital.pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-[800px]"
                title="Jadwal Bisnis Digital"
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-96 p-8 text-center">
                <svg
                  className="w-16 h-16 text-slate-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-slate-600 mb-4">
                  Tidak dapat menampilkan PDF di browser ini
                </p>
                <a
                  href={bisnisDigital.pdfPath}
                  download
                  className="bg-[#8B3A3A] text-white px-6 py-3 rounded-lg hover:bg-[#6B2A2A] transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </a>
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <a
              href={bisnisDigital.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B3A3A] hover:underline inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Buka PDF di Tab Baru
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
