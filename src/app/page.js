import Hero from "@/components/Hero";
import MarqueeSection from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import AgriculturalProducts from "@/components/products/AgriculturalProducts";
import LandscapeProducts from "@/components/products/LandscapeProducts";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
      <StatsBanner />
      <WhyUs />
      <MarqueeSection />
      <Testimonials />
    </>
  );
}
