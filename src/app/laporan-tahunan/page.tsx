import ReportGrid from "@/components/reports/ReportGrid";
import { laporanTahunan } from "@/data/reports";

export default function LaporanTahunanPage() {
  return (
    <ReportGrid
      title="Laporan Tahunan"
      description="Pada laman ini, kami sampaikan laporan kegiatan yang dilakukan selama satu tahun dalam bentuk Laporan Tahunan. Dokumen dapat diperbarui sewaktu-waktu."
      reports={laporanTahunan}
    />
  );
}
