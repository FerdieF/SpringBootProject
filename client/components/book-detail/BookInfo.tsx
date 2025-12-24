interface BookInfoProps {
  title: string;
  author: string;
  rating: number;
  price: number;
  genre: string[];
  description: string;
}

const BookInfo = ({
  title,
  author,
  rating,
  price,
  genre,
  description,
}: BookInfoProps) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">{title}</h1>
      <p className="mb-4 text-gray-600">oleh {author}</p>

      {/* Genre */}
      <div className="mb-4 flex flex-wrap gap-2">
        {genre.map((g) => (
          <span
            key={g}
            className="text-accent rounded-full bg-blue-50 px-3 py-1 text-xs font-medium"
          >
            {g}
          </span>
        ))}
      </div>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-yellow-500">★</span>
        <span className="font-medium">{rating}</span>
      </div>

      {/* Price */}
      <p className="text-accent mb-6 text-2xl font-semibold">
        Rp {price.toLocaleString("id-ID")}
      </p>

      {/* Actions */}
      <div className="mb-8 flex gap-3">
        <button className="bg-accent hover:bg-accent-hover rounded-lg px-6 py-3 text-white transition">
          Tambah ke Keranjang
        </button>
        <button className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-100">
          Wishlist
        </button>
      </div>

      {/* Description */}
      <div>
        <h3 className="mb-2 font-semibold">Deskripsi</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BookInfo;
