export type Leader = {
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
};

export type Kaprodi = {
  name: string;
  program: string;
  photo: string;
};

export type OrgStat = {
  label: string;
  value: string;
  description: string;
};

export type StrukturOrganisasiData = {
  heroTitle: string;
  heroSubtitle: string;
  orgChartDescription: string;
  leader: Leader;
  kaprodiList: Kaprodi[];
  stats: OrgStat[];
};

export const strukturOrganisasi: StrukturOrganisasiData = {
  heroTitle: "Struktur Organisasi Fakultas Psikologi",
  heroSubtitle: "Kepemimpinan yang kuat untuk masa depan yang cerah",
  orgChartDescription: "Struktur organisasi Fakultas Psikologi dirancang untuk mendukung efektivitas pengelolaan pendidikan, penelitian, dan pengabdian masyarakat. Setiap posisi memiliki peran strategis dalam mencapai visi fakultas menjadi yang terdepan dalam bidang psikologi dan ilmu sosial.",
  leader: {
    name: "Dr. Ikhwan HS, SE., M.M., M.Si",
    title: "Dekan",
    role: "Strategic Management & Leadership",
    email: "dekan.fbis@binawan.ac.id",
    phone: "+62812-9387-1570",
  },
  kaprodiList: [
    {
      name: "Muhammad Arif Abdul Hakim, S.SI., M.M.S.I",
      program: "Bisnis Digital",
      photo: "/arif.svg",
    },
    {
      name: "Mahatir Muhammad, SST, Sp.P.S.A.",
      program: "Kesejahteraan Sosial",
      photo: "/mahatir.svg",
    },
    {
      name: "Etyca Rizky Yanti, SE., M.M",
      program: "Manajemen",
      photo: "/etyca.svg",
    },
    {
      name: "Ratnasari Apriliyani, M.Psi. Psikolog",
      program: "Psikologi",
      photo: "/ratna.svg",
    },
  ],
  stats: [
    {
      label: "DEKAN",
      value: "1",
      description: "Pemimpin Tertinggi Fakultas 4 Kaprodi",
    },
    {
      label: "KAPRODI",
      value: "4",
      description: "Ketua Program Studi",
    },
    {
      label: "DOSEN",
      value: "45%",
      description: "Tenaga Pengajar Profesional",
    },
    {
      label: "TENDIK",
      value: "25%",
      description: "Tenaga Kependidikan",
    },
  ],
};
