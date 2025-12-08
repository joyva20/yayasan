import { bisnisDigital, type ProgramStudiData } from "./programStudi";

export const kesejahteraanSosial: ProgramStudiData = {
  id: "kesejahteraan-sosial",
  title: "Prodi Kesejahteraan Sosial (S.Sos)",
  subtitle: "Program Studi Kesejahteraan Sosial Universitas Binawan",
  description: [
    "Program Studi Kesejahteraan Sosial Universitas Binawan dirancang untuk menghasilkan lulusan yang profesional dan berdaya saing global dalam pekerjaan sosial bidang layanan kesehatan.",
  ],
  kurikulum: {
    standar: "Standar Nasional Pendidikan Tinggi (SN-DIKTI)",
    pendekatan: "Outcome-Based Education (OBE)",
    ciriKhas: "Pekerjaan Sosial di Bidang Layanan Kesehatan",
    keunggulan: [
      "Kurikulum pekerjaan sosial generalis bidang kesehatan",
      "Semua dosen telah tersertifikasi bidang kesejahteraan sosial",
      "Dosen sebagai asesor Badan Akreditasi Lembaga Kesejahteraan Sosial (BALKS) dan Lembaga Sertifikasi Pekerja Sosial (LSP) Kementerian Sosial",
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
      title: "Program Transfer/Pindahan (RPL)",
      description: "Program Transfer/Pindahan (RPL): 16.00-21.00 WIB"
    }
  },
  prospekKarir: [
    "Social Work In Health",
    "Case Worker",
    "Community Worker",
    "Manager of Social Service Organization",
    "Social Welfare Policy",
    "Social Work Researcher"
  ],
  pdfPath: "/jadwal-kesos.pdf"
};

export const visiMisi = {
  visi: "Menjadi Program Studi Kesejahteraan Sosial unggulan dengan menghasilkan lulusan yang profesional dan berdaya saing Global dalam Pekerjaan Sosial bidang layanan kesehatan.",
  misi: [
    "Menyelenggarakan Program Studi S-1 Kesejahteraan Sosial yang berkualitas, kompetitif dan memperhatikan perkembangan permasalahan sosial yang memiliki kekhasan pekerjaan sosial di bidang layanan kesehatan",
    "Mengembangkan sistem pembelajaran yang menekankan pada kajian sosial masyarakat yang berbasis teori dan praktik pekerjaan sosial di bidang layanan kesehatan",
    "Mengembangkan penelitian yang berkontribusi pada kemajuan ilmu, kebijakan dan program kesejahteraan sosial khususnya pendekatan individu, keluarga, kelompok, serta masyarakat di bidang layanan kesehatan",
    "Melakukan pengabdian masyarakat berbasis pengembangan dan pendayagunaan sistem sumber kesejahteraan sosial di bidang layanan kesehatan",
    "Meningkatkan keikutsertaan dan kerjasama pada aktifitas keilmuan kesejahteraan sosial di bidang layanan kesehatan."
  ],
  strategi: [
    "Menyelenggarakan Prodi yang berkualitas, terhadap isu sosial dalam layanan kesehatan",
    "Mengembangkan sistem pembelajaran yang menekankan integrasi teori dan praktik",
    "Mengembangkan penelitian yang berkontribusi pada ilmu, kebijakan, dan program kesejahteraan sosial"
  ]
};

export const programStudiList: ProgramStudiData[] = [
  bisnisDigital,
  kesejahteraanSosial
];
