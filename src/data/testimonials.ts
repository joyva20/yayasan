// src/data/testimonials.ts
export type Testimonial = {
  name: string;
  role: string;
  position: string;
  message: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "Alumni Kesejahteraan Sosial 2022",
    position: "Social Worker at NGO Internasional",
    message:
      "FBIS mengajarkan saya untuk tidak hanya berpikir secara akademis, tetapi juga memiliki empati dan kepedulian sosial yang tinggi. Ini sangat membantu dalam karir saya sebagai pekerja sosial.",
    rating: 5,
  },
  {
    name: "Siti Rahma",
    role: "Alumni Administrasi Bisnis 2021",
    position: "Business Analyst at Tech Startup",
    message:
      "Kurikulum yang update dengan kebutuhan industri membuat saya siap kerja sejak lulus. Pengajar yang berpengalaman juga memberikan insight yang sangat berharga.",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    role: "Alumni Manajemen 2020",
    position: "Project Manager at Multinational Company",
    message:
      "Pembelajaran digital dan praktik langsung di FBIS membekali saya dengan skill yang dibutuhkan di era modern. Terima kasih FBIS!",
    rating: 5,
  },
];
