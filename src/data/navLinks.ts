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
      { label: "Sambutan Ketua Pengurus", href: "#sambutan" },
      { label: "Sejarah", href: "#sejarah" },
      { label: "Struktur Organisasi", href: "#struktur-organisasi" },
    ],
  },
  { label: "Kontak", href: "#kontak" },
];
