import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className=" ">
      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image="/assets/Header_.png"
        currentPage="Contact us"
        previousPage="Home"
      />

      <Contact />

      <Footer />
    </div>
  );
}
