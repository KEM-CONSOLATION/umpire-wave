import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className=" ">
      <Nav />
      <HeaderCard
        title="Our Vision"
        subtitle="Empowering creatives through sound and visuals."
        image="/assets/Header_.png"
        currentPage="Vision"
        previousPage="Home"
      />

      <About />

      <Footer />
    </div>
  );
}
