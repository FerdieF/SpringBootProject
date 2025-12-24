import BooksShowcaseSection from "@/components/book-showcase/BooksShowcaseSection";
import CTASection from "@/components/cta/CTASection";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorksSection from "@/components/how-it-works/HowItWorksSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhyChooseUsSection from "@/components/why-choose-us/WhyChooseUsSection";
import { DUMMY_BOOKS } from "@/data/dummy-books";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <BooksShowcaseSection
        title="Buku Terlaris"
        subtitle="Buku paling laris dan paling diminati pembaca"
        books={DUMMY_BOOKS.slice(0, 8)}
        gradient="top-sales-books-showcase-section"
      />
      <BooksShowcaseSection
        title="Buku Baru"
        subtitle="Rilisan terbaru yang siap menemani bacaanmu"
        books={DUMMY_BOOKS.slice(8, 17)}
        gradient="new-arrivals-books-showcase-section"
      />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
