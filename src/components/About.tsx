import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function About() {
  return (
    <section id="about" className="bg-foam">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[40rem]">
          <img
            src="/img/finishing.jpg"
            alt="A finisher smoothing compound on an interior wall. Illustrative imagery."
            width={1200}
            height={1800}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-4 py-14 sm:px-5 sm:py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-xl">
            <p className="kicker">About</p>
            <h2 className="display mt-3 text-[2rem] sm:text-4xl md:text-5xl">
              A Thoughtful Approach to Every Project.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-mute sm:mt-6 sm:space-y-5 sm:text-lg">
              <p>
                Carvalho Drywall Service Corporation works on the surfaces that shape a room: the walls and the ceilings. That includes drywall installation and repair, taping and finishing, plaster, and interior painting for homes and commercial spaces.
              </p>
              <p>
                Each project starts with a clear look at what the space needs. Seams, edges, and repairs are handled with care, and the surrounding area is treated with respect while the work is underway. When you are ready, send a text with the location and a short description. We will review the details and talk through the next steps with you.
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
