import "@/styles/globalStyles.css";
import "@/styles/fontStyles.css";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WorkSection } from "@/components/work-section";
import { ServicesSection } from "@/components/services-section";
import { CompanySection } from "@/components/company-section";
import { BannerSection } from "@/components/banner-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer/";

export default function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection/>
      <ServicesSection />
      <CompanySection />
      <BannerSection />
      <TestimonialsSection/>
      <ContactSection />
      <Footer />
    </>
  );
}
