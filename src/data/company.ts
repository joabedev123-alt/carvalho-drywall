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
    "Drywall installation, repair, taping, plastering, and interior painting for homes and commercial spaces across Massachusetts, Vermont, Maine, and New Hampshire.",
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
  width: number;
  height: number;
  alt: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "installation",
    name: "Drywall Installation",
    smsName: "drywall installation",
    summary:
      "New drywall for construction, remodels, basements, additions, and commercial rooms. Sheets are measured and set so the finish starts level.",
    image: "/img/hero.jpg",
    width: 1800,
    height: 1200,
    alt: "A worker fastening a drywall sheet to wood framing in an unfinished room.",
    icon: "bi-grid",
  },
  {
    id: "repair",
    name: "Drywall Repair",
    smsName: "drywall repair",
    summary:
      "Cracks, holes, water-damaged areas, and worn spots repaired so the wall or ceiling can take a smooth finish again.",
    image: "/img/repair.jpg",
    width: 1200,
    height: 1800,
    alt: "A drywall surface with filled spots prepared for finishing.",
    icon: "bi-tools",
  },
  {
    id: "taping",
    name: "Taping & Finishing",
    smsName: "taping and finishing",
    summary:
      "Joint tape and finishing coats worked until seams sit level and edges stay clean, ready for paint or texture.",
    image: "/img/taping.jpg",
    width: 1200,
    height: 1800,
    alt: "A worker applying joint compound over taped drywall in a small room.",
    icon: "bi-layers",
  },
  {
    id: "plaster",
    name: "Plastering",
    smsName: "plastering",
    summary:
      "Plaster repair and plaster finishing for walls and ceilings, aimed at a sound surface and an even appearance.",
    image: "/img/plaster-tool.jpg",
    width: 1202,
    height: 1800,
    alt: "A gloved hand smoothing a white wall with a plastering trowel.",
    icon: "bi-brush",
  },
  {
    id: "painting",
    name: "Interior Painting",
    smsName: "interior painting",
    summary:
      "Interior paint for homes and commercial rooms, applied once the drywall or plaster underneath is prepared.",
    image: "/img/painting.jpg",
    width: 1600,
    height: 1067,
    alt: "A painter coating an interior wall during a renovation.",
    icon: "bi-paint-bucket",
  },
];

export const pillars = [
  {
    title: "Attention to Detail",
    icon: "bi-eye",
    text: "Seams, corners, and repairs are treated as part of the finished surface, not something to rush past.",
  },
  {
    title: "Clear Communication",
    icon: "bi-chat-left-text",
    text: "You can reach us by text. We talk through the scope before the next steps are set.",
  },
  {
    title: "Project-Focused Solutions",
    icon: "bi-signpost-split",
    text: "The approach follows the room, the condition of the surface, and the work you actually need.",
  },
  {
    title: "Respect for Your Space",
    icon: "bi-house",
    text: "The work is planned around the area it occupies, with care for the home or business around it.",
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
      "We provide drywall installation, drywall repair, taping and finishing, plastering, and interior painting for residential and commercial interiors.",
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
};

export const gallery: GalleryItem[] = [
  {
    src: "/img/hero.jpg",
    width: 1800,
    height: 1200,
    alt: "A worker fastening drywall to exposed wood studs.",
    caption: "Hanging drywall",
  },
  {
    src: "/img/taping.jpg",
    width: 1200,
    height: 1800,
    alt: "Joint compound being applied over drywall tape.",
    caption: "Taping a room",
  },
  {
    src: "/img/finishing.jpg",
    width: 1200,
    height: 1800,
    alt: "A finisher smoothing compound along an interior wall.",
    caption: "Smoothing compound",
  },
  {
    src: "/img/painting.jpg",
    width: 1600,
    height: 1067,
    alt: "Interior paint being rolled onto a prepared wall.",
    caption: "Interior paint",
  },
  {
    src: "/img/smooth-room.jpg",
    width: 1600,
    height: 1068,
    alt: "A quiet room with a broad, smooth painted wall.",
    caption: "A smooth wall",
  },
  {
    src: "/img/office.jpg",
    width: 1400,
    height: 933,
    alt: "A finished office interior with painted walls and trim.",
    caption: "A finished interior",
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
