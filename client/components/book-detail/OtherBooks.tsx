"use client";

import { useState } from "react";
import { Book } from "@/types/book";
import BookCardSmall from "./BookCardSmall";

interface OtherBooksProps {
  books: Book[];
}

const BOOKS_PER_LOAD = 4;

const OtherBooks = ({ books }: OtherBooksProps) => {
  const [visibleCount, setVisibleCount] = useState(BOOKS_PER_LOAD);

  if (books.length === 0) return null;

  const visibleBooks = books.slice(0, visibleCount);
  const canLoadMore = visibleCount < books.length;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Buku serupa yang mungkin kamu suka
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {visibleBooks.map((book) => (
          <BookCardSmall key={book.id} book={book} />
        ))}
      </div>

      {canLoadMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + BOOKS_PER_LOAD)}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Muat lebih banyak
          </button>
        </div>
      )}
    </section>
  );
};

export default OtherBooks;
