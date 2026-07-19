import { Reveal } from "../ui/reveal";
import { useLanguage } from "../../data/translations/LanguageContext";

const websiteInfo = {
  tentang: {
    title: { id: "Tentang Website", en: "About This Website" },
    content: {
      id: "DiVolca (Dieng Volcanic Complex) adalah platform informasi geospasial yang dikembangkan oleh tim peneliti gabungan akademisi dan praktisi geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak. Platform ini menyajikan hasil penelitian struktur bawah permukaan Pegunungan Dieng dalam bentuk visualisasi 3D, data gravity, magnetik, dan seismik, agar mudah diakses oleh publik, akademisi, maupun pihak yang berkepentingan dalam mitigasi bencana.",
      en: "DiVolca (Dieng Volcanic Complex) is a geospatial information platform developed by a team of researchers combining academics and practitioners in geophysics, volcanology, oceanography, and software engineering. The platform presents research results on the subsurface structure of the Dieng Mountains in 3D visualizations, gravity, magnetic, and seismic data, making them accessible to the public, academics, and those involved in disaster mitigation.",
    },
  },
  tujuan: {
    title: { id: "Tujuan Website", en: "Website Goals" },
    content: {
      id: "DiVolca bertujuan menjembatani hasil riset geofisika yang kompleks dengan masyarakat umum, sehingga data struktur bawah permukaan, sejarah aktivitas vulkanik, dan potensi bahaya di kawasan Dieng dapat dipahami secara visual dan mudah diakses, sekaligus mendukung upaya mitigasi bencana di kawasan tersebut.",
      en: "DiVolca aims to bridge complex geophysical research with the general public, making subsurface structure data, volcanic activity history, and hazard potential in the Dieng area visually understandable and accessible, while supporting disaster mitigation efforts in the region.",
    },
  },
};

export default function TentangWebsiteSection() {
  const { lang } = useLanguage();
  return (
    <div className=" space-y-12">
      {Object.values(websiteInfo).map((item, i) => (
        <Reveal key={item.title.id} delay={200 + i * 100}>
          <div>
            <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
              {item.title[lang]}
            </h1>
            <p>{item.content[lang]}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
