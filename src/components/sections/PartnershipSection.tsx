import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnershipSection() {
  return (
    <section id="mitra" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Mitra Kerja Sama</h2>
        <div className="section-divider"></div>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          FBIS bekerja sama dengan berbagai institusi dan perusahaan terkemuka
          untuk memberikan pengalaman belajar dan peluang karir terbaik bagi
          mahasiswa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-lg p-6 flex items-center justify-center hover:border-[#25D366] hover:shadow-md transition-all"
            >
              <div className="text-center">
                <div className="w-32 h-20 relative flex items-center justify-center mx-auto mb-2">
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics di bawah partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-yellow-600">50%</span>
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              Mitra Industri
            </h3>
            <p className="text-slate-600 text-sm">
              Kerjasama dengan berbagai perusahaan untuk pengalaman kerja
              mahasiswa
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-yellow-600">25%</span>
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              Universitas Partner
            </h3>
            <p className="text-slate-600 text-sm">
              Program pertukaran pelajar dengan universitas internasional
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-yellow-600">95%</span>
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              Tingkat Penempatan
            </h3>
            <p className="text-slate-600 text-sm">
              Alumni terserap di dunia kerja dalam 6 bulan setelah lulus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
