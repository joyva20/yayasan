export type ReportItem = {
  year: number;
  title: string;
  coverImageSrc?: string;
  fileHref?: string;
  disabled?: boolean;
};

export const laporanTahunan: ReportItem[] = [
  {
    year: 2024,
    title: "Laporan Tahunan Yayasan Al-Kalam Ngali Indonesia Tahun 2024",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
  {
    year: 2023,
    title: "Laporan Tahunan Yayasan Al-Kalam Ngali Indonesia Tahun 2023",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
  {
    year: 2022,
    title: "Laporan Tahunan Yayasan Al-Kalam Ngali Indonesia Tahun 2022",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
];

export const laporanKeuangan: ReportItem[] = [
  {
    year: 2024,
    title: "Laporan Keuangan dan Auditor Independen 2024",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
  {
    year: 2023,
    title: "Laporan Keuangan dan Auditor Independen 2023",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
  {
    year: 2022,
    title: "Laporan Keuangan dan Auditor Independen 2022",
    coverImageSrc: "/logo.png",
    disabled: true,
  },
];
