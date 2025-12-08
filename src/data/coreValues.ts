// src/data/coreValues.ts
export type CoreValue = {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
};

export const coreValues: CoreValue[] = [
  {
    title: "Internasional",
    description:
      "Kurikulum berstandar internasional dengan peluang pertukaran mahasiswa",
    icon: "globe",
    colorClass: "amber",
  },
  {
    title: "Digital",
    description:
      "Pembelajaran dengan teknologi terdepan dan platform digital modern",
    icon: "computer",
    colorClass: "blue",
  },
  {
    title: "Berakhlak",
    description:
      "Pembentukan karakter dan nilai-nilai akhlak mulia dalam setiap aspek pendidikan",
    icon: "badge-check",
    colorClass: "green",
  },
];
