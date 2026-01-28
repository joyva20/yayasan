export default function BidangUsahaPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#25D366] text-center">
          Bidang Usaha
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-16 bg-slate-300" />
        </div>
        <p className="mt-8 text-slate-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Halaman ini berisi daftar bidang usaha/ikhtiar yayasan. Silakan kirimkan
          nama bidang usaha, deskripsi singkat, serta (opsional) foto atau dokumen
          pendukung untuk setiap bidang.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { id: "bidang-1", title: "Bidang Usaha 1" },
            { id: "bidang-2", title: "Bidang Usaha 2" },
            { id: "bidang-3", title: "Bidang Usaha 3" },
          ].map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-8 scroll-mt-32"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-slate-600 text-base md:text-lg">
                Deskripsi bidang usaha akan ditampilkan di sini.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
