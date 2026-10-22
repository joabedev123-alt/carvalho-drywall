import { useState, type FormEvent } from "react";
import { company, generalSms, services, states } from "../data/company";
import { buildSmsHref, hasPhone } from "../lib/sms";
import { CopyPhone } from "./CopyPhone";
import { SmsLink } from "./SmsLink";

type Fields = {
  name: string;
  state: string;
  city: string;
  service: string;
  description: string;
};

const empty: Fields = {
  name: "",
  state: "",
  city: "",
  service: "",
  description: "",
};

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(next: Fields) {
    const found: Partial<Record<keyof Fields, string>> = {};
    if (!next.name.trim()) found.name = "Enter your name.";
    if (!next.state) found.state = "Select a state.";
    if (!next.city.trim()) found.city = "Enter the city.";
    if (!next.service) found.service = "Select a service.";
    if (!next.description.trim()) found.description = "Add a short description of the project.";
    return found;
  }

  function compose(next: Fields) {
    const serviceLabel =
      next.service === "unsure"
        ? "a project"
        : services.find((item) => item.id === next.service)?.smsName ?? "a project";
    return `Hi! I'm ${next.name.trim()}. I would like to discuss ${serviceLabel} in ${next.city.trim()}, ${next.state}.\n\n${next.description.trim()}`;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setReady(null);
      return;
    }
    const message = compose(fields);
    setReady(message);
    setCopied(false);
    const href = buildSmsHref(message);
    if (href) window.location.href = href;
  }

  async function copyMessage() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(ready);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="section-space relative overflow-hidden bg-[#06101b] text-foam">
      <img
        src="/img/interior.jpg"
        alt=""
        width={1400}
        height={952}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[#06101b]/80" />
      <div className="shell relative grid items-start gap-10 sm:gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="kicker-light">Contact</p>
          <h2 className="display mt-3 text-[2rem] sm:text-4xl md:text-6xl">
            Let’s Talk About Your Next Project.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 sm:mt-5 sm:text-lg">
            Send us a text with your location and a few details about what you need. We’ll take it from there.
          </p>

          {hasPhone() ? (
            <div className="mt-7 sm:mt-8">
              <p className="font-serif text-[1.75rem] tracking-tight sm:text-4xl md:text-5xl">{company.phoneDisplay}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <SmsLink message={generalSms} className="btn-inverse w-full sm:w-auto">
                  <i className="bi bi-chat-left-text" aria-hidden="true" />
                  Text Us to Get Started
                </SmsLink>
                <CopyPhone className="btn-ghost-light w-full sm:w-auto" />
              </div>
              <p className="mt-4 hidden max-w-md text-sm leading-relaxed text-white/65 md:block">
                On a computer, copy the number and send the text from your phone. Text Us opens the messaging app when your device supports it.
              </p>
            </div>
          ) : (
            <p className="mt-8 border border-amber-200/40 bg-amber-100/10 p-4 text-sm" role="status">
              Phone number pending. Add the confirmed number in src/data/company.ts before publishing SMS links.
            </p>
          )}

          <ul className="mt-8 space-y-3 text-white/80">
            {company.email ? (
              <li>
                <a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${company.email}`}>
                  <i className="bi bi-envelope" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
            ) : null}
            <li>
              <a
                className="inline-flex items-center gap-3 hover:text-white"
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" aria-hidden="true" />
                Facebook
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <i className="bi bi-clock" aria-hidden="true" />
              {company.hours}
            </li>
            <li className="inline-flex items-center gap-3">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              {company.locality}, {company.region}
            </li>
          </ul>
        </div>

        <form
          className="border border-white/10 bg-foam p-5 text-ink shadow-soft sm:p-6 md:p-8"
          onSubmit={onSubmit}
          noValidate
        >
          <h3 className="font-serif text-[1.65rem] font-medium sm:text-3xl">Prepare your text</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            This form does not send anything by itself. Continue in Messages opens your messaging app with the note filled in. You finish sending it there.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="contact-name"
                className="field"
                name="name"
                autoComplete="name"
                value={fields.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                onChange={(event) => update("name", event.target.value)}
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-1 text-sm text-red-800">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-state" className="text-sm font-medium">
                State
              </label>
              <select
                id="contact-state"
                className="field"
                name="state"
                autoComplete="address-level1"
                value={fields.state}
                aria-invalid={Boolean(errors.state)}
                aria-describedby={errors.state ? "contact-state-error" : undefined}
                onChange={(event) => update("state", event.target.value)}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.abbr} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state ? (
                <p id="contact-state-error" className="mt-1 text-sm text-red-800">
                  {errors.state}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-city" className="text-sm font-medium">
                City
              </label>
              <input
                id="contact-city"
                className="field"
                name="city"
                autoComplete="address-level2"
                value={fields.city}
                aria-invalid={Boolean(errors.city)}
                aria-describedby={errors.city ? "contact-city-error" : undefined}
                onChange={(event) => update("city", event.target.value)}
              />
              {errors.city ? (
                <p id="contact-city-error" className="mt-1 text-sm text-red-800">
                  {errors.city}
                </p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-service" className="text-sm font-medium">
                Service
              </label>
              <select
                id="contact-service"
                className="field"
                name="service"
                value={fields.service}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "contact-service-error" : undefined}
                onChange={(event) => update("service", event.target.value)}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
                <option value="unsure">Not sure yet</option>
              </select>
              {errors.service ? (
                <p id="contact-service-error" className="mt-1 text-sm text-red-800">
                  {errors.service}
                </p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-description" className="text-sm font-medium">
                Project description
              </label>
              <textarea
                id="contact-description"
                className="field min-h-28 resize-y"
                name="description"
                value={fields.description}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? "contact-description-error" : undefined}
                onChange={(event) => update("description", event.target.value)}
              />
              {errors.description ? (
                <p id="contact-description-error" className="mt-1 text-sm text-red-800">
                  {errors.description}
                </p>
              ) : null}
            </div>
          </div>

          <button type="submit" className="btn-solid mt-8 w-full" disabled={!hasPhone()}>
            <i className="bi bi-chat-left-text" aria-hidden="true" />
            Continue in Messages
          </button>

          {ready ? (
            <div className="mt-6 border border-ink/10 bg-paper p-4" role="status">
              <p className="font-medium">Your message is ready</p>
              <p className="mt-1 text-sm text-mute">
                Finish sending it in your messaging app. This page does not send the message for you.
              </p>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed">{ready}</pre>
              <button type="button" className="btn-ghost mt-4" onClick={copyMessage}>
                <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"}`} aria-hidden="true" />
                {copied ? "Message copied" : "Copy Message"}
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
