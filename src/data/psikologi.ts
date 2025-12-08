import type { ProgramStudiData } from "./programStudi";

export const psikologi: ProgramStudiData = {
  id: "psikologi",
  title: "Prodi Psikologi (S.Psi)",
  subtitle: "Program Studi Psikologi Universitas Binawan",
  description: [],
  kurikulum: {
    standar: "Himpunan Penyelenggara Perguruan Tinggi",
    pendekatan: "Asosiasi Penyelenggara Pendidikan Tinggi Psikologi Indonesia (AP2TPI)",
    ciriKhas: "Psikologi Terapan",
    keunggulan: [
      "Kurikulum mengacu pada Himpunan Penyelenggara Perguruan Tinggi",
      "Asosiasi Penyelenggara Pendidikan Tinggi Psikologi Indonesia (AP2TPI)",
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
    "Asisten Psikologi",
    "Influencer Bidang",
    "Konselor Psikologi",
    "Content Creator",
    "Konsultan Bidan",
    "Tenaga Kerja SDM, Komunitas"
  ],
  pdfPath: "/jadwal-psikologi.pdf"
};
