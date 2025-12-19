// components/testimonials/TestimonialSection.tsx
import TestimonialsCarousel from "./TestimonialsCarousel";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section-container">
        {/* Header */}
        <div className="testimonials-section-header-wrapper">
          <h2 className="testimonials-section-header-heading">
            Apa Kata Mereka tentang <span className="text-accent">BukuKu</span>
          </h2>
          <p className="testimonials-section-header-description">
            Ribuan pembaca telah mempercayakan kebutuhan bukunya kepada BukuKu.
          </p>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
