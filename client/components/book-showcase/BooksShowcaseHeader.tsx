// components/books-showcase/BooksShowcaseHeader.tsx
import Link from "next/link";

interface BooksShowcaseHeaderProps {
  title: string;
  subtitle: string;
  href: string;
}

const BooksShowcaseHeader = ({
  title,
  subtitle,
  href,
}: BooksShowcaseHeaderProps) => {
  return (
    <div className="books-showcase-header-wrapper">
      <div>
        <h2 className="books-showcase-header-title">{title}</h2>
        <p className="books-showcase-header-subtitle">{subtitle}</p>
      </div>

      <Link href={href} className="books-showcase-header-link">
        Lihat Semua →
      </Link>
    </div>
  );
};

export default BooksShowcaseHeader;
