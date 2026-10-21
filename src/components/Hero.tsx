import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy text-foam min-h-[min(100svh,52rem)] md:min-h-[calc(100svh-5.25rem)]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[60%_center] md:object-center"
        poster="/img/hangs.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/img/hangs.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/88 to-[#05080d]/40 md:bg-gradient-to-r md:from-[#05080d] md:via-[#05080d]/75 md:to-[#05080d]/20" />

      <div className="shell relative flex min-h-[min(100svh,52rem)] items-end pb-[7.5rem] pt-8 sm:pb-32 sm:pt-12 md:min-h-[calc(100svh-5.25rem)] md:items-center md:py-24 md:pb-24">
        <div className="w-full max-w-2xl">
          <p className="kicker-light">Drywall &amp; Interior Finishing</p>
          <h1 className="display mt-3 text-[1.95rem] leading-[1.1] sm:mt-4 sm:text-[2.75rem] md:text-6xl lg:text-[4.4rem]">
            Drywall hangs and finishes for a clean, paint-ready interior.
          </h1>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            We handle hangs, taping, plasterings, and paintings for homes and commercial spaces.
          </p>
          <p className="mt-3 font-serif text-base italic leading-snug text-white/90 sm:mt-5 sm:text-xl">
            Serving Massachusetts, Vermont, Maine &amp; New Hampshire.
          </p>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <SmsLink message={generalSms} className="btn-inverse w-full sm:w-auto">
              <i className="bi bi-chat-left-text" aria-hidden="true" />
              Text Us About Your Project
            </SmsLink>
            <a href="#services" className="btn-ghost-light w-full sm:w-auto">
              Explore Our Services
              <i className="bi bi-arrow-down" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-6">
            Prefer texting? Send us a message to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
