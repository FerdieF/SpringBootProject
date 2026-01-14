import { DUMMY_BOOKS } from "@/data/dummy-books";
import BookCard from "./BooksByGenreCard";
import { DUMMY_GENRES } from "@/data/dummy-genres";

interface BooksByGenreGridProps {
  genre?: string;
}

const BooksByGenreGrid = ({ genre }: BooksByGenreGridProps) => {
  const filteredBooks = genre
    ? DUMMY_BOOKS.filter((book) =>
        book.genre.some((genreName) => {
          const matchedGenre = DUMMY_GENRES.find(
            (g) => g.name.toLowerCase() === genreName.toLowerCase(),
          );

          return matchedGenre?.slug === genre;
        }),
      )
    : DUMMY_BOOKS;

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksByGenreGrid;
