// src/data/navLinks.ts
export type NavLinkChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href?: string;
  children?: NavLinkChild[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Profil",
    children: [
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { label: "Core Values", href: "/profil/core-values" },
      { label: "SDM", href: "/profil/sdm" },
    ],
  },
  {
    label: "Program Studi",
    children: [
      { label: "Prodi Bisnis Digital (S.Bns)", href: "/program/bisnis-digital" },
      { label: "Prodi Kesejahteraan Sosial (S.Sos)", href: "/program/kesejahteraan-sosial" },
      { label: "Prodi Manajemen (S.M)", href: "/program/manajemen" },
      { label: "Prodi Psikologi (S.Psi)", href: "/program/psikologi" },
    ],
  },
  { label: "Alumni", href: "#alumni" },
  { label: "Mitra", href: "#mitra" },
  { label: "Kontak", href: "#kontak" },
];
