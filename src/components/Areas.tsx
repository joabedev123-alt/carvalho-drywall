import { useState } from "react";
import { states } from "../data/company";

const paths: Record<(typeof states)[number]["name"], string> = {
  Maine:
    "M247.4 461.1 L238.8 454.0 L240.0 444.2 L228.7 432.8 L224.1 302.3 L220.6 238.2 L251.3 224.6 L246.2 217.5 L257.9 202.3 L269.9 195.2 L267.6 189.3 L278.8 180.0 L275.3 162.6 L282.3 136.5 L293.2 127.8 L297.5 100.1 L352.2 24.0 L365.1 27.3 L365.8 45.7 L375.2 52.3 L398.1 41.4 L412.4 41.4 L422.5 34.3 L442.4 50.1 L454.0 63.1 L454.8 174.6 L453.2 201.2 L477.7 208.3 L474.2 219.7 L480.4 230.6 L475.4 240.4 L485.5 255.6 L498.7 252.3 L511.5 287.7 L496.7 303.4 L488.2 297.4 L481.2 308.3 L471.1 305.6 L469.9 314.8 L456.7 313.7 L435.7 334.9 L430.7 320.3 L423.3 319.2 L426.8 334.9 L410.5 342.6 L406.6 330.1 L398.9 336.6 L380.6 336.6 L380.2 321.9 L369.3 325.2 L371.3 335.5 L361.2 357.2 L363.1 363.2 L349.9 375.2 L336.7 370.8 L328.9 383.3 L318.1 385.0 L309.1 395.3 L298.3 393.1 L295.1 382.2 L279.2 399.6 L283.5 410.5 L271.8 414.3 L271.1 423.6 L257.9 435.0 L247.4 461.1 Z",
  "New Hampshire":
    "M220.6 238.2 L224.1 302.3 L228.7 432.8 L240.0 444.2 L238.8 454.0 L247.4 461.1 L239.2 479.6 L232.2 477.9 L213.2 487.7 L205.4 496.9 L123.1 493.7 L116.9 486.1 L117.6 471.4 L123.9 466.0 L123.1 451.8 L128.5 410.0 L141.0 390.4 L147.2 368.1 L153.4 360.0 L153.0 335.5 L176.7 326.3 L188.3 309.4 L181.7 293.1 L191.4 276.8 L190.7 267.0 L200.8 241.4 L217.1 244.2 L220.6 238.2 Z",
  Vermont:
    "M190.7 267.0 L191.4 276.8 L181.7 293.1 L188.3 309.4 L176.7 326.3 L153.0 335.5 L153.4 360.0 L147.2 368.1 L141.0 390.4 L128.5 410.0 L123.1 451.8 L123.9 466.0 L117.6 471.4 L116.9 486.1 L123.1 493.7 L65.6 492.1 L64.8 483.4 L67.2 414.9 L55.9 398.6 L59.8 390.4 L53.6 363.2 L61.7 343.1 L63.7 324.1 L57.1 306.1 L60.9 287.7 L60.2 267.0 L133.6 268.1 L190.7 267.0 Z",
  Massachusetts:
    "M232.2 477.9 L239.2 479.6 L241.9 496.9 L238.8 511.1 L227.6 524.1 L227.2 539.3 L242.7 541.5 L252.0 557.3 L250.5 569.8 L258.2 573.1 L259.0 584.5 L278.8 594.3 L301.8 585.0 L296.7 598.6 L262.9 610.6 L250.5 611.1 L243.1 601.9 L231.4 604.6 L231.1 611.7 L217.9 616.0 L212.4 598.1 L210.5 594.8 L203.1 587.7 L199.2 564.4 L188.7 564.4 L169.7 565.4 L169.7 563.8 L80.8 562.2 L50.1 561.1 L48.5 557.3 L65.6 492.1 L123.1 493.7 L205.4 496.9 L213.2 487.7 L232.2 477.9 Z",
};

const labels: Record<(typeof states)[number]["name"], { x: number; y: number }> = {
  Maine: { x: 390, y: 180 },
  "New Hampshire": { x: 175, y: 360 },
  Vermont: { x: 112, y: 390 },
  Massachusetts: { x: 165, y: 545 },
};

export function Areas() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="areas" className="section-space bg-[#071525] text-foam">
      <div className="shell grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="kicker-light">Service areas</p>
          <h2 className="display mt-3 text-[2rem] sm:text-4xl md:text-6xl">
            Serving Four New England States.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
            Have a project in one of these states? Text us your location and project details to confirm availability in your area.
          </p>
          <ul className="mt-8 border-t border-white/15 sm:mt-10">
            {states.map((state) => (
              <li
                key={state.abbr}
                className={`flex min-h-14 items-center gap-3 border-b border-white/15 py-4 transition-colors sm:gap-4 sm:py-5 ${
                  active === state.name ? "text-white" : "text-white/80"
                }`}
                onMouseEnter={() => setActive(state.name)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(state.name)}
              >
                <i className="bi bi-geo-alt text-lg text-[#9ec2ea]" aria-hidden="true" />
                <span className="font-serif text-2xl sm:text-3xl">{state.name}</span>
                <span className="ml-auto text-xs tracking-[0.18em] text-white/50">{state.abbr}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first lg:order-none">
          <p className="sr-only">
            Map of Maine, New Hampshire, Vermont, and Massachusetts. No street address is marked.
          </p>
          <svg viewBox="20 10 520 630" className="mx-auto w-full max-w-[18rem] sm:max-w-md lg:max-w-lg" aria-hidden="true">
            {states.map((state) => (
              <path
                key={state.abbr}
                d={paths[state.name]}
                fill={active === state.name ? "#2f7ed1" : "#145089"}
                stroke="#e7e1d6"
                strokeWidth="1.4"
                className="transition-colors duration-200"
                onMouseEnter={() => setActive(state.name)}
                onMouseLeave={() => setActive(null)}
              />
            ))}
            {states.map((state) => (
              <text
                key={`${state.abbr}-label`}
                x={labels[state.name].x}
                y={labels[state.name].y}
                textAnchor="middle"
                fill="#f7f5f1"
                fontSize="15"
                fontFamily="Outfit, sans-serif"
                style={{ pointerEvents: "none" }}
              >
                {state.abbr}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
