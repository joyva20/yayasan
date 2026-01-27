export default function OrganizationStructureSection() {
  return (
    <section id="struktur-organisasi" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Struktur Organisasi</h2>
        <div className="section-divider"></div>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
          Bagan struktur organisasi yayasan (dapat diperbarui sewaktu-waktu).
        </p>

        <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
          <div className="mx-auto max-w-xl">
            <div className="text-sm font-semibold text-slate-900">
              Bagan struktur organisasi akan ditampilkan di sini.
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Silakan unggah/siapkan bagan resmi yayasan, lalu kita bisa pasang di bagian ini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
