import BooksByGenreLayout from "@/components/books-by-genre/BooksByGenreLayout";
import { DUMMY_GENRES } from "@/data/dummy-genres";

interface GenrePageProps {
  params: {
    genre: string;
  };
}

const GenrePage = async ({ params }: GenrePageProps) => {
  const genreSlug = (await params).genre;
  const genreData = DUMMY_GENRES.find((g) => g.slug === genreSlug);

  const genreName = genreData?.name ?? "Tidak Diketahui";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 pt-32">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Genre: {genreName.charAt(0).toUpperCase() + genreName.slice(1)}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Buku-buku dengan genre{" "}
          <span className="font-bold">{`"${genreName.charAt(0).toUpperCase() + genreName.slice(1)}"`}</span>
        </p>
      </div>

      <BooksByGenreLayout genre={genreSlug} />
    </section>
  );
};

export default GenrePage;
