import GenreGrid from "@/components/genres/GenreGrid";
import { DUMMY_GENRES } from "@/data/dummy-genres";

const GenresPage = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 pt-32">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Daftar Genre</h1>
        <p className="mt-1 text-sm text-gray-500">
          Jelajahi buku berdasarkan genre favoritmu
        </p>
      </div>

      <GenreGrid genres={DUMMY_GENRES} />
    </section>
  );
};

export default GenresPage;
