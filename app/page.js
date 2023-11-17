import Card from "@/components/helper/Card";
import Date from "@/components/Date";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import ShiftingCountdown from "@/components/Counter";

export default function Home() {
  return (
    <main className="bg-gradient-linear">
      <Navbar />
      <Hero />
      <Date />
      <div id="Events" className="h-[2rem]"></div>
      <Event />
      <div id="Gallery" className="h-[2rem]"></div>
      <Gallery />
      <ShiftingCountdown />
      <Footer />
      {/* <Card /> */}
      {/* <Schedule /> */}
    </main>
  );
}
