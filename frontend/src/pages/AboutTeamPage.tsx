import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../components/ui/container";
import { Reveal } from "../components/ui/reveal";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import researchData from "../data/research";

const team = researchData.teams;

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
  }, [index]);

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
    <Container className=" bg-page">
      <Reveal>
        <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
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
