import Card from "@/components/helper/Card";
import Date from "@/components/Date";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="bg-gradient-linear">
      <Navbar />
      <Hero />
      <Date />
      <Event />
      <Gallery />
      <Footer />
      {/* <Card /> */}
      {/* <Schedule /> */}
    </main>
  );
}
