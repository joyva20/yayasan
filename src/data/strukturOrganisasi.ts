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
  subtitle?: string;
  bio?: string[];
  imageSrc?: string;
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
  heroTitle: "Pengurus Yayasan",
  heroSubtitle: "Kepengurusan yang amanah untuk dampak berkelanjutan",
  orgChartDescription: "Pengurus Yayasan Al-Kalam Ngali Indonesia disusun untuk mendukung efektivitas pengelolaan program pendidikan, sosial, dan pemberdayaan. Setiap peran memiliki tanggung jawab yang jelas untuk memastikan kegiatan berjalan transparan dan tepat sasaran.",
  leader: {
    name: "Nama Ketua Pengurus",
    title: "Ketua Pengurus",
    role: "Koordinasi kepengurusan dan arah strategis program",
    email: "contoh@contoh.ac.id",
    phone: "+62 812-9387-1569",
  },
  management: [
    {
      name: "Nama Ketua Pengurus",
      title: "Ketua Pengurus",
      subtitle: "Ketua Pengurus",
      imageSrc: "/ikhwan.jpeg",
      bio: [
        "Profil singkat Ketua Pengurus akan ditampilkan di sini.",
        "Silakan kirimkan foto dan biografi singkat (2–4 paragraf) untuk ditampilkan seperti contoh.",
      ],
    },
    {
      name: "Nama Sekretaris",
      title: "Sekretaris",
      subtitle: "Sekretaris",
      imageSrc: "/logo.png",
      bio: [
        "Profil singkat Sekretaris akan ditampilkan di sini.",
        "Silakan kirimkan foto dan biografi singkat (1–3 paragraf).",
      ],
    },
    {
      name: "Nama Bendahara",
      title: "Bendahara",
      subtitle: "Bendahara",
      imageSrc: "/logo.png",
      bio: [
        "Profil singkat Bendahara akan ditampilkan di sini.",
        "Silakan kirimkan foto dan biografi singkat (1–3 paragraf).",
      ],
    },
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
