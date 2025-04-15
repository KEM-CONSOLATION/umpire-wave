import Brands from "@/components/Brands";
import Creativity from "@/components/Creativity";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" ">
      <Nav />
      <HeroSection />
      <Creativity />
      <Brands />
      <CoreServices />
      <Footer />
    </div>
  );
}
