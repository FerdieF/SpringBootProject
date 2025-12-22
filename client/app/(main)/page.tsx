import BooksShowcaseSection from "@/components/book-showcase/BooksShowcaseSection";
import CTASection from "@/components/cta/CTASection";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorksSection from "@/components/how-it-works/HowItWorksSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhyChooseUsSection from "@/components/why-choose-us/WhyChooseUsSection";
import { NEW_ARRIVALS_BOOKS_DATA } from "@/data/new-arrivals";
import { TOP_SALES_BOOKS_DATA } from "@/data/top-sales";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <BooksShowcaseSection
        title="Buku Terlaris"
        subtitle="Buku paling laris dan paling diminati pembaca"
        books={TOP_SALES_BOOKS_DATA}
        gradient="top-sales-books-showcase-section"
      />
      <BooksShowcaseSection
        title="Buku Baru"
        subtitle="Rilisan terbaru yang siap menemani bacaanmu"
        books={NEW_ARRIVALS_BOOKS_DATA}
        gradient="new-arrivals-books-showcase-section"
      />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
