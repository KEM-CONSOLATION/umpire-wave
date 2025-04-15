import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import PortFolio from "@/components/PortFolio";

export default function PortfolioPage() {
  return (
    <div className=" ">
      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image="/assets/Header_.png"
        currentPage="Portfolio"
        previousPage="Home"
      />

      <PortFolio />

      <Footer />
    </div>
  );
}
