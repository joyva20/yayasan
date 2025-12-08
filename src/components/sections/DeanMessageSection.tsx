import Image from "next/image";

export default function DeanMessageSection() {
  return (
    <section id="sambutan" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Sambutan Dekan</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kolom Kiri - Foto Dekan */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg relative">
                <Image 
                  src="/ikhwan-hi-res.png" 
                  alt="Dr. Ikhwan HS, SE, MM., M.Si - Dekan FBIS" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Sambutan */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Dr. Ikhwan HS, SE, MM., M.Si
              </h3>
              <p className="text-lg text-[#8B3A3A] font-semibold">
                Dekan FBIS Universitas Binawan
              </p>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                &ldquo;Selamat datang di Fakultas Bisnis dan Ilmu Sosial
                Universitas Binawan. Kami berkomitmen untuk menghasilkan lulusan
                yang tidak hanya unggul secara akademik, tetapi juga memiliki
                karakter yang kuat dan kemampuan adaptasi di era digital.{" "}
                <span className="font-semibold text-slate-900">
                  Misi kami mendidik SDM unggul untuk siap bekerja di dalam dan
                  Luar Negeri.
                </span>
              </p>
              <p>
                Dengan core values Internasional, Digital, Berakhlak, kami
                mempersiapkan mahasiswa untuk menjadi pemimpin masa depan yang
                dapat berkontribusi nyata bagi kemajuan bangsa.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#visi-misi"
                className="inline-block bg-[#8B3A3A] text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-[#6B2A2A] transition-colors"
              >
                Lihat Visi & Misi
              </a>
              <a
                href="#struktur-organisasi"
                className="inline-block bg-white text-[#8B3A3A] border-2 border-[#8B3A3A] px-6 py-3 rounded-lg text-center font-medium hover:bg-[#8B3A3A] hover:text-white transition-colors"
              >
                Lihat Struktur Organisasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
