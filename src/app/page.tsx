import Image from "next/image";
import Navbar from "../components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Footer from "@/components/shared/Footer";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
