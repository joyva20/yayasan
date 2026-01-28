// src/data/navLinks.ts
export type NavLinkChild = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type NavLink = {
  label: string;
  href?: string;
  children?: NavLinkChild[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Tentang Kami",
    children: [
      { label: "Sambutan Pengurus", href: "#sambutan" },
      { label: "Latar Belakang", href: "#latar-belakang" },
      { label: "Visi & Misi", href: "#visi-misi" },
      { label: "Pengurus Yayasan", href: "#struktur-organisasi" },
      { label: "Core Values", href: "#core-values" },
      
    ],
  },
  {
    label: "Bidang Usaha",
    children: [
      { label: "Bidang Usaha 1", href: "/bidang-usaha#bidang-1" },
      { label: "Bidang Usaha 2", href: "/bidang-usaha#bidang-2" },
      { label: "Bidang Usaha 3", href: "/bidang-usaha#bidang-3" },
    ],
  },
  { label: "Legal", href: "/legal" },
  { label: "Laporan Tahunan", href: "/laporan-tahunan" },
  { label: "Laporan Keuangan", href: "/laporan-keuangan" },
  { label: "Kontak", href: "#kontak" },
];
