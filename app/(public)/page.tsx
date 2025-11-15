import CTASection from "@/components/landing/cta";
import FAQSection from "@/components/landing/faq-section";
import FeatureSection from "@/components/landing/feature-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";

const LandingPage = () => {
  return (
    <div
      className={`w-full min-h-screen font-roboto relative overflow-x-hidden scrollbar-hidden`}
    >
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
