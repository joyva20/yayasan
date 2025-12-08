export type ProgramStudiData = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  kurikulum: {
    standar: string;
    pendekatan: string;
    ciriKhas: string;
    keunggulan: string[];
  };
  jenisProgram: {
    reguler: {
      title: string;
      description: string;
    };
    karyawan: {
      title: string;
      description: string;
    };
  };
  prospekKarir: string[];
  pdfPath?: string;
};

export const bisnisDigital: ProgramStudiData = {
  id: "bisnis-digital",
  title: "Prodi Bisnis Digital (S.Bns)",
  subtitle: "Program Studi Bisnis Digital Universitas Binawan",
  description: [
    "Program Studi Bisnis Digital Universitas Binawan dirancang untuk membekali mahasiswa dengan kompetensi menyeluruh di era transformasi digital, dengan kekhasan pada bidang Digital Healthcare. Kurikulum disusun berbasis KKNI dan OBE, serta mengintegrasikan pembelajaran teknologi terkini seperti Artificial Intelligence (AI), Big Data, Blockchain, Internet of Things (IoT), ERP, dan Digital Marketing.",
    "Mahasiswa akan dilatih tidak hanya dalam hard skill seperti Product Management, Data Analytics, UI/UX Design, Design Thinking, tetapi juga dalam soft skill seperti kepemimpinan, kewirausahaan, tanggung jawab sosial, dan kerja tim. Didukung oleh dosen yang berasal dari kalangan akademisi dan praktisi industri, program ini juga membuka kesempatan mendapatkan sertifikasi kompetensi (BNSP) di bidang Digital Marketing dan Data Analytics.",
    "Lulusan program ini diharapkan siap berkarir secara global sebagai profesional digital maupun memulai bisnis digitalnya sendiri. Mahasiswa akan menempuh total 146 SKS dan memperoleh gelar Sarjana Bisnis (S.Bns)."
  ],
  kurikulum: {
    standar: "Standar Nasional Pendidikan Tinggi (SN-DIKTI)",
    pendekatan: "Outcome-Based Education (OBE)",
    ciriKhas: "Digital Healthcare",
    keunggulan: [
      "Berbasis KKNI dan OBE",
      "Pembelajaran teknologi terkini: AI, Big Data, Blockchain, IoT, Digital Marketing",
      "Kelas kolaboratif dan interdisipliner",
      "Pembelajaran blended/hybrid untuk fleksibilitas maksimal",
      "Dosen praktisi industri dan akademisi berpengalaman",
      "Sertifikasi BNSP*: Digital Marketing dan Data Analytics",
      "Fokus pada pengembangan karier dan kesiapan kerja global"
    ]
  },
  jenisProgram: {
    reguler: {
      title: "Program Reguler",
      description: "Program sarjana jenjang S1 yang ditujukan bagi lulusan SMA/SMK atau sederajat."
    },
    karyawan: {
      title: "Program Karyawan (Hybrid)",
      description: "Dirancang untuk profesional atau karyawan aktif yang ingin meningkatkan kompetensi di bidang bisnis digital, dengan sistem pembelajaran blended learning untuk fleksibilitas maksimal."
    }
  },
  prospekKarir: [
    "Digital Product Manager",
    "Digital Marketing Manager",
    "Digital Business Consultant",
    "Analis Data",
    "Content Creator",
    "Digipreneur"
  ],
  pdfPath: "/jadwal-bisnis-digital.pdf"
};

export const programStudiList: ProgramStudiData[] = [bisnisDigital];
