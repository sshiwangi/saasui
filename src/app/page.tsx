import Navbar from "../components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Footer from "@/components/shared/Footer";
import TestimonialsSection from "@/components/shared/Testimonials";
import ContactSection from "@/components/shared/ContactSection";

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
