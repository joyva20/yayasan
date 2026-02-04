import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* CTA Section di Footer */}
      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Butuh informasi lebih lanjut?
          </h3>
          <p className="text-slate-600 text-lg md:text-xl mb-6">
            Hubungi kami di{" "}
            <a
              href="tel:08129387-1569"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              0812-9387-1569
            </a>{" "}
            atau email{" "}
            <a
              href="mailto:contoh@contoh.ac.id"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              contoh@contoh.ac.id
            </a>{" "}
            Siap berkolaborasi untuk kebaikan?
          </p>
          <a
            href="https://wa.me/6281293871569"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hubungi Kami
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kolom Kiri - Informasi Yayasan */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm h-16 w-16 p-2">
                <Image 
                  src="/logo-fix.png" 
                  alt="Logo Yayasan" 
                  width={44}
                  height={44}
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Teks */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">
                  Yayasan Al-Kalam Ngali Indonesia
                </h3>
              </div>
            </div>
            <div className="space-y-2 text-slate-600 text-base">
              <p>
                Jl. Kalibata Raya - Dewi Sartika, No. 25-30 Jakarta Timur - DKI
                Jakarta 13630
              </p>
              <p className="pt-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:contoh@contoh.ac.id"
                  className="hover:text-slate-900 transition-colors"
                >
                  contoh@contoh.ac.id
                </a>
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/6281293871569"
                  className="hover:text-slate-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-9387-1569
                </a>
              </p>
            </div>
          </div>

          {/* Kolom Tengah - Link Cepat */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Link Cepat</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-slate-600 hover:text-slate-900 text-base transition-colors"
              >
                Beranda
              </a>
              <a
                href="#sambutan"
                className="block text-slate-600 hover:text-slate-900 text-base transition-colors"
              >
                Sambutan Pengurus
              </a>
              <a
                href="#latar-belakang"
                className="block text-slate-600 hover:text-slate-900 text-base transition-colors"
              >
                Latar Belakang
              </a>
              <a
                href="#struktur-organisasi"
                className="block text-slate-600 hover:text-slate-900 text-base transition-colors"
              >
                Pengurus Yayasan
              </a>
              <a
                href="#kontak"
                className="block text-slate-600 hover:text-slate-900 text-base transition-colors"
              >
                Kontak
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-500 text-base">© {currentYear} Yayasan Al-Kalam Ngali Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
