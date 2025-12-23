import BookCard from "./BookCard";
import { DUMMY_BOOKS } from "@/data/dummy-books";

const BooksGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {DUMMY_BOOKS.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
