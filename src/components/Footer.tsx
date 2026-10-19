import { company, nav, services, states } from "../data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000308] pb-[calc(7rem+env(safe-area-inset-bottom))] pt-14 text-foam sm:pt-16 md:pb-16">
      <div className="shell grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src="/logo.png" alt="Carvalho Drywall" width={478} height={268} className="h-14 w-auto sm:h-16" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70 sm:mt-5">{company.description}</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-white/50">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-white/80 hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-white/50">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <a className="text-sm text-white/80 hover:text-white" href="#services">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-white/50">Service areas</h2>
          <ul className="mt-4 space-y-2">
            {states.map((state) => (
              <li key={state.abbr} className="text-sm text-white/80">
                {state.name}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-white/80">{company.phoneDisplay}</p>
          {company.email ? <p className="mt-1 text-sm text-white/70">{company.email}</p> : null}
          <a
            className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            href={company.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" aria-hidden="true" />
            Facebook
          </a>
        </div>
      </div>
      <div className="shell mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
        © {year} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
