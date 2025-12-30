import { Genre } from "@/types/genres";
import GenreCard from "./GenreCard";

interface GenreGridProps {
  genres: Genre[];
}

const GenreGrid = ({ genres }: GenreGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default GenreGrid;
