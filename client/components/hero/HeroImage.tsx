// components/hero/HeroImage.tsx
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hidden md:block">
      <div className="hero-image-wrapper">
        <Image
          width={520}
          height={520}
          src="/images/books.png"
          alt="BukuKu Preview"
          className="rounded-2xl object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroImage;
