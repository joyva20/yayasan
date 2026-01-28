export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#25D366] text-center">
          Legal
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-16 bg-slate-300" />
        </div>
        <p className="mt-8 text-slate-700 text-base md:text-lg leading-relaxed">
          Halaman ini disiapkan untuk dokumen legal yayasan (mis. akta pendirian,
          SK pengesahan, NPWP, dan dokumen pendukung lainnya). Silakan kirimkan
          daftar dokumen dan file PDF/scan yang ingin ditampilkan.
        </p>
      </section>
    </div>
  );
}
