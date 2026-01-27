import { visiMisi } from "@/data/visiMisi";

export default function VisionMissionSection() {
  return (
    <section id="visi-misi" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Visi &amp; Misi</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Visi</h3>
            <p className="text-slate-700 leading-relaxed">{visiMisi.visi}</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Misi</h3>
            <ul className="space-y-3 text-slate-700">
              {visiMisi.misi.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 text-[#25D366]">✔</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
