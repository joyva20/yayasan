import { visiMisi } from "@/data/visiMisi";

export default function VisiMisiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1DA851] py-12">
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
        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#25D366] mb-2">
          Landasan Nilai dan Arah Gerak Yayasan
        </h2>

        <div className="grid gap-10 md:grid-cols-3 mt-10">
          {/* Kolom Visi */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#25D366] bg-white">
              <span className="text-4xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold text-[#25D366] mb-4">VISI</h3>
            <p className="text-[#1DA851] leading-relaxed">
              {visiMisi.visi}
            </p>
          </div>

          {/* Kolom Misi */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#25D366] bg-white">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[#25D366] mb-4">MISI</h3>
            <ol className="list-decimal pl-6 space-y-2 mt-3 text-left">
              {visiMisi.misi.map((item, index) => (
                <li key={index} className="text-[#1DA851]">
                  <span className="text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Kolom Tujuan */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#25D366] bg-white">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[#25D366] mb-4">TUJUAN</h3>
            <ul className="space-y-2 mt-3 text-left">
              {visiMisi.tujuan.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[#1DA851]">
                  <span className="text-[#25D366] font-bold mt-0.5">✔</span>
                  <span className="text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-slate-100 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#25D366] mb-4">
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
