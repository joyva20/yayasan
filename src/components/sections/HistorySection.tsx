export default function HistorySection() {
  return (
    <section id="sejarah" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Sejarah</h2>
        <div className="section-divider"></div>

        <div className="space-y-4 text-slate-600 text-base leading-relaxed text-center">
          <p>
            Bagian ini berisi ringkasan perjalanan Yayasan Al-Kalam Ngali Indonesia.
            Silakan perbarui teks berikut sesuai profil resmi yayasan.
          </p>
          <p>
            Kami tumbuh melalui kolaborasi, penguatan program pendidikan dan sosial,
            serta komitmen untuk menghadirkan dampak yang berkelanjutan bagi masyarakat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-[#25D366]">Awal</div>
            <div className="mt-2 text-sm text-slate-600">
              Mulai dari inisiatif kebaikan dan penguatan komunitas.
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-[#25D366]">Berkembang</div>
            <div className="mt-2 text-sm text-slate-600">
              Memperluas program pendidikan, sosial, dan kemitraan.
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-[#25D366]">Hari Ini</div>
            <div className="mt-2 text-sm text-slate-600">
              Fokus pada program yang tepat sasaran, transparan, dan berkelanjutan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
