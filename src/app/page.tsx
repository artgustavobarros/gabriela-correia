import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Presentation } from "@/components/sections/presentation/presentation";
import { FAQ } from "@/components/sections/faq/faq";
import { Hero } from "@/components/sections/hero/hero";
import { Services } from "@/components/sections/services/services";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { Work } from "@/components/sections/works/work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Presentation />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
