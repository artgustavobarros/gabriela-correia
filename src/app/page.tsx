import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Apresentation } from "@/components/sections/apresentation/apresentation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apresentation />
        <Services />
      </main>
      <Footer />
    </>
  );
}
