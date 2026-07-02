import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hasib from "../assets/team/hasib.jpeg";
import sukir from "../assets/team/sukir.jpg";
import aditya from "../assets/team/aditya.jpeg";
import anjar from "../assets/team/anjar.jpeg";
import aufa from "../assets/team/aufa.jpg";
import hanif from "../assets/team/hanif.jpeg";
import arif from "../assets/team/arif.jpeg";
import syafrizal from "../assets/team/syafrizal.jpeg";
import fadlu from "../assets/team/fadlu.jpeg";
import Container from "../components/ui/container";
import { Reveal } from "../components/ui/reveal";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";

type Member = {
  name: string;
  photo?: string;
  description: string;
};

const team: Member[] = [
  {
    name: "Mohammad Hasib",
    photo: hasib,
    description:
      "Periset bidang volcano seismology dan computational geophysics dengan fokus pada analisis aktivitas gunung api, tomografi seismik, serta pemodelan kebencanaan geologi. Dalam tim, berperan sebagai Principal Investigator yang mengoordinasikan dan mengontrol jalannya penelitian, melakukan akuisisi data lapangan, menganalisis data, serta menyusun laporan kegiatan.",
  },
  {
    name: "Sukir Maryanto",
    photo: sukir,
    description:
      "Akademisi dan pakar fisika gunung api, geofisika, seismologi, gravity, magnetik, dan mitigasi kebencanaan. Pengalaman risetnya mencakup monitoring gunung api, sistem peringatan dini, eksplorasi panas bumi, dan penguatan ketahanan bencana. Dalam tim, berperan sebagai validator interpretasi data serta melakukan analisis data seismik, gravity, dan magnetik.",
  },
  {
    name: "Aditya Pratama",
    photo: aditya,
    description:
      "Periset bidang volkanologi, geofisika, petrologi, geokimia, rock magnetism, serta volcanic hazard assessment. Memiliki pengalaman dalam kajian sistem magmatik, karakterisasi material vulkanik, dan analisis potensi bahaya gunung api. Dalam tim, berperan dalam akuisisi data lapangan, validasi data, serta analisis seismik, gravity, dan magnetik.",
  },
  {
    name: "Ade Surya Putra",
    description:
      "Periset dengan kepakaran pada kebencanaan geologi dan pengolahan data geofisika berbasis komputasi. Latar belakangnya kuat dalam fisika dan teknik geofisika, termasuk pengembangan perangkat lunak untuk analisis sinyal seismik. Dalam tim, berperan melakukan akuisisi data lapangan, mengontrol perancangan desain web, serta mengolah data berbasis pemrograman.",
  },
  {
    name: "Anjar Dwi Hariadi",
    photo: anjar,
    description:
      "Praktisi dan pengembang bidang rekayasa perangkat lunak dengan pengalaman pada pengembangan sistem berbasis teknologi, machine learning, dan desain aplikasi. Dalam tim, berperan sebagai pengembang teknis yang merancang kerangka kerja website serta membuat, merancang, dan mendesain website.",
  },
  {
    name: "Muhammad Aufaristama",
    photo: aufa,
    description:
      "Pakar remote sensing, GIS, geospatial cloud computing, big data, time-series analysis, dan pemodelan bahaya geologi. Pengalamannya mencakup pemanfaatan citra satelit, data geospasial, dan aplikasi web untuk visualisasi hasil riset kebencanaan. Dalam tim, berperan dalam perancangan desain web, validasi website, serta pengolahan data fotogrametri dan satelit berbasis pemrograman.",
  },
  {
    name: "Hanif 'Izzuddin Zakly",
    photo: hanif,
    description:
      "Periset muda bidang geofisika dengan pengalaman pada pemetaan geologi, geokimia, sifat magnetik batuan, serta eksplorasi REE pada material vulkanik. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta mendukung perancangan website.",
  },
  {
    name: "Arif Nur Rohman",
    photo: arif,
    description:
      "Periset bidang geofisika dengan latar belakang teknik geofisika dan pengalaman pada kegiatan ekspedisi geologi darat untuk mitigasi bencana serta pengelolaan sumber daya geologi. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta membantu perancangan website.",
  },
  {
    name: "Syafrizal Hidayat",
    photo: syafrizal,
    description:
      "Periset bidang oseanografi dengan pengalaman pada pengembangan geoportal, instrumentasi oseanografi, pengukuran pasang surut, suhu permukaan laut, serta kegiatan kebencanaan pesisir dan tsunami. Dalam tim, berperan melakukan akuisisi data lapangan serta membuat dan merancang desain website.",
  },
  {
    name: "Fadlu Rijal",
    photo: fadlu,
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

function MemberPhoto({
  name,
  photo,
  onPrev,
  onNext,
}: {
  name: string;
  photo?: string;
  onPrev: VoidFunction;
  onNext: VoidFunction;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative">
      <div className=" w-full aspect-square overflow-hidden rounded-xl border-2 border-primary-10 flex items-center justify-center font-fraunces text-3xl ">
        {failed || !photo ? (
          getInitials(name)
        ) : (
          <img
            src={photo}
            alt={name}
            onError={() => setFailed(true)}
            className=" w-full h-full object-cover"
          />
        )}
      </div>

      <Button
        size="icon"
        variant="outline"
        onClick={onPrev}
        className=" bg-white absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10"
      >
        <ChevronLeft />
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={onNext}
        className=" bg-white absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10"
      >
        <ChevronRight />
      </Button>
    </div>
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
    <Container className=" bg-primary-fg">
      <Reveal>
        <h1 className="font-fraunces text-4xl font-bold text-primary-75 text-center mb-8">
          Tentang Tim
        </h1>
        <p className="text-center leading-relaxed mb-12 mx-auto">
          Tim peneliti DiVolca terdiri dari para akademisi dan praktisi
          geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak
          yang berkolaborasi untuk memahami struktur bawah permukaan Pegunungan
          Dieng dan menyajikannya dalam platform informasi geospasial ini.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className=" flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="flex-1 w-full">
            <MemberPhoto
              name={member.name}
              photo={member.photo}
              onPrev={goPrev}
              onNext={goNext}
            />
          </div>
          <div className=" text-center md:text-start flex-2 flex flex-col gap-5 items-center md:items-start">
            <span className="text-xs font-medium font-mono text-magma-400 tracking-wide uppercase">
              {index + 1} / {team.length}
            </span>
            <h2 className="font-fraunces text-2xl font-semibold text-volcanic-50 ">
              {member.name}
            </h2>
            <p className="text-sm text-volcanic-400 leading-relaxed">
              {member.description}
            </p>

            <div className="flex items-center w-fit gap-2">
              {team.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ke profil ${m.name}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? " bg-primary-10 w-6" : "bg-muted w-2.5",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
