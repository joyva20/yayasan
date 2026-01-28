import { visiMisi } from "@/data/visiMisi";

export default function VisionMissionSection() {
  return (
    <section id="visi-misi" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Visi &amp; Misi</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-[#25D366] mb-3">Visi</h3>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed">{visiMisi.visi}</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-[#25D366] mb-3">Misi</h3>
            <ol className="list-decimal pl-6 space-y-4 text-slate-700 text-lg md:text-xl">
              {visiMisi.misi.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
