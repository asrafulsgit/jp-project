import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AgriculturalProducts from "@/components/products/AgriculturalProducts";
import LandscapeProducts from "@/components/products/LandscapeProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
    </>
  );
}
