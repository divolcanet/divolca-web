import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Reveal({
  children,
  delay = 200,
  visible: controlledVisible,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  visible?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    setIntersected(false);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controlledVisible]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: intersected ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        intersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
