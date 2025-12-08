import { visiMisi } from "@/data/visiMisi";

export default function VisiMisiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#A64D4D] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {visiMisi.title}
          </h1>
          <p className="mt-4 text-white text-lg">
            {visiMisi.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#8B3A3A] mb-2">
          Landasan Filosofi dan Pengembangan Fakultas
        </h2>

        <div className="grid gap-10 md:grid-cols-3 mt-10">
          {/* Kolom Visi */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#8B3A3A] bg-white">
              <span className="text-4xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold text-[#8B3A3A] mb-4">VISI</h3>
            <p className="text-slate-700 leading-relaxed">
              {visiMisi.visi}
            </p>
          </div>

          {/* Kolom Misi */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#8B3A3A] bg-white">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[#8B3A3A] mb-4">MISI</h3>
            <ul className="space-y-2 mt-3 text-left">
              {visiMisi.misi.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-[#8B3A3A] font-bold mt-0.5">✔</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Tujuan */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#8B3A3A] bg-white">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[#8B3A3A] mb-4">TUJUAN</h3>
            <ul className="space-y-2 mt-3 text-left">
              {visiMisi.tujuan.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-[#8B3A3A] font-bold mt-0.5">✔</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-slate-100 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8B3A3A] mb-4">
            {visiMisi.commitmentTitle}
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-4xl mx-auto">
            {visiMisi.commitmentText}
          </p>
        </div>
      </section>
    </div>
  );
}
