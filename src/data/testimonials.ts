export type Testimonial = {
  name: string;
  role: string;
  position: string;
  rating: number;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmad", 
    role: "Alumni",
    position: "Staf Administrasi",
    rating: 5,
    message:
      "Pengalaman belajar sangat berkesan. Dosen suportif dan materinya relevan dengan kebutuhan kerja.",
  },
  {
    name: "Siti",
    role: "Alumni",
    position: "Analis Data",
    rating: 5,
    message:
      "Kurikulum membantu saya membangun fondasi kuat. Banyak kesempatan untuk praktik dan proyek.",
  },
  {
    name: "Rizki",
    role: "Alumni",
    position: "Wirausaha",
    rating: 4,
    message:
      "Lingkungan kampus positif dan komunitasnya solid. Saya terbantu membangun jejaring dan soft-skill.",
  },
];
