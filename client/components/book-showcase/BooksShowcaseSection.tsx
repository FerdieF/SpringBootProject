import BooksShowcaseHeader from "./BooksShowcaseHeader";
import BooksCarousel from "./BooksCarousel";
import { Book } from "@/types/book";

interface BooksShowcaseSectionProps {
  title: string;
  subtitle: string;
  books: Book[];
  gradient: string;
}

const BooksShowcaseSection = ({
  title,
  subtitle,
  books,
  gradient,
}: BooksShowcaseSectionProps) => {
  return (
    <section className={`py-28 ${gradient}`}>
      <div className="books-showcase-container">
        <BooksShowcaseHeader
          title={title}
          subtitle={subtitle}
          href={`/books/${title.split(" ").join("-").toLowerCase()}`}
        />
        <BooksCarousel books={books} />
      </div>
    </section>
  );
};

export default BooksShowcaseSection;
