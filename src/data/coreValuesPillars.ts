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
  commitmentTitle: string;
  commitmentText: string;
};

export const coreValuesPage: CoreValuesPageData = {
  heroTitle: "Core Values Fakultas Psikologi",
  heroSubtitle: "Nilai-nilai fundamental yang menjadi landasan dalam membentuk karakter unggul, kolaboratif, inovatif, dan bertanggung jawab bagi seluruh civitas akademika.",
  introTitle: "Lima Pilar Fundamental",
  introText: "Fakultas Psikologi Universitas Binawan memiliki lima pilar fundamental yang menjadi dasar pengembangan karakter dan kompetensi mahasiswa. Nilai-nilai ini terintegrasi dalam setiap aspek pembelajaran, penelitian, dan pengabdian masyarakat untuk menghasilkan lulusan yang berkualitas dan berdaya saing tinggi.",
  pillars: [
    {
      title: "Excellence",
      description: "Komitmen untuk mencapai standar tertinggi dalam pendidikan, penelitian, dan layanan akademik dengan terus berinovasi dan meningkatkan kualitas."
    },
    {
      title: "Collaboration",
      description: "Membangun kerja sama yang solid antar civitas akademika, institusi, dan masyarakat untuk menciptakan ekosistem pembelajaran yang saling mendukung."
    },
    {
      title: "Innovation",
      description: "Mendorong kreativitas dan pemikiran out-of-the-box dalam menghadapi tantangan global serta mengembangkan solusi yang relevan dan berkelanjutan."
    },
    {
      title: "Responsibility",
      description: "Bertanggung jawab terhadap dampak sosial, lingkungan, dan profesional dari setiap tindakan dan keputusan yang diambil sebagai insan akademik."
    }
  ],
  commitmentTitle: "Komitmen Kami",
  commitmentText: "Kami berkomitmen untuk terus mengembangkan dan mengimplementasikan nilai-nilai fundamental ini dalam setiap aspek kehidupan akademik. Melalui pendidikan yang berkualitas, penelitian yang inovatif, dan pengabdian masyarakat yang berdampak, kami berupaya membentuk generasi yang tidak hanya unggul secara intelektual, tetapi juga memiliki karakter yang kuat, empati yang tinggi, dan dedikasi untuk berkontribusi positif bagi masyarakat dan bangsa."
};
