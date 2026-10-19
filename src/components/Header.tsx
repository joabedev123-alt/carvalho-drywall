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
      <div className="shell flex h-[4.5rem] items-center justify-between gap-3 sm:h-[5.25rem] sm:gap-4">
        <a href="#home" className="shrink-0" aria-label="Carvalho Drywall, home" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Carvalho Drywall"
            width={478}
            height={268}
            className="h-11 w-auto sm:h-14 md:h-[4.25rem]"
          />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CopyPhone className="btn border border-white/20 text-sm text-foam hover:border-white/50" />
          <SmsLink message={generalSms} className="btn-inverse">
            <i className="bi bi-chat-left-text" aria-hidden="true" />
            Text Us
          </SmsLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-2xl lg:hidden"
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
        className="fixed inset-x-0 bottom-0 top-[calc(4.5rem+env(safe-area-inset-top))] z-50 overflow-y-auto border-t border-white/10 bg-[#000308] lg:hidden"
        style={{ paddingBottom: "calc(5.75rem + env(safe-area-inset-bottom))" }}
      >
        <nav className="shell flex flex-col py-2" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="min-h-14 border-b border-white/10 py-4 text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className="mt-5 text-sm text-white/70">{company.phoneDisplay}</p>
          <div className="mt-4 flex flex-col gap-3 pb-6">
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
