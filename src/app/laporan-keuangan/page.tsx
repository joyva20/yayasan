import ReportGrid from "@/components/reports/ReportGrid";
import { laporanKeuangan } from "@/data/reports";

export default function LaporanKeuanganPage() {
  return (
    <ReportGrid
      title="Laporan Keuangan"
      description="Pada laman ini, kami sampaikan laporan keuangan dan auditor independen yang melengkapi laporan tahunan. Dokumen dapat diperbarui sewaktu-waktu."
      reports={laporanKeuangan}
    />
  );
}
