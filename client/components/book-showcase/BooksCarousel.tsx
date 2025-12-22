"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookShowcaseCard from "./BookShowcaseCard";
import { Book } from "@/types/book";

interface BooksCarouselProps {
  books: Book[];
}

const BooksCarousel = ({ books }: BooksCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 260; // width card + gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Prev Button */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="books-carousel-prev-button"
      >
        <ChevronLeft className="text-accent-foreground h-5 w-5" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="books-carousel-next-button"
      >
        <ChevronRight className="text-accent-foreground h-5 w-5" />
      </button>

      {/* Books Grid */}
      <div ref={carouselRef} className="books-carousel-grid">
        {books.map((book) => (
          <BookShowcaseCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BooksCarousel;
