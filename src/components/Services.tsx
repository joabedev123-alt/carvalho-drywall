import { services, serviceSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function Services() {
  return (
    <section id="services" className="section-space bg-paper">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="kicker">Services</p>
          <h2 className="display mt-3 text-[2rem] sm:text-4xl md:text-6xl">
            Professional Services. Exceptional Attention to Detail.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-mute sm:mt-5 sm:text-lg">
            From the first board to the final coat of paint, each service is handled with care for homes and commercial spaces.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-12 sm:mt-16 sm:gap-20 md:mt-24 md:gap-28">
          {services.map((service, index) => {
            const imageFirst = index % 2 === 1;
            const feature = index === 2;
            return (
              <article
                key={service.id}
                className={
                  feature
                    ? "grid items-stretch gap-6 sm:gap-8 lg:grid-cols-12"
                    : "grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16"
                }
              >
                <div className={feature ? "lg:col-span-7" : imageFirst ? "lg:order-first" : "lg:order-last"}>
                  <figure className="relative overflow-hidden border border-ink/10 bg-ink/5 shadow-soft">
                    {service.video ? (
                      <video
                        className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                        poster={service.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={service.alt}
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={service.image}
                        alt={service.alt}
                        width={service.width}
                        height={service.height}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                      />
                    )}
                    {!service.realMedia ? (
                      <figcaption className="absolute bottom-3 left-3 bg-navy/75 px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-white/80">
                        Illustrative imagery
                      </figcaption>
                    ) : null}
                  </figure>
                </div>
                <div className={feature ? "flex flex-col justify-center lg:col-span-5" : ""}>
                  <p className="font-serif text-sm tracking-[0.18em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <i className={`bi ${service.icon} mt-5 text-2xl text-brand`} aria-hidden="true" />
                  <h3 className="display mt-4 text-[1.75rem] sm:text-3xl md:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mute sm:mt-4 sm:text-lg">{service.summary}</p>
                  <SmsLink
                    message={serviceSms(service.smsName)}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-brand hover:text-brand sm:mt-7"
                  >
                    Ask About This Service
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </SmsLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
