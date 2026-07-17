import { Reveal } from "../ui/reveal";

const websiteInfo = {
  tentang: {
    title: "Tentang Website",
    content:
      "DiVolca (Dieng Volcanic Complex) adalah platform informasi geospasial yang dikembangkan oleh tim peneliti gabungan akademisi dan praktisi geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak. Platform ini menyajikan hasil penelitian struktur bawah permukaan Pegunungan Dieng dalam bentuk visualisasi 3D, data gravity, magnetik, dan seismik, agar mudah diakses oleh publik, akademisi, maupun pihak yang berkepentingan dalam mitigasi bencana.",
  },
  tujuan: {
    title: "Tujuan Website",
    content:
      "DiVolca bertujuan menjembatani hasil riset geofisika yang kompleks dengan masyarakat umum, sehingga data struktur bawah permukaan, sejarah aktivitas vulkanik, dan potensi bahaya di kawasan Dieng dapat dipahami secara visual dan mudah diakses, sekaligus mendukung upaya mitigasi bencana di kawasan tersebut.",
  },
};

export default function TentangWebsiteSection() {
  return (
    <div className=" space-y-12">
      {Object.values(websiteInfo).map((item, i) => (
        <Reveal key={item.title} delay={200 + i * 100}>
          <div>
            <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
              {item.title}
            </h1>
            <p>{item.content}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
