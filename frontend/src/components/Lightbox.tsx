import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function Lightbox({
  src,
  caption,
  onClose,
  closeLabel,
}: {
  src: string;
  caption?: string;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-page/95 flex items-center justify-center p-4" onClick={onClose}>
      <Button onClick={onClose} aria-label={closeLabel} size="icon" variant="outline" className="absolute top-4 right-4 bg-white">
        <X />
      </Button>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={caption ?? ""} className="w-full max-h-[80vh] object-contain rounded-lg" />
        {caption && <p className=" text-white text-center mt-4">{caption}</p>}
      </div>
    </div>
  );
}
