import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const genres = [
  "Fiksi",
  "Non-Fiksi",
  "Teknologi",
  "Bisnis",
  "Self Improvement",
];

const BooksByGenreFilter = () => {
  return (
    <aside className="h-fit space-y-6 rounded-2xl bg-white p-5 shadow-sm">
      {/* Genre */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Genre</h3>
        <div className="space-y-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center gap-2">
              <Checkbox id={genre} />
              <label htmlFor={genre} className="text-sm text-gray-700">
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Harga</h3>
        <Slider defaultValue={[250000]} max={500000} step={10000} />
        <p className="mt-2 text-xs text-gray-500">Rp 0 - Rp 500.000</p>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Rating</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Semua" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="4">4 ⭐ ke atas</SelectItem>
            <SelectItem value="3">3 ⭐ ke atas</SelectItem>
            <SelectItem value="2">2 ⭐ ke atas</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default BooksByGenreFilter;
