import Image from "next/image";
import { strukturOrganisasi } from "@/data/strukturOrganisasi";

export default function OrganizationStructureSection() {
  return (
    <section id="struktur-organisasi" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Pengurus</h2>
        <div className="section-divider"></div>
        <p className="text-center text-slate-600 text-lg md:text-xl mb-14 max-w-3xl mx-auto">
          Dalam menjalankan kegiatan, kami didukung oleh pengurus yayasan yang amanah.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
          {strukturOrganisasi.management.map((member, index) => (
            <div
              key={`${member.title}-${index}`}
              className={
                strukturOrganisasi.management.length % 2 === 1 &&
                index === strukturOrganisasi.management.length - 1
                  ? "lg:col-span-2"
                  : undefined
              }
            >
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.imageSrc || "/logo-fix.jpeg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                    unoptimized
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="mt-2 text-slate-500 italic">
                    {member.subtitle || member.title}
                  </div>
                  <div className="mt-3 h-1 w-12 bg-[#25D366]" />

                  <div className="mt-4 space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                    {(member.bio && member.bio.length > 0
                      ? member.bio
                      : [
                          "Profil pengurus akan ditampilkan di sini.",
                          "Silakan kirimkan foto dan biografi singkat untuk ditambahkan.",
                        ]
                    ).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
