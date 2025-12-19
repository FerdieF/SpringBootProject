// components/testimonials/TestimonialCarousel.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

const TestimonialsCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        aria-label="Previous testimonial"
        className="testimonials-carousel-prev-button"
      >
        <ChevronLeft className="text-accent-foreground h-5 w-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Next testimonial"
        className="testimonials-carousel-next-button"
      >
        <ChevronRight className="text-accent-foreground h-5 w-5" />
      </button>

      <div ref={ref} className="testimonials-carousel-grid">
        {TESTIMONIALS_DATA.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
