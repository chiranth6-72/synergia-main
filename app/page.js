import Date from "@/components/Date";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Context from "@/context/RefContext";


export default function Home() {

  return (
    <>
      <Context>
        <main className="bg-gradient-linear">
          <Navbar />
          <Hero />
          <Date />
          <Event />
          <Gallery />
          <Footer />
        </main>
      </Context>
    </>
  );
}
