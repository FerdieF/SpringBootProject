import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: Book;
};

const BooksByGenreCard = ({ book }: Props) => {
  return (
    <Link
      href={`/books/${book.id}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
          {book.title}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{book.author}</p>
        <p className="mt-2 text-sm font-bold text-blue-600">
          Rp {book.price.toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
};

export default BooksByGenreCard;
