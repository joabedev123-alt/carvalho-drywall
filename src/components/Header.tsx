import { useEffect, useState } from "react";
import { company, generalSms, nav } from "../data/company";
import { CopyPhone } from "./CopyPhone";
import { SmsLink } from "./SmsLink";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#000308] text-foam"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-[4rem] w-full max-w-[88rem] flex-nowrap items-center gap-2.5 px-3.5 sm:h-[4.75rem] sm:gap-4 sm:px-6 lg:gap-5 lg:px-8">
        <a
          href="#home"
          className="min-w-0 shrink"
          aria-label="Carvalho Drywall, home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Carvalho Drywall"
            width={478}
            height={268}
            className="h-9 w-auto max-w-[10.5rem] object-contain object-left sm:h-11 sm:max-w-none lg:h-12"
          />
        </a>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-3 xl:gap-5 2xl:gap-6 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-[0.8125rem] text-white/80 transition-colors hover:text-white xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 flex-nowrap items-center gap-2 lg:flex xl:gap-3">
          <CopyPhone
            label="Copy Number"
            copiedLabel="Copied"
            className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap border border-white/20 px-3 text-[0.8125rem] text-foam transition-colors hover:border-white/50 xl:px-3.5"
          />
          <SmsLink
            message={generalSms}
            className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap bg-foam px-3.5 text-[0.8125rem] font-medium text-navy transition-colors hover:bg-white xl:px-4"
          >
            <i className="bi bi-chat-left-text" aria-hidden="true" />
            Text Us
          </SmsLink>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center text-2xl lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] z-50 overflow-y-auto overscroll-contain border-t border-white/10 bg-[#000308] sm:top-[calc(4.75rem+env(safe-area-inset-top))] lg:hidden"
        style={{ paddingBottom: "calc(6rem + env(safe-area-inset-bottom))" }}
      >
        <nav className="shell flex flex-col py-1" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-12 items-center border-b border-white/10 py-3.5 text-[1.05rem] sm:min-h-14 sm:py-4 sm:text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className="mt-4 text-sm text-white/70 sm:mt-5">{company.phoneDisplay}</p>
          <div className="mt-3 flex flex-col gap-2.5 pb-6 sm:mt-4 sm:gap-3">
            <CopyPhone className="btn-ghost-light w-full" />
            <SmsLink message={generalSms} className="btn-inverse w-full">
              <i className="bi bi-chat-left-text" aria-hidden="true" />
              Text Us
            </SmsLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
