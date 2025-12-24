import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/book";

interface BookCardSmallProps {
  book: Book;
}

const BookCardSmall = ({ book }: BookCardSmallProps) => {
  return (
    <Link href={`/books/${book.id}`} className="group">
      <div className="relative h-56 w-full overflow-hidden rounded-lg shadow">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-sm font-semibold transition group-hover:text-blue-600">
        {book.title}
      </h3>
      <p className="text-xs text-gray-500">{book.author}</p>
    </Link>
  );
};

export default BookCardSmall;
