import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy text-foam"
      style={{ minHeight: "calc(100svh - 4.5rem - env(safe-area-inset-top))" }}
    >
      <img
        src="/img/hero.jpg"
        alt="A worker fastening drywall to wood framing. Illustrative imagery."
        width={1800}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-[62%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/85 to-[#05080d]/35 md:bg-gradient-to-r md:from-[#05080d] md:via-[#05080d]/75 md:to-[#05080d]/20" />

      <div
        className="shell relative flex items-end pb-28 pt-10 sm:pb-32 sm:pt-14 md:items-center md:py-24 md:pb-24"
        style={{ minHeight: "calc(100svh - 4.5rem - env(safe-area-inset-top))" }}
      >
        <div className="w-full max-w-2xl">
          <p className="kicker-light">Drywall &amp; Interior Finishing</p>
          <h1 className="display mt-3 text-[2.15rem] sm:mt-4 sm:text-[2.75rem] md:text-6xl lg:text-[4.4rem]">
            Drywall installed and finished for a clean, paint-ready interior.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            We hang and repair drywall, tape and finish joints, plaster walls and ceilings, and paint interiors for homes and commercial spaces.
          </p>
          <p className="mt-4 font-serif text-lg italic leading-snug text-white/90 sm:mt-5 sm:text-xl">
            Serving Massachusetts, Vermont, Maine &amp; New Hampshire.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
            <SmsLink message={generalSms} className="btn-inverse w-full sm:w-auto">
              <i className="bi bi-chat-left-text" aria-hidden="true" />
              Text Us About Your Project
            </SmsLink>
            <a href="#services" className="btn-ghost-light w-full sm:w-auto">
              Explore Our Services
              <i className="bi bi-arrow-down" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:mt-6">
            Prefer texting? Send us a message to get started.
          </p>
        </div>
      </div>
      <p className="absolute bottom-[5.75rem] right-4 text-[0.65rem] uppercase tracking-[0.14em] text-white/50 sm:bottom-28 sm:right-5 md:bottom-6 md:right-8 md:text-[0.68rem] md:tracking-[0.16em] md:text-white/55">
        Illustrative imagery
      </p>
    </section>
  );
}
