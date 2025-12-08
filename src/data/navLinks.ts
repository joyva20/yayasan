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
  { label: "Program", href: "#program" },
  { label: "Alumni", href: "#alumni" },
  { label: "Mitra", href: "#mitra" },
  { label: "Kontak", href: "#kontak" },
];
