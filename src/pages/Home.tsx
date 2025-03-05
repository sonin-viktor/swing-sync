import { Advantages } from "@/components/sections/home-page/advantages/Advantages";
import { VideoSection } from "@/components/sections/home-page/video/VideoSection";
import { Meaning } from "@/components/sections/home-page/meaning/Meaning";
import { Bands } from "@/components/sections/home-page/bands/Bands";
import { FormSection } from "@/components/layout/form/FormSection";
import { Hero } from "@/components/sections/home-page/hero/Hero";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <Meaning />
        <Advantages />
        <Bands />
        <VideoSection />
        <FormSection />
      </main>

      <Footer />
    </>
  );
};
