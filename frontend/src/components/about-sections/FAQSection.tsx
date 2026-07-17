import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Reveal } from "../ui/reveal";
import faqs from "../../data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <Reveal>
        <h2 className="font-fraunces text-3xl font-bold text-title text-center mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-center leading-relaxed mb-12 mx-auto text-dim">
          Kumpulan pertanyaan yang sering diajukan seputar DiVolca dan Kompleks
          Vulkanik Dieng.
        </p>
      </Reveal>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={faq.question} delay={300 + index * 100}>
              <div
                aria-expanded={isOpen}
                className="group rounded-full aria-expanded:rounded-4xl aria-expanded:border-2 aria-expanded:border-primary-10 bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium font-fraunces text-body">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 text-magma-400 transition-transform",
                      isOpen ? "rotate-180" : "",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-dim leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
