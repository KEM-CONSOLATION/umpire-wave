import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Service from "@/components/Service";

export default function ServicePage() {
  return (
    <div className=" ">
      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image="/assets/Header_.png"
        currentPage="Our Service"
        previousPage="Home"
      />

      <Service />

      <Footer />
    </div>
  );
}
