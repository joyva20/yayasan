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
        <div className="mt-6 rounded-xl shadow-md overflow-hidden relative aspect-[16/9]">
          <Image 
            src="/BAGAN-FBIS.jpg" 
            alt="Bagan Struktur Organisasi FBIS" 
            fill
            className="object-contain bg-white"
            unoptimized
          />
        </div>
      </section>

      {/* Pimpinan Fakultas Section */}
      <section className="bg-white max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-2">
          Pimpinan Fakultas
        </h2>
        <p className="text-slate-600 text-center mb-10">
          Memimpin dengan visi yang jelas dan komitmen tinggi terhadap keunggulan akademik
        </p>
        
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Foto Dekan */}
          <div>
            <div className="rounded-xl aspect-[3/4] max-w-sm mx-auto overflow-hidden shadow-lg relative">
              <Image 
                src="/ikhwan-hi-res.png" 
                alt="Dr. Ikhwan HS, SE, MM., M.Si - Dekan FBIS" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info Dekan */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#25D366] mb-2">
              {strukturOrganisasi.leader.name}
            </h3>
            <p className="text-xl font-semibold text-slate-700 mb-1">
              {strukturOrganisasi.leader.title}
            </p>
            <p className="text-slate-600 mb-6">
              {strukturOrganisasi.leader.role}
            </p>
            <div className="space-y-2 text-slate-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a 
                  href={`mailto:${strukturOrganisasi.leader.email}`}
                  className="text-[#25D366] hover:underline cursor-pointer"
                >
                  {strukturOrganisasi.leader.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Telepon:</span>{" "}
                {strukturOrganisasi.leader.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ketua Program Studi Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-2">
            Ketua Program Studi
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Para pemimpin program studi yang berpengalaman dan berdedikasi tinggi
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strukturOrganisasi.kaprodiList.map((kaprodi, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:border-2 hover:border-[#25D366] transition-all cursor-pointer"
              >
                <div className="rounded-lg aspect-[3/4] mb-4 overflow-hidden relative bg-slate-100">
                  <Image 
                    src={kaprodi.photo}
                    alt={kaprodi.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-[#25D366] mb-2">
                  {kaprodi.name}
                </h3>
                <p className="text-sm text-slate-600">
                  Ketua Program Studi {kaprodi.program}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {kaprodi.program}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Organisasi Section */}
      <section className="bg-white max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] text-center mb-4">
          Struktur Organisasi yang Solid
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mx-auto mb-10">
          Struktur organisasi Fakultas Psikologi dirancang untuk mendukung efektivitas pengelolaan pendidikan, penelitian, dan pengabdian masyarakat. Setiap posisi memiliki peran strategis dalam mencapai visi fakultas menjadi yang terdepan dalam bidang psikologi dan ilmu sosial.
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
