export type Leader = {
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
};

export type ManagementMember = {
  name: string;
  title: string;
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
  management: ManagementMember[];
  stats: OrgStat[];
};

export const strukturOrganisasi: StrukturOrganisasiData = {
  heroTitle: "Struktur Organisasi Yayasan",
  heroSubtitle: "Kepengurusan yang amanah untuk dampak berkelanjutan",
  orgChartDescription: "Struktur organisasi Yayasan Al-Kalam Ngali Indonesia disusun untuk mendukung efektivitas pengelolaan program pendidikan, sosial, dan pemberdayaan. Setiap peran memiliki tanggung jawab yang jelas untuk memastikan kegiatan berjalan transparan dan tepat sasaran.",
  leader: {
    name: "Nama Ketua Pengurus",
    title: "Ketua Pengurus",
    role: "Koordinasi kepengurusan dan arah strategis program",
    email: "contoh@contoh.ac.id",
    phone: "+62 812-9387-1569",
  },
  management: [
    { name: "Nama Ketua Pengurus", title: "Ketua Pengurus" },
    { name: "Nama Sekretaris", title: "Sekretaris" },
    { name: "Nama Bendahara", title: "Bendahara" },
  ],
  stats: [
    {
      label: "PENGURUS",
      value: "1",
      description: "Pengurus inti yayasan",
    },
    {
      label: "PROGRAM",
      value: "10+",
      description: "Program/kegiatan berjalan",
    },
    {
      label: "RELAWAN",
      value: "50+",
      description: "Relawan aktif",
    },
    {
      label: "PENERIMA",
      value: "500+",
      description: "Penerima manfaat",
    },
  ],
};
