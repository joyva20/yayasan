import Image from "next/image";

export default function DeanMessageSection() {
  return (
    <section id="sambutan" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Sambutan Ketua Pengurus</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kolom Kiri - Foto Dekan */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg relative">
                <Image 
                  src="/ikhwan-hi-res.png" 
                  alt="Ketua Yayasan" 
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
                Ketua Pengurus
              </h3>
              <p className="text-lg text-[#25D366] font-semibold">
                Yayasan Al-Kalam Ngali Indonesia
              </p>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                &ldquo;Selamat datang di Yayasan Al-Kalam Ngali Indonesia. Kami
                berkomitmen menghadirkan program yang tepat sasaran, transparan,
                dan berkelanjutan untuk memberikan dampak nyata bagi masyarakat.
                <span className="font-semibold text-slate-900"> Bersama</span>
                , kita bisa menebar manfaat lebih luas.
              </p>
              <p>
                Semoga kehadiran yayasan ini menjadi ruang kolaborasi kebaikan
                untuk pendidikan, sosial, dan penguatan komunitas.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#visi-misi"
                className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-[#1DA851] transition-colors"
              >
                Lihat Visi & Misi
              </a>
              <a
                href="#struktur-organisasi"
                className="inline-block bg-white text-[#25D366] border-2 border-[#25D366] px-6 py-3 rounded-lg text-center font-medium hover:bg-[#25D366] hover:text-white transition-colors"
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
