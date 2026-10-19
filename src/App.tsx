import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MobileBar } from "./components/MobileBar";
import { Pillars } from "./components/Pillars";
import { Process } from "./components/Process";
import { Services } from "./components/Services";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-foam focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Pillars />
        <Gallery />
        <Process />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
