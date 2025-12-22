import BooksGrid from "@/components/books/BookGrid";

const BooksPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 pt-40">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Semua Buku</h1>
        <p className="mt-1 text-sm text-gray-500">
          Temukan dan kelola buku favoritmu
        </p>
      </div>

      <BooksGrid />
    </section>
  );
};

export default BooksPage;
