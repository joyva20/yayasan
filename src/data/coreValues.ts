// src/data/coreValues.ts
export type CoreValue = {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
};

export const coreValues: CoreValue[] = [
  {
    title: "Amanah",
    description:
      "Menjaga kepercayaan melalui integritas, transparansi, dan akuntabilitas.",
    icon: "globe",
    colorClass: "amber",
  },
  {
    title: "Peduli",
    description:
      "Mendahulukan empati dan kebermanfaatan untuk sesama.",
    icon: "computer",
    colorClass: "blue",
  },
  {
    title: "Berkelanjutan",
    description:
      "Membangun program yang konsisten, terukur, dan berdampak jangka panjang.",
    icon: "badge-check",
    colorClass: "green",
  },
];
