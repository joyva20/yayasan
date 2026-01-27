// src/data/stats.ts
export type StatItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const stats = [
  {
    label: "Program Berjalan",
    value: "10+",
    icon: "graduation-cap",
  },
  {
    label: "Penerima Manfaat",
    value: "500+",
    icon: "users",
  },
  {
    label: "Mitra & Komunitas",
    value: "20+",
    icon: "globe",
  },
  {
    label: "Relawan Aktif",
    value: "50+",
    icon: "user-check",
  },
];
