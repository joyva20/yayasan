import type { ProgramStudiData } from "./programStudi";

export const manajemen: ProgramStudiData = {
  id: "manajemen",
  title: "Prodi Manajemen (S.M)",
  subtitle: "Program Studi Manajemen Universitas Binawan",
  description: [],
  kurikulum: {
    standar: "Standar Nasional Pendidikan Tinggi (SN-DIKTI)",
    pendekatan: "Outcome-Based Education (OBE)",
    ciriKhas: "Digital Healthcare",
    keunggulan: [
      "Kurikulum berbasis kompetensi dengan KKNI",
      "Melaksanakan kegiatan seminasi sesuai trending topic seperti Pinjol, Bitcoin, Digital Marketing, Tips dan Trik Wawancara Kerja",
      "Dosen handal dan perkuliahan dalam bahasa Inggris",
      "Kesempatan magang di luar negeri",
      "Kurikulum standar internasional",
      "Beasiswa",
      "Program Study Now Pay Later"
    ]
  },
  jenisProgram: {
    reguler: {
      title: "Program Reguler",
      description: "Program Reguler: 09.00-17.00 WIB"
    },
    karyawan: {
      title: "Program Transfer",
      description: "Program Transfer: 16.00-21.00 WIB"
    }
  },
  prospekKarir: [
    "Manajemen Pengelolaan Rumah Sakit (Hospital Management)",
    "Manajemen SDM (Human Capital) Rumah Sakit",
    "Manajemen Kualitas Jasa & Marketing Rumah Sakit",
    "Desain Business Process Rumah Sakit",
    "Manajemen Keuangan Rumah Sakit",
    "Startup Founder",
    "Technopreneur"
  ],
  pdfPath: "/jadwal-manajemen.pdf"
};

export const kurikulumManajemen = {
  description: "Kurikulum mengacu pada Standar Nasional Pendidikan Tinggi (SN-DIKTI) dan berbasis pada pendekatan Outcome-Based Education (OBE). Ciri khas kurikulum ini adalah integrasi Digital Healthcare sebagai kekuatan utama, serta penekanan pada praktik technopreneurship dan kolaborasi lintas disiplin."
};
