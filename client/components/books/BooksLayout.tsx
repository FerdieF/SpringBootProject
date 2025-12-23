import BooksFilter from "./BooksFilter";
import BooksGrid from "./BooksGrid";
import BooksSearch from "./BooksSearch";

const BooksLayout = () => {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <BooksSearch />

      {/* Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar Filter */}
        <BooksFilter />

        {/* Books Grid */}
        <BooksGrid />
      </div>
    </div>
  );
};

export default BooksLayout;
