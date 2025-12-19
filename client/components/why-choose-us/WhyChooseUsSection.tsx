import WhyChooseUsGrid from "./WhyChooseUsGrid";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-section-container">
        {/* Header */}
        <div className="why-choose-us-section-header-wrapper">
          <h2 className="why-choose-us-section-header-heading">
            Kenapa Memilih <span className="text-accent">BukuKu</span>?
          </h2>
          <p className="why-choose-us-section-header-description">
            BukuKu hadir untuk memberikan pengalaman terbaik dalam menemukan,
            membeli, dan menikmati buku favoritmu.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <WhyChooseUsGrid />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
