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
  heroTitle: "Core Values Yayasan",
  heroSubtitle: "Nilai-nilai utama yang menjadi landasan dalam membentuk karakter amanah, kolaboratif, inovatif, dan bertanggung jawab dalam setiap program yayasan.",
  introTitle: "Lima Pilar Fundamental",
  introText: "Yayasan Al-Kalam Ngali Indonesia memiliki lima pilar fundamental yang menjadi dasar penguatan karakter, tata kelola, dan kualitas layanan. Nilai-nilai ini terintegrasi dalam perencanaan program, pelaksanaan kegiatan, dan pelaporan agar manfaat yang dihasilkan semakin nyata dan berkelanjutan.",
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
  commitmentText: "Kami berkomitmen untuk menerapkan nilai-nilai fundamental ini dalam setiap aspek kerja yayasan. Melalui program pendidikan, sosial, dan pemberdayaan yang tepat sasaran, kami berupaya menghadirkan dampak yang berkelanjutan dan bermanfaat bagi masyarakat."
};
