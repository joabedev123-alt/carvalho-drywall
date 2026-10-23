import { pillars } from "../data/company";

export function Pillars() {
  return (
    <section className="section-space bg-navy text-foam" aria-labelledby="pillars-title">
      <div className="shell">
        <p className="kicker-light">How we work</p>
        <h2
          id="pillars-title"
          className="display mt-3 max-w-2xl text-[1.75rem] sm:text-4xl md:text-5xl"
        >
          Built on detail, trust, and quality.
        </h2>
        <div className="mt-8 grid gap-0 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`border-white/15 py-5 sm:py-8 md:px-6 md:py-2 ${
                index === 0 ? "md:pl-0" : "border-t md:border-l md:border-t-0"
              } ${index > 1 ? "xl:border-t-0" : ""}`}
            >
              <i className={`bi ${pillar.icon} text-2xl text-[#9ec2ea]`} aria-hidden="true" />
              <h3 className="mt-3 font-serif text-[1.25rem] font-medium sm:mt-5 sm:text-2xl">{pillar.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/70 sm:mt-3 sm:text-base">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
