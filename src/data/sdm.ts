export type SDMGroup = {
  title: string;
  items: string[];
};

export type SDMPageData = {
  heroTitle: string;
  groups: SDMGroup[];
};

export const sdmPage: SDMPageData = {
  heroTitle: "SDM",
  groups: [
    {
      title: "Program Studi Kesejahteraan Sosial",
      items: [
        "Dr. Ahmad Fauzi, S.Sos., M.Si.",
        "Rina Marlina, S.Sos., M.A.",
        "Budi Santoso, S.Sos., M.Si.",
        "Siti Nurhaliza, S.Sos., M.Pd.",
        "Dedi Kurniawan, S.Sos., M.Si."
      ]
    },
    {
      title: "Program Studi Psikologi",
      items: [
        "Dr. Dwi Putri Handayani, M.Psi., Psikolog",
        "Prof. Dr. Yusuf Rahman, M.Psi.",
        "Anisa Rahma, S.Psi., M.Psi., Psikolog",
        "Ridwan Kamil, S.Psi., M.A.",
        "Maya Safitri, S.Psi., M.Psi.",
        "Agus Setiawan, S.Psi., M.Si."
      ]
    },
    {
      title: "Program Studi Manajemen",
      items: [
        "Dr. Hendra Wijaya, SE., MM.",
        "Nurul Aini, SE., M.Ak.",
        "Bambang Sutopo, SE., MBA",
        "Fitri Lestari, SE., MM.",
        "Dimas Prasetyo, SE., M.Si."
      ]
    },
    {
      title: "Program Studi Bisnis Digital",
      items: [
        "Dr. Rini Susilowati, S.Kom., M.Kom.",
        "Eko Prasetyo, S.T., M.M.",
        "Diana Puspita, S.Kom., M.T.I.",
        "Arief Budiman, S.E., M.BA.",
        "Linda Kartika, S.Kom., M.Kom."
      ]
    },
    {
      title: "Tendik",
      items: [
        "Slamet Riyadi, S.Sos.",
        "Wati Kusuma, S.Pd.",
        "Andi Permana, A.Md.",
        "Sri Wahyuni, S.E.",
        "Joko Widodo, S.Kom.",
        "Ratna Dewi, A.Md."
      ]
    }
  ]
};
