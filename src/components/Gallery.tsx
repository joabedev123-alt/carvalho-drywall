import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { gallery } from "../data/company";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  function open(next: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setIndex(next);
  }

  function close() {
    setIndex(null);
    triggerRef.current?.focus();
  }

  function step(direction: number) {
    setIndex((current) => {
      if (current === null) return current;
      return (current + direction + gallery.length) % gallery.length;
    });
  }

  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  function trapTab(event: ReactKeyboardEvent) {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"));
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const active = index === null ? null : gallery[index];

  return (
    <section id="work" className="section-space bg-paper">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="kicker">Our Work</p>
          <h2 className="display mt-3 text-[2rem] sm:text-4xl md:text-6xl">Our Work</h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 sm:text-lg">
            Take a closer look at the details from hangs, taping, plasterings, and paintings on our job sites.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {gallery.map((item, itemIndex) => {
            return (
              <li key={item.src + item.caption + itemIndex}>
                <button
                  type="button"
                  className="group relative block h-full w-full overflow-hidden border border-ink/10 text-left shadow-soft"
                  onClick={(event) => open(itemIndex, event.currentTarget)}
                >
                  {item.video ? (
                    <video
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      poster={item.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-hidden="true"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy/80 to-transparent p-3 text-foam sm:p-4">
                    <span className="mt-1 block font-serif text-lg sm:text-xl">{item.caption}</span>
                    <i
                      className={`bi ${item.video ? "bi-play-circle" : "bi-arrows-fullscreen"} text-lg`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {active && index !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#05080d]/92 p-3 sm:p-4 md:p-8"
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingBottom: "calc(5.75rem + env(safe-area-inset-bottom))",
          }}
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-full w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={trapTab}
          >
            <div className="mb-2.5 flex items-center justify-between gap-3 text-foam sm:mb-3 sm:gap-4">
              <p id={titleId} className="min-w-0 truncate font-serif text-base sm:text-xl">
                {active.caption}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/30"
                onClick={close}
              >
                <i className="bi bi-x-lg" aria-hidden="true" />
                <span className="sr-only">Close media</span>
              </button>
            </div>
            {active.video ? (
              <video
                className="max-h-[min(62vh,32rem)] w-full object-contain sm:max-h-[72vh]"
                poster={active.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src={active.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="max-h-[min(62vh,32rem)] w-full object-contain sm:max-h-[72vh]"
              />
            )}
            <div className="mt-2.5 flex items-center justify-between text-sm text-white/75 sm:mt-3">
              <p>
                {index + 1} / {gallery.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/30"
                  onClick={() => step(-1)}
                >
                  <i className="bi bi-chevron-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/30"
                  onClick={() => step(1)}
                >
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
