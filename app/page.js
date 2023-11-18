import Date from "@/components/Date";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Context from "@/context/RefContext";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Context>
        <Navbar />
        <main className="bg-gradient-linear">
          <Hero />
          <Date />
          <Event />
          <Gallery />
          <About />
          <Footer />
        </main>
      </Context>
    </>
  );
}
