import { coreValuesPage } from "@/data/coreValuesPillars";

export default function CoreValuesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1DA851] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            {coreValuesPage.heroTitle}
          </h1>
          <p className="mt-4 text-white text-sm md:text-base">
            {coreValuesPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Lima Pilar Fundamental Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#25D366]">
          {coreValuesPage.introTitle}
        </h2>
        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          {coreValuesPage.introText}
        </p>

        {/* Grid Pillars */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {coreValuesPage.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Placeholder icon area */}
              <div className="flex h-24 w-24 items-center justify-center border-2 border-yellow-400 rounded-lg">
                <span className="text-2xl text-yellow-500">★</span>
              </div>
              <h3 className="text-lg font-semibold text-[#25D366]">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Komitmen Kami Section */}
      <section className="bg-slate-100 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#25D366] mb-4">
            {coreValuesPage.commitmentTitle}
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {coreValuesPage.commitmentText}
          </p>
        </div>
      </section>
    </div>
  );
}
