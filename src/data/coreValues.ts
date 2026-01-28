// src/data/coreValues.ts
export type CoreValue = {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
};

export const coreValues: CoreValue[] = [
  {
    title: "Kebajikan",
    description:
      "Menebarkan manfaat dan kebaikan nyata dalam setiap program dan pelayanan.",
    icon: "badge-check",
    colorClass: "green",
  },
  {
    title: "Keberkahan",
    description:
      "Menghadirkan nilai tambah yang dirasakan luas dan membawa kebaikan berkelanjutan.",
    icon: "globe",
    colorClass: "amber",
  },
  {
    title: "Kerukunan",
    description:
      "Menjaga harmoni, saling menghormati, dan menguatkan persatuan dalam keberagaman.",
    icon: "computer",
    colorClass: "blue",
  },
  {
    title: "Silaturahim",
    description:
      "Menguatkan hubungan, kepedulian, dan kolaborasi yang menumbuhkan kepercayaan.",
    icon: "globe",
    colorClass: "amber",
  },
  {
    title: "Profesional",
    description:
      "Bekerja terukur, disiplin, dan bertanggung jawab untuk hasil yang optimal.",
    icon: "badge-check",
    colorClass: "green",
  },
];
