import BookCover from "@/components/book-detail/BookCover";
import BookInfo from "@/components/book-detail/BookInfo";
import OtherBooks from "@/components/book-detail/OtherBooks";
import { DUMMY_BOOKS } from "@/data/dummy-books";

interface BookDetailPageProps {
  params: {
    id: string;
  };
}

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const id = (await params).id;
  const book = DUMMY_BOOKS.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 pt-32">
        <h1 className="text-2xl font-bold text-gray-900">
          Buku tidak ditemukan
        </h1>
      </div>
    );
  }

  const otherBooks = DUMMY_BOOKS.filter(
    (b) => b.id !== book.id && b.genre.some((g) => book.genre.includes(g)),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pt-32">
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        <BookCover src={book.cover} alt={book.title} />
        <BookInfo
          title={book.title}
          author={book.author}
          rating={book.rating}
          price={book.price}
          genre={book.genre}
          description={book.description}
        />
      </div>

      <OtherBooks books={otherBooks} />
    </div>
  );
};

export default BookDetailPage;
