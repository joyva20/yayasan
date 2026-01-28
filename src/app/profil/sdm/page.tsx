import { sdmPage } from "@/data/sdm";

export default function SDMPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1DA851] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            {sdmPage.heroTitle}
          </h1>
          <p className="mt-4 text-white text-base md:text-lg">
            Sumber daya manusia yang mendukung pelaksanaan program dan layanan yayasan.
          </p>
        </div>
      </section>

      {/* SDM Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-[#25D366] mb-2">
          SDM Yayasan
        </h2>
        <p className="text-center text-slate-600 text-lg md:text-xl mb-10">
          Pengurus, pelaksana program, dan relawan yang berdedikasi
        </p>

        {/* Grid Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sdmPage.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="mb-3 text-base font-semibold text-slate-800">
                {group.title}
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-base text-slate-700">
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
