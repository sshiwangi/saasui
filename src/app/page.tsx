import Navbar from "../components/shared/Navbar1";
import Hero from "@/components/shared/Hero1";
import Features from "@/components/shared/Features2";
import Footer from "@/components/shared/Footer";
import TestimonialsSection from "@/components/shared/Testimonials";
import ContactSection from "@/components/shared/ContactSection2";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Features />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
