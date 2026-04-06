import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <WorkGallery />
      <Services />
      <Contact />
    </div>
  );
}
