// components/how-it-works/HowItWorksSection.tsx
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorksSection = () => {
  return (
    <section className="py-28">
      <div className="how-it-works-section-container">
        {/* Header */}
        <div className="how-it-works-section-header-wrapper">
          <h2 className="how-it-works-section-header-heading">
            Cara Kerja <span className="text-accent">BukuKu</span>
          </h2>
          <p className="how-it-works-section-header-description">
            Hanya dengan tiga langkah sederhana, buku favoritmu siap menemani
            waktu membaca.
          </p>
        </div>

        {/* How It Works Grid */}
        <HowItWorksGrid />
      </div>
    </section>
  );
};

export default HowItWorksSection;
