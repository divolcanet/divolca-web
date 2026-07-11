import { toast } from "sonner";
import { Button } from "./ui/button";
import researchData from "../data/research";
import { Copy } from "lucide-react";

const Citation = () => {
  return (
    <div className=" bg-accent-200 px-7 py-10 flex flex-col justify-center rounded-2xl space-y-8">
      <h1 className="font-fraunces font-bold text-primary-10 text-2xl">
        Sitasi
      </h1>

      <div className=" w-full overflow-x-auto bg-accent p-5 text-white rounded-xl">
        <pre>
          <code>{researchData.bibtex}</code>
        </pre>
      </div>

      <Button
        className=" w-fit"
        onClick={() =>
          navigator.clipboard
            .writeText(researchData.bibtex)
            .then(() => toast.success("Berhasil copy ke clipboard"))
        }
      >
        Copy BibTex
        <Copy className="w-5 h-5" strokeWidth={3} />
      </Button>
    </div>
  );
};

export default Citation;
