// src/data/stats.ts
export type StatItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const stats = [
  {
    label: "Program Studi",
    value: "4",
    icon: "graduation-cap",
  },
  {
    label: "Mahasiswa Aktif",
    value: "2000+",
    icon: "users",
  },
  {
    label: "Mitra Internasional",
    value: "50+",
    icon: "globe",
  },
  {
    label: "Tingkat Kelulusan",
    value: "95%",
    icon: "user-check",
  },
];
