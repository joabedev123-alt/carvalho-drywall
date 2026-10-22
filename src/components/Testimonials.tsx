import { testimonials } from "../data/company";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={`bi bi-star-fill text-sm ${index < rating ? "text-[#f4b400]" : "text-white/20"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-space bg-[#0b1522] text-foam" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="kicker-light">Testimonials</p>
          <h2 id="testimonials-title" className="display mt-3 text-[2rem] sm:text-4xl md:text-6xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
            Quality and trust approved by the people who matter most. Our clients are proof of our commitment to excellence and efficiency. See what they have to say.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((item) => (
            <li
              key={`${item.name}-${item.date}`}
              className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-4 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/30 text-xs font-medium text-[#b9d2ef] sm:h-11 sm:w-11 sm:text-sm"
                    aria-hidden="true"
                  >
                    {initials(item.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium leading-tight">{item.name}</p>
                    <p className="mt-1 text-xs text-white/50">{item.date}</p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-white/60">
                  <i className="bi bi-google text-sm" aria-hidden="true" />
                  <span className="hidden sm:inline">Google</span>
                </span>
              </div>

              <div className="mt-3 sm:mt-4">
                <Stars rating={item.rating} />
              </div>

              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/80 sm:mt-4 sm:text-base">
                “{item.text}”
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
