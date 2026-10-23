import { testimonials } from "../data/company";

function GoogleMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7 12.9 19.6C14.7 15.1 18.9 12 24 12c3.1 0 5.8 1.1 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.5l.1-.1 6.3 5.3C39 36.8 44 32 44 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

function Stars({ rating, className = "text-sm" }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={`bi bi-star-fill ${index < rating ? "text-[#f4b400]" : "text-ink/20"}`}
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
    <section id="testimonials" className="section-space bg-paper text-ink" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-brand/50 sm:w-14" />
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="h-px w-10 bg-brand/50 sm:w-14" />
          </div>

          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-brand">Reviews</p>

          <h2
            id="testimonials-title"
            className="display mt-3 text-[1.85rem] text-navy sm:text-4xl md:text-[3.25rem]"
          >
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-3.5 max-w-2xl text-[0.92rem] leading-relaxed text-mute sm:mt-5 sm:text-lg">
            Quality and trust approved by the people who matter most. Our clients are proof of our commitment to excellence and efficiency. See what they have to say.
          </p>

          <div className="mt-5 flex flex-col items-center gap-2 text-sm text-mute sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-2">
            <span className="inline-flex items-center gap-2">
              <GoogleMark className="h-5 w-5" />
              <span className="font-semibold text-ink">5.0</span>
              <Stars rating={5} className="text-[0.85rem]" />
            </span>
            <span className="text-center text-mute sm:text-left">
              <span className="hidden sm:inline">• </span>More than 5 Google reviews
            </span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl sm:mt-12">
          <div className="rounded-2xl border border-ink/10 bg-white px-5 py-8 text-center shadow-soft sm:rounded-[1.75rem] sm:px-10 sm:py-12">
            <GoogleMark className="mx-auto h-11 w-11 sm:h-14 sm:w-14" />
            <p className="mt-4 flex items-center justify-center gap-2 font-serif text-4xl font-medium tracking-tight text-navy sm:mt-5 sm:text-6xl">
              5.0
              <i className="bi bi-star-fill text-2xl text-brand sm:text-4xl" aria-hidden="true" />
            </p>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-mute sm:mt-4 sm:text-base">
              Rated by <span className="font-semibold text-ink">more than 5</span> customers on Google
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          <li className="border border-ink/10 bg-white/70 px-4 py-4 text-center sm:py-5">
            <Stars rating={5} className="justify-center text-base" />
            <p className="mt-2 font-serif text-base text-navy sm:text-lg">5-Star Reviews</p>
          </li>
          <li className="border border-ink/10 bg-white/70 px-4 py-4 text-center sm:py-5">
            <i className="bi bi-hourglass-split text-2xl text-brand" aria-hidden="true" />
            <p className="mt-2 font-serif text-base text-navy sm:text-lg">Years of Experience</p>
          </li>
          <li className="border border-ink/10 bg-white/70 px-4 py-4 text-center sm:py-5">
            <i className="bi bi-people text-2xl text-brand" aria-hidden="true" />
            <p className="mt-2 font-serif text-base text-navy sm:text-lg">Satisfied Clients</p>
          </li>
        </ul>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((item) => (
            <li
              key={`${item.name}-${item.date}`}
              className="flex h-full min-w-0 flex-col border border-ink/10 bg-white p-3.5 shadow-soft sm:p-6"
            >
              <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[0.7rem] font-medium text-brand sm:h-11 sm:w-11 sm:text-sm"
                    aria-hidden="true"
                  >
                    {initials(item.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[0.95rem] font-medium leading-tight text-navy sm:text-base">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] text-mute sm:mt-1 sm:text-xs">{item.date}</p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-mute">
                  <i className="bi bi-google text-sm text-[#4285F4]" aria-hidden="true" />
                  <span className="hidden sm:inline">Google</span>
                </span>
              </div>

              <div className="mt-2.5 sm:mt-4">
                <Stars rating={item.rating} />
              </div>

              <p className="mt-2.5 flex-1 break-words text-[0.9rem] leading-relaxed text-mute sm:mt-4 sm:text-base">
                “{item.text}”
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
