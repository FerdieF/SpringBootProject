// components/books-showcase/BookShowcaseCard.tsx
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface BookShowcaseCardProps {
  title: string;
  image: string;
  rating: number;
  price: number;
}

const BookShowcaseCard = ({
  title,
  image,
  rating,
  price,
}: BookShowcaseCardProps) => {
  return (
    <Card className="group bg-background my-4 min-w-[220px] overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book image */}
      <div className="books-showcase-card-image-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Book details */}
      <div className="books-showcase-card-details-wrapper">
        <h3 className="books-showcase-card-details-title">{title}</h3>
        <div className="books-showcase-card-details-rating">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          {rating}
        </div>
        <p className="books-showcase-card-details-price">
          Rp {price.toLocaleString("id-ID")}
        </p>
      </div>
    </Card>
  );
};

export default BookShowcaseCard;
