import { Genre } from "@/types/genres";
import Link from "next/link";

interface GenreCardProps {
  genre: Genre;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  const Icon = genre.icon;

  return (
    <Link
      href={`/genres/${genre.slug}`}
      className="group flex flex-col items-center gap-3 rounded-2xl border p-6 transition hover:shadow-lg"
    >
      <Icon className="text-accent h-8 w-8 transition" />

      <h3 className="text-center text-sm font-semibold">{genre.name}</h3>
    </Link>
  );
};

export default GenreCard;
