import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about/about";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
