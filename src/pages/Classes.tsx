import { HowClassesGo } from "@/components/sections/classes-page/how-classes-go/HowClassesGo";
import { DanceStyles } from "@/components/sections/classes-page/dance-styles/DanceStyles";
import { FormSection } from "@/components/layout/form/FormSection";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";

export const Classes = () => {
  return (
    <>
      <Header color="red" />

      <main className="main">
        <HowClassesGo />
        <DanceStyles />
        <FormSection />
      </main>

      <Footer />
    </>
  );
};
