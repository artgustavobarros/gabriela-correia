import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Apresentation } from "@/components/sections/apresentation/apresentation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services/services";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { Work } from "@/components/sections/works/work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apresentation />
        <Services />
        <About />
        <Work />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
