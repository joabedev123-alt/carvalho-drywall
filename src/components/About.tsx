import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function About() {
  return (
    <section id="about" className="bg-foam">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-[40rem]">
          <img
            src="/img/taping-crew.jpg"
            alt="Carvalho Drywall crew taping and finishing drywall on a job site."
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-4 py-12 sm:px-5 sm:py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-xl">
            <p className="kicker">About</p>
            <h2 className="display mt-3 text-[1.85rem] sm:text-4xl md:text-5xl">
              Perfection Is in the Details.
            </h2>
            <div className="mt-4 space-y-3.5 text-[0.95rem] leading-relaxed text-mute sm:mt-6 sm:space-y-5 sm:text-lg">
              <p>
                At Carvalho Drywall, perfection is in the details. From millimeter-precise alignment to a flawless finish, we deliver sophistication, speed, and top-tier quality for your project.
              </p>
              <p>
                When you are ready, send a text with your location and a short description of the work. We will review the details and talk through the next steps with you.
              </p>
            </div>
            <SmsLink message={generalSms} className="btn-solid mt-7 w-full sm:mt-8 sm:w-auto">
              <i className="bi bi-chat-left-text" aria-hidden="true" />
              Tell Us About Your Project
            </SmsLink>
          </div>
        </div>
      </div>
    </section>
  );
}
