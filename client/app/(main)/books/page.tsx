import BooksLayout from "@/components/books/BooksLayout";

const BooksPage = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 pt-32">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Semua Buku</h1>
        <p className="mt-1 text-sm text-gray-500">
          Temukan buku favoritmu dari berbagai genre
        </p>
      </div>

      <BooksLayout />
    </section>
  );
};

export default BooksPage;
