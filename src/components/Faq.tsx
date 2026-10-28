import { useId, useState } from "react";
import { faqs } from "../data/company";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="section-space bg-foam" aria-labelledby="faq-title">
      <div className="shell grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="kicker">Questions</p>
          <h2
            id="faq-title"
            className="display mt-3 text-[1.85rem] sm:text-4xl md:text-5xl"
          >
            Before you send a text.
          </h2>
        </div>
        <div className="border-t border-ink/15">
          {faqs.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const expanded = open === index;
            return (
              <div key={item.question} className="border-b border-ink/15">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-start justify-between gap-3 py-3.5 text-left font-serif text-[1.1rem] leading-snug sm:items-center sm:gap-6 sm:py-5 sm:text-2xl"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="pr-2">{item.question}</span>
                    <i
                      className={`bi ${expanded ? "bi-dash" : "bi-plus"} mt-0.5 shrink-0 text-xl text-brand`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!expanded}
                >
                  <p className="max-w-2xl pb-4 text-[0.9rem] leading-relaxed text-mute sm:pb-6 sm:text-base">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
