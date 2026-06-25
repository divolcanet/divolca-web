const factSheet = [
  { label: "Lokasi", value: "Jawa Tengah, Indonesia" },
  { label: "Koordinat", value: "7,2° LS; 109,879° BT" },
  { label: "Ketinggian", value: "± 2.565 m di atas permukaan laut" },
  { label: "Nomor GVP", value: "263200" },
  { label: "Status Terkini", value: "Level I / Normal (per 9 Februari 2026)" },
];

const eruptionHistory = [
  { year: "1964", note: "Erupsi gas beracun di Kawah Sinila, menimbulkan korban jiwa." },
  { year: "1979", note: "Letusan gas CO2 di kompleks kawah, ratusan warga mengungsi." },
  { year: "2017", note: "Peningkatan aktivitas vulkanik dan kenaikan suhu kawah." },
  { year: "2021", note: "Aktivitas kegempaan meningkat, status dinaikkan sementara." },
  { year: "Des 2024 - Jan 2025", note: "Periode peningkatan aktivitas vulkanik dipantau intensif." },
  { year: "Jun 2025", note: "Fluktuasi aktivitas kawah teramati, status dievaluasi ulang." },
  { year: "Feb 2026", note: "Status dikonfirmasi pada Level I / Normal." },
];

export default function AboutDiengPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
        Tentang Dieng
      </h1>

      <div className="prose prose-invert max-w-none">
        <h2 className="font-oswald text-2xl font-semibold text-magma-400 mb-4">
          Dataran Tinggi Vulkanik dengan Jejak Alam dan Budaya
        </h2>
        <p className="text-volcanic-300 leading-relaxed text-lg">
          Dieng merupakan kompleks vulkanik aktif yang terletak di perbatasan
          Kabupaten Banjarnegara dan Wonosobo, Jawa Tengah. Secara geologis,
          kawasan ini terbentuk dari rangkaian gunung api yang membentuk
          dataran tinggi dengan banyak kawah aktif, danau, dan sumber panas
          bumi. Keunikan struktur bawah permukaannya menjadikan Dieng salah
          satu kawasan vulkanik yang paling banyak diteliti di Indonesia,
          baik dari sisi geofisika, geologi, maupun potensi energi
          geotermalnya.
        </p>
        <p className="text-volcanic-300 leading-relaxed mt-4">
          Kawasan ini juga diakui sebagai geoheritage dengan 23 situs warisan
          geologi, mencakup kawah-kawah bersejarah seperti Sileri, Timbang,
          Warna, Candradimuka, Sikidang, Siglagah, Sinila, dan Sumur. Selain
          nilai geologisnya, Dieng menyimpan jejak budaya yang kaya, dengan
          kompleks candi Hindu yang dibangun sejak abad ke-9, menjadikannya
          kawasan yang memadukan warisan alam dan budaya sekaligus.
        </p>

        <h2 className="font-oswald text-2xl font-semibold text-magma-400 mt-10 mb-4">
          Fakta Utama
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-volcanic-800">
            <tbody>
              {factSheet.map((row) => (
                <tr key={row.label} className="border-b border-volcanic-800">
                  <th className="py-3 px-4 text-volcanic-100 font-medium whitespace-nowrap">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-volcanic-300">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-oswald text-2xl font-semibold text-magma-400 mt-10 mb-4">
          Riwayat Erupsi
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-volcanic-800">
            <thead>
              <tr className="border-b border-volcanic-800">
                <th className="py-3 px-4 text-volcanic-100 font-medium whitespace-nowrap">
                  Tahun
                </th>
                <th className="py-3 px-4 text-volcanic-100 font-medium">
                  Catatan
                </th>
              </tr>
            </thead>
            <tbody>
              {eruptionHistory.map((row) => (
                <tr key={row.year} className="border-b border-volcanic-800">
                  <td className="py-3 px-4 text-volcanic-300 whitespace-nowrap">
                    {row.year}
                  </td>
                  <td className="py-3 px-4 text-volcanic-300">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-oswald text-2xl font-semibold text-magma-400 mt-10 mb-4">
          Keselamatan Pengunjung
        </h2>
        <p className="text-volcanic-300 leading-relaxed">
          Beberapa kawah di Dieng mengeluarkan gas vulkanik beracun, sehingga
          pengunjung disarankan mengikuti jalur dan zona aman yang ditentukan,
          tidak berlama-lama di area kawah aktif, serta selalu memantau status
          aktivitas vulkanik terkini sebelum melakukan perjalanan ke kawasan
          ini.
        </p>
      </div>
    </section>
  );
}