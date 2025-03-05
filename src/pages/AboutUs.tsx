import { FoundationSchool } from "@/components/sections/about-us-page/foundation-school/FoundationSchool";
import { Teachers } from "@/components/sections/about-us-page/teachers/Teachers";
import { FormSection } from "@/components/layout/form/FormSection";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";

export const AboutUs = () => {
  return (
    <>
      <Header color="red" />

      <main className="main">
        <FoundationSchool />
        <Teachers />
        <FormSection />
      </main>

      <Footer />
    </>
  );
};
