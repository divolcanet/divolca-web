import { toast } from "sonner";
import { Button, buttonVariants } from "./ui/button";
import researchData from "../data/research";
import { ArrowRight, Copy } from "lucide-react";
import { cn } from "../lib/utils";
import { t } from "../data/translations";
import { useLanguage } from "../data/translations/LanguageContext";

const Citation = () => {
  const { lang } = useLanguage();
  return (
    <div className=" bg-accent dark:bg-accent-100 px-7 py-10 flex flex-col justify-center rounded-2xl space-y-8">
      <h1 className="font-fraunces font-bold text-primary-10 text-2xl">Sitasi</h1>

      <div className=" space-y-12">
        {researchData.bibtex.map((bibtex, i) => (
          <div key={`bib-${i}`} className=" space-y-3">
            <div className=" w-full overflow-x-auto bg-card p-5 text-body rounded-xl">
              <pre>
                <code>{bibtex.text}</code>
              </pre>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className=" w-fit text-white" onClick={() => navigator.clipboard.writeText(bibtex.text).then(() => toast.success("Berhasil copy ke clipboard"))}>
                Copy BibTex
                <Copy className="w-5 h-5" strokeWidth={3} />
              </Button>

              <a href={bibtex.url} className={cn(buttonVariants(), " w-fit")}>
                {t.research.accessPaper[lang]}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citation;
