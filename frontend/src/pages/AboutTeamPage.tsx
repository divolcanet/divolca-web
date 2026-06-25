import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Member = {
  name: string;
  photo: string;
  description: string;
};

const team: Member[] = [
  {
    name: "Mohammad Hasib",
    photo: "/team/hasib.jpeg",
    description:
      "Periset bidang volcano seismology dan computational geophysics dengan fokus pada analisis aktivitas gunung api, tomografi seismik, serta pemodelan kebencanaan geologi. Dalam tim, berperan sebagai Principal Investigator yang mengoordinasikan dan mengontrol jalannya penelitian, melakukan akuisisi data lapangan, menganalisis data, serta menyusun laporan kegiatan.",
  },
  {
    name: "Sukir Maryanto",
    photo: "/team/sukir.jpg",
    description:
      "Akademisi dan pakar fisika gunung api, geofisika, seismologi, gravity, magnetik, dan mitigasi kebencanaan. Pengalaman risetnya mencakup monitoring gunung api, sistem peringatan dini, eksplorasi panas bumi, dan penguatan ketahanan bencana. Dalam tim, berperan sebagai validator interpretasi data serta melakukan analisis data seismik, gravity, dan magnetik.",
  },
  {
    name: "Aditya Pratama",
    photo: "/team/aditya.JPG",
    description:
      "Periset bidang volkanologi, geofisika, petrologi, geokimia, rock magnetism, serta volcanic hazard assessment. Memiliki pengalaman dalam kajian sistem magmatik, karakterisasi material vulkanik, dan analisis potensi bahaya gunung api. Dalam tim, berperan dalam akuisisi data lapangan, validasi data, serta analisis seismik, gravity, dan magnetik.",
  },
  {
    name: "Ade Surya Putra",
    photo: "/team/ade.jpg",
    description:
      "Periset dengan kepakaran pada kebencanaan geologi dan pengolahan data geofisika berbasis komputasi. Latar belakangnya kuat dalam fisika dan teknik geofisika, termasuk pengembangan perangkat lunak untuk analisis sinyal seismik. Dalam tim, berperan melakukan akuisisi data lapangan, mengontrol perancangan desain web, serta mengolah data berbasis pemrograman.",
  },
  {
    name: "Anjar Dwi Hariadi",
    photo: "/team/anjar.jpeg",
    description:
      "Praktisi dan pengembang bidang rekayasa perangkat lunak dengan pengalaman pada pengembangan sistem berbasis teknologi, machine learning, dan desain aplikasi. Dalam tim, berperan sebagai pengembang teknis yang merancang kerangka kerja website serta membuat, merancang, dan mendesain website.",
  },
  {
    name: "Muhammad Aufaristama",
    photo: "/team/aufa.jpg",
    description:
      "Pakar remote sensing, GIS, geospatial cloud computing, big data, time-series analysis, dan pemodelan bahaya geologi. Pengalamannya mencakup pemanfaatan citra satelit, data geospasial, dan aplikasi web untuk visualisasi hasil riset kebencanaan. Dalam tim, berperan dalam perancangan desain web, validasi website, serta pengolahan data fotogrametri dan satelit berbasis pemrograman.",
  },
  {
    name: "Hanif 'Izzuddin Zakly",
    photo: "/team/hanif.jpeg",
    description:
      "Periset muda bidang geofisika dengan pengalaman pada pemetaan geologi, geokimia, sifat magnetik batuan, serta eksplorasi REE pada material vulkanik. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta mendukung perancangan website.",
  },
  {
    name: "Arif Nur Rohman",
    photo: "/team/arif.jpeg",
    description:
      "Periset bidang geofisika dengan latar belakang teknik geofisika dan pengalaman pada kegiatan ekspedisi geologi darat untuk mitigasi bencana serta pengelolaan sumber daya geologi. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta membantu perancangan website.",
  },
  {
    name: "Syafrizal Hidayat",
    photo: "/team/syafrizal.jpeg",
    description:
      "Periset bidang oseanografi dengan pengalaman pada pengembangan geoportal, instrumentasi oseanografi, pengukuran pasang surut, suhu permukaan laut, serta kegiatan kebencanaan pesisir dan tsunami. Dalam tim, berperan melakukan akuisisi data lapangan serta membuat dan merancang desain website.",
  },
  {
    name: "Fadlu Rijal",
    photo: "/team/fadlu.jpeg",
    description:
      "Periset bidang geofisika dengan latar belakang teknik geofisika, seismologi eksplorasi, dan geofisika perminyakan. Berpengalaman pada ekspedisi geologi dan eksplorasi geofisika, akuisisi, pemrosesan, hingga interpretasi data geofisika untuk analisis bawah permukaan penemuan cadangan energi. Dalam tim, berperan melakukan akuisisi data lapangan serta pengolahan dan analisis data lapangan.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function MemberPhoto({ name, photo }: { name: string; photo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-volcanic-800 flex items-center justify-center font-oswald text-3xl text-magma-400 shrink-0">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setFailed(true)}
      className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-magma-500 shrink-0"
    />
  );
}

const AUTO_ADVANCE_MS = 5000;

export default function AboutTeamPage() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (newIndex: number) => {
    const total = team.length;
    setIndex(((newIndex % total) + total) % total);
  };

  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % team.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goPrev();
    else if (deltaX < -50) goNext();
    touchStartX.current = null;
  };

  const member = team[index];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
        Tentang Tim
      </h1>
      <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl mb-12">
        Tim peneliti DiVolca terdiri dari para akademisi dan praktisi
        geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak
        yang berkolaborasi untuk memahami struktur bawah permukaan Pegunungan
        Dieng dan menyajikannya dalam platform informasi geospasial ini.
      </p>

      <div
        className="relative max-w-3xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Sebelumnya"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2 rounded-full bg-volcanic-800 hover:bg-volcanic-700 border border-volcanic-700 text-volcanic-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          key={member.name}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left bg-volcanic-900 border border-volcanic-800 rounded-2xl p-8 sm:p-10"
        >
          <MemberPhoto name={member.name} photo={member.photo} />
          <div>
            <span className="text-xs font-medium text-magma-400 tracking-wide uppercase">
              {index + 1} / {team.length}
            </span>
            <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mt-1">
              {member.name}
            </h2>
            <p className="text-sm text-volcanic-400 leading-relaxed mt-3">
              {member.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Selanjutnya"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2 rounded-full bg-volcanic-800 hover:bg-volcanic-700 border border-volcanic-700 text-volcanic-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {team.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ke profil ${m.name}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "bg-magma-400 w-6" : "bg-volcanic-700 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}