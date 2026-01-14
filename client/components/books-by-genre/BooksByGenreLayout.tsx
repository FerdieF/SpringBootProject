"use client";

import BooksFilter from "./BooksByGenreFilter";
import BooksGrid from "./BooksByGenreGrid";
import BooksSearch from "./BooksByGenreSearch";

interface BooksByGenreLayoutProps {
  genre?: string;
}

const BooksByGenreLayout = ({ genre }: BooksByGenreLayoutProps) => {
  return (
    <div className="space-y-6">
      <BooksSearch />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <BooksFilter />

        <BooksGrid genre={genre} />
      </div>
    </div>
  );
};

export default BooksByGenreLayout;
