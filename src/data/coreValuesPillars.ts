export type CoreValuePillar = {
  title: string;
  description: string;
};

export type CoreValuesPageData = {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  pillars: CoreValuePillar[];
  spiritTitle: string;
  spiritItems: string[];
  commitmentTitle: string;
  commitmentText: string;
};

export const coreValuesPage: CoreValuesPageData = {
  heroTitle: "Core Values Yayasan",
  heroSubtitle:
    "Nilai-nilai utama yang menjadi landasan dalam membangun program, layanan, dan tata kelola Yayasan Al-Kalam Ngali Indonesia.",
  introTitle: "Lima Pilar Fundamental",
  introText:
    "Yayasan Al-Kalam Ngali Indonesia memiliki lima pilar fundamental yang menjadi dasar penguatan karakter, tata kelola, dan kualitas layanan. Nilai-nilai ini kami terapkan dalam perencanaan program, pelaksanaan kegiatan, hingga pelaporan agar manfaat yang dihasilkan semakin nyata dan berkelanjutan.",
  pillars: [
    {
      title: "Kebajikan",
      description:
        "Berorientasi pada manfaat dan kebaikan yang bisa dirasakan masyarakat melalui program yang tepat sasaran."
    },
    {
      title: "Keberkahan",
      description:
        "Menumbuhkan nilai kebaikan yang berkelanjutan, bukan hanya selesai di kegiatan tetapi berbuah dampak jangka panjang."
    },
    {
      title: "Kerukunan",
      description:
        "Menjaga harmoni dan persatuan, membangun ruang kolaborasi yang saling menghormati dalam keberagaman."
    },
    {
      title: "Silaturahim",
      description:
        "Memperkuat hubungan kekeluargaan, jejaring, dan kerja sama untuk memperluas kebaikan dan kebermanfaatan."
    },
    {
      title: "Profesional",
      description:
        "Mengutamakan integritas, disiplin, dan akuntabilitas agar program berjalan efektif, rapi, dan terpercaya."
    }
  ],
  spiritTitle: "Spirit Al-Kalam",
  spiritItems: [
    "Ummatan Wasathan",
    "Amar Ma'ruf Nahi Munkar",
    "Khairu Ummah",
  ],
  commitmentTitle: "Komitmen Kami",
  commitmentText:
    "Kami berkomitmen menerapkan nilai-nilai ini dalam setiap aspek kerja yayasan. Melalui pendidikan dan pelatihan, pengembangan program sosial entrepreneurship, serta kolaborasi lintas pihak, kami berupaya menghadirkan dampak yang bermanfaat bagi umat dan masyarakat."
};
