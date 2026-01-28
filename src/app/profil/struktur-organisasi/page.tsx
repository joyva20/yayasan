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
          <p className="mt-4 text-white text-xl md:text-2xl">
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
            <div className="text-base md:text-lg font-semibold text-slate-900">
              Bagan Pengurus akan ditampilkan di sini.
            </div>
            <p className="mt-2 text-base md:text-lg text-slate-600">
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
        <p className="text-slate-600 text-center text-lg md:text-xl mb-10">
          Struktur kepengurusan inti Yayasan Al-Kalam Ngali Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {strukturOrganisasi.management.map((member, index) => (
            <div
              key={`${member.title}-${index}`}
              className={
                strukturOrganisasi.management.length % 2 === 1 &&
                index === strukturOrganisasi.management.length - 1
                  ? "md:col-span-2"
                  : undefined
              }
            >
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.imageSrc || "/logo.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="mt-2 text-slate-500 italic">
                    {member.subtitle || member.title}
                  </div>
                  <div className="mt-3 h-1 w-12 bg-[#25D366]" />
                  <div className="mt-4 space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                    {(member.bio && member.bio.length > 0
                      ? member.bio
                      : [
                          "Profil pengurus akan ditampilkan di sini.",
                          "Silakan kirimkan foto dan biografi singkat untuk ditambahkan.",
                        ]
                    ).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-base md:text-lg text-slate-700">
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
          Pengurus Yayasan yang Solid
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mx-auto mb-10">
             Pengurus Yayasan dirancang untuk mendukung efektivitas pengelolaan program dan layanan. Setiap peran memiliki kontribusi yang jelas dalam memastikan kegiatan berjalan amanah, transparan, dan tepat sasaran.
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
              <p className="mt-2 text-base md:text-lg text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
