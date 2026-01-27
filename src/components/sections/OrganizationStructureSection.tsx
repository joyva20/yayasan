import Image from "next/image";

export default function OrganizationStructureSection() {
  return (
    <section id="struktur-organisasi" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Struktur Organisasi</h2>
        <div className="section-divider"></div>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
          Bagan struktur organisasi yayasan (dapat diperbarui sewaktu-waktu).
        </p>

        <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-50">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/BAGAN-FBIS.jpg"
              alt="Bagan struktur organisasi Yayasan"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 960px"
              priority={false}
            />
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          Jika Anda ingin mengganti gambar, cukup replace file di folder public
          dengan nama yang sama.
        </p>
      </div>
    </section>
  );
}
