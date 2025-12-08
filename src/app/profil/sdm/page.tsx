import { sdmPage } from "@/data/sdm";

export default function SDMPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#A64D4D] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            {sdmPage.heroTitle}
          </h1>
          <p className="mt-4 text-white text-sm md:text-base">
            Sumber daya manusia yang mendukung kualitas pendidikan dan layanan akademik.
          </p>
        </div>
      </section>

      {/* SDM Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-[#8B3A3A] mb-2">
          SDM Fakultas
        </h2>
        <p className="text-center text-slate-600 mb-10">
          Dosen dan tenaga kependidikan yang berdedikasi tinggi
        </p>

        {/* Grid Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sdmPage.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="mb-3 text-sm font-semibold text-slate-800">
                {group.title}
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
                {group.items.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
