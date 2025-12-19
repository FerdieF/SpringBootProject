// components/hero/HeroSection.tsx
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
