import { generalSms, steps } from "../data/company";
import { SmsLink } from "./SmsLink";

export function Process() {
  return (
    <section className="section-space bg-[#e9e3d9]" aria-labelledby="process-title">
      <div className="shell">
        <p className="kicker">How it works</p>
        <h2
          id="process-title"
          className="display mt-3 max-w-2xl text-[2rem] sm:text-4xl md:text-5xl"
        >
          Three straightforward steps.
        </h2>
        <ol className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3 md:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`md:px-8 ${index === 0 ? "md:pl-0" : "border-t border-ink/10 pt-8 md:border-l md:border-t-0 md:border-ink/15 md:pt-0"}`}
            >
              <p className="font-serif text-4xl text-brand/80 sm:text-5xl">{step.number}</p>
              <h3 className="mt-3 font-serif text-xl font-medium sm:mt-4 sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-mute sm:mt-3 sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <SmsLink message={generalSms} className="btn-solid mt-10 w-full sm:mt-12 sm:w-auto">
          <i className="bi bi-chat-left-text" aria-hidden="true" />
          Start With a Text
        </SmsLink>
      </div>
    </section>
  );
}
