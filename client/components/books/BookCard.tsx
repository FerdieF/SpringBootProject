import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <Link
      href={`/books/${book.id}`}
      className="group rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-t-2xl">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-gray-900">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{book.author}</p>
      </div>
    </Link>
  );
};

export default BookCard;
