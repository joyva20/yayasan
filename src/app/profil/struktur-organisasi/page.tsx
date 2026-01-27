import Image from "next/image";
import { strukturOrganisasi } from "@/data/strukturOrganisasi";

export default function StrukturOrganisasiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1DA851] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {strukturOrganisasi.heroTitle}
          </h1>
          <p className="mt-4 text-white text-lg">
            {strukturOrganisasi.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Bagan Organisasi Section */}
      <section className="bg-white max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-4">
          Bagan Organisasi
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mx-auto mb-6">
          {strukturOrganisasi.orgChartDescription}
        </p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
          <div className="mx-auto max-w-xl">
            <div className="text-sm font-semibold text-slate-900">
              Bagan struktur organisasi akan ditampilkan di sini.
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Silakan unggah/siapkan bagan resmi yayasan, lalu kita bisa pasang di halaman ini.
            </p>
          </div>
        </div>
      </section>

      {/* Pengurus Yayasan Section */}
      <section className="bg-white max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-2">
          Pengurus Yayasan
        </h2>
        <p className="text-slate-600 text-center mb-10">
          Struktur kepengurusan inti Yayasan Al-Kalam Ngali Indonesia
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {strukturOrganisasi.management.map((member) => (
            <div
              key={member.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-semibold text-slate-700">
                  {member.title.charAt(0)}
                </span>
              </div>
              <div className="font-semibold text-slate-900">{member.name}</div>
              <div className="mt-1 text-sm text-slate-600">{member.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-sm text-slate-700">
            <span className="font-semibold">Kontak:</span>{" "}
            <a
              href={`mailto:${strukturOrganisasi.leader.email}`}
              className="text-[#25D366] hover:underline"
            >
              {strukturOrganisasi.leader.email}
            </a>
            <span className="mx-2 text-slate-400">•</span>
            <span className="font-semibold">Telepon:</span> {strukturOrganisasi.leader.phone}
          </div>
        </div>
      </section>

      {/* Statistik Organisasi Section */}
      <section className="bg-white max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-4">
          Struktur Organisasi yang Solid
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mx-auto mb-10">
          Struktur organisasi yayasan dirancang untuk mendukung efektivitas pengelolaan program dan layanan. Setiap peran memiliki kontribusi yang jelas dalam memastikan kegiatan berjalan amanah, transparan, dan tepat sasaran.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strukturOrganisasi.stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white text-lg font-semibold">
                {item.value}
              </div>
              <div className="font-semibold uppercase tracking-wide text-[#25D366]">
                {item.label}
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
