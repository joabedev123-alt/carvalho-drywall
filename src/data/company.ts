/**
 * Company facts used across the site.
 * Confirmed from the public website https://carvalhodrywall.com/home/
 * and the official Facebook page linked by the client.
 * Leave null fields empty until a real value is confirmed.
 * Do not invent a phone number, email, street address, license, or insurance.
 */
export const company = {
  name: "Carvalho Drywall",
  legalName: "Carvalho Drywall Service Corporation",
  phoneDisplay: "(959) 237-0881",
  phoneE164: "+19592370881" as string | null,
  email: "Carvalhodrywall91@gmail.com" as string | null,
  facebook: "https://www.facebook.com/share/18dUCwgCBA/",
  hours: "Monday–Saturday, 8:00 a.m.–5:00 p.m.",
  locality: "Nashua",
  region: "NH",
  streetAddress: null as string | null,
  description:
    "Hangs, taping, plasterings, and paintings for homes and commercial spaces across Massachusetts, Vermont, Maine, and New Hampshire.",
} as const;

export const states = [
  { name: "Massachusetts", abbr: "MA" },
  { name: "Vermont", abbr: "VT" },
  { name: "Maine", abbr: "ME" },
  { name: "New Hampshire", abbr: "NH" },
] as const;

export type Service = {
  id: string;
  name: string;
  smsName: string;
  summary: string;
  image: string;
  video?: string;
  width: number;
  height: number;
  alt: string;
  icon: string;
  realMedia: boolean;
};

export const services: Service[] = [
  {
    id: "hangs",
    name: "Hangs",
    smsName: "hangs",
    summary:
      "Hanging drywall is the foundation of every finished room. Precise board placement, level lines, and clean cuts set the stage for taping, plaster, and paint. At Carvalho Drywall, we hang each sheet with care so walls and ceilings sit true, seams line up, and the finish that follows looks sharp and professional.",
    image: "/img/hangs.jpg",
    video: "/img/hangs.mp4",
    width: 1800,
    height: 1200,
    alt: "A worker hanging drywall boards on an interior framing job.",
    icon: "bi-grid",
    realMedia: true,
  },
  {
    id: "taping",
    name: "Taping",
    smsName: "taping",
    summary:
      "Taping is where drywall becomes a clean, continuous surface. Joints, corners, and screw heads are finished with tape and compound until seams disappear and edges stay sharp. At Carvalho Drywall, we work each coat with patience so the wall is level, smooth, and ready for plaster or paint.",
    image: "/img/taping-crew.jpg",
    width: 1200,
    height: 1600,
    alt: "Carvalho Drywall crew taping and finishing drywall seams on site.",
    icon: "bi-layers",
    realMedia: true,
  },
  {
    id: "plasterings",
    name: "Plasterings",
    smsName: "plasterings",
    summary:
      "Plastering restores strength and beauty to walls and ceilings. Whether repairing worn surfaces or refining a full finish, careful plaster work improves durability and creates a surface that feels solid and even. At Carvalho Drywall, we shape each area with precision so the final look is smooth, consistent, and ready for paint.",
    image: "/img/plasterings.jpg",
    width: 1200,
    height: 1600,
    alt: "An interior room with freshly plastered walls ready for the next stage.",
    icon: "bi-brush",
    realMedia: true,
  },
  {
    id: "paintings",
    name: "Pinturas",
    smsName: "paintings",
    summary:
      "Painting the interior of a home or office goes far beyond changing wall color. Professional painting elevates the property, improves how rooms catch light, and brings comfort, openness, and a cleaner feel to everyday life. At Carvalho Drywall, we treat every wall with the technical care it needs to deliver a uniform, smooth finish free of imperfections.",
    image: "/img/paintings.jpg",
    width: 1600,
    height: 1200,
    alt: "A finished interior with smooth walls prepared and painted.",
    icon: "bi-paint-bucket",
    realMedia: true,
  },
];

export type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    name: "Brandon Clark",
    date: "October 15, 2026",
    rating: 5,
    text: "They did a great job drywalling my basement walls, I highly recommend them and trust them in my home. The price was very fair, will be using them again for drywall on my basement ceiling.",
    source: "Google",
  },
  {
    name: "Arjan Keka",
    date: "October 15, 2026",
    rating: 5,
    text: "Fast and good service.",
    source: "Google",
  },
  {
    name: "Troy McLaughlin",
    date: "October 15, 2026",
    rating: 5,
    text: "Great quality drywall and skim coating work!",
    source: "Google",
  },
  {
    name: "Steven Grande",
    date: "October 15, 2026",
    rating: 5,
    text: "Rogerio's guys did an excellent job especially on my laminate floor in addition to drywall replacement caused by a broken pipe in my basement. I highly recommend this company.",
    source: "Google",
  },
  {
    name: "Robert Murano",
    date: "September 2025",
    rating: 5,
    text: "These guys just completed a job at my house in Maine. I would highly recommend these guys to anyone. They do outstanding work and are very meticulous about the work they produce. They also do an outstanding job cleaning up after themselves. They are very courteous and polite. They are some of the hardest working guys I have seen. You would not go wrong hiring these guys.",
    source: "Google",
  },
  {
    name: "Michael R.",
    date: "August 2025",
    rating: 5,
    text: "Carvalho Drywall Service Corporation did an amazing job on our basement drywall project. The finish was smooth, clean, and professional. Highly recommended!",
    source: "Google",
  },
];

export const pillars = [
  {
    title: "Attention to Detail",
    icon: "bi-eye",
    text: "From straight lines to clean corners, every detail is handled with care so the finished surface looks sharp and consistent.",
  },
  {
    title: "Licensed & Insured",
    icon: "bi-shield-check",
    text: "Fully credentialed for your peace of mind on every project we take on.",
  },
  {
    title: "Quality Guaranteed",
    icon: "bi-award",
    text: "We stand behind all the projects we complete.",
  },
  {
    title: "Clear Communication",
    icon: "bi-chat-left-text",
    text: "You can reach us by text. We review the scope together before the next steps are set.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Send us a text with a few details about your project and its location.",
  },
  {
    number: "02",
    title: "Discuss the Details",
    text: "We’ll review your needs and discuss the scope and next steps.",
  },
  {
    number: "03",
    title: "Plan Your Project",
    text: "Once the details are agreed upon, we’ll coordinate the next steps with you.",
  },
] as const;

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Massachusetts, Vermont, Maine, and New Hampshire. Text us the city and state where the project is located so we can confirm availability in your area.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Contact us by text message. Use Text Us on this page to open your phone’s messaging app with a note ready to edit. On a computer, copy the phone number and send the text from your phone.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Include your name, the city and state, the service you need, and a short description of the project. If you can, send a few photos through your messaging app so we can see the space.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide hangs, taping, plasterings, and paintings for residential and commercial interiors.",
  },
  {
    question: "How do I discuss an estimate?",
    answer:
      "Send the project location and a brief description of the work. We will review what you need and discuss the scope and next steps. Pricing is discussed after those details are clear.",
  },
] as const;

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  video?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/img/hangs.jpg",
    video: "/img/hangs.mp4",
    width: 1800,
    height: 1200,
    alt: "Drywall hang work on an active interior job.",
    caption: "Hangs",
  },
  {
    src: "/img/taping-crew.jpg",
    width: 1200,
    height: 1600,
    alt: "Crew members taping drywall seams.",
    caption: "Taping",
  },
  {
    src: "/img/taping-main.jpg",
    width: 1600,
    height: 1200,
    alt: "Taped drywall joints across a two-story interior.",
    caption: "Taping",
  },
  {
    src: "/img/taping-a.jpg",
    width: 1200,
    height: 1600,
    alt: "Close detail of taping and joint compound on site.",
    caption: "Taping",
  },
  {
    src: "/img/taping-b.jpg",
    width: 1200,
    height: 1600,
    alt: "Finished taping progress on interior walls.",
    caption: "Taping",
  },
  {
    src: "/img/plasterings.jpg",
    width: 1200,
    height: 1600,
    alt: "A room after plasterings, with smooth wall surfaces.",
    caption: "Plasterings",
  },
  {
    src: "/img/paintings.jpg",
    width: 1600,
    height: 1200,
    alt: "Interior surfaces ready for paintings.",
    caption: "Pinturas",
  },
  {
    src: "/img/paintings-01.jpg",
    width: 1600,
    height: 1200,
    alt: "An upper-level interior with completed wall finish work.",
    caption: "Pinturas",
  },
];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
] as const;

export const generalSms =
  "Hi! I found your website and would like to discuss a project in [city/state].";

export function serviceSms(smsName: string) {
  return `Hi! I'm interested in your ${smsName} services. My project is located in [city/state].`;
}
