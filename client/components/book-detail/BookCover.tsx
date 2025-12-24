import Image from "next/image";

interface BookCoverProps {
  src: string;
  alt: string;
}

const BookCover = ({ src, alt }: BookCoverProps) => {
  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-lg">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default BookCover;
