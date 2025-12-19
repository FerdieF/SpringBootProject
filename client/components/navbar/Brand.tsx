// components/navbar/Brand.tsx
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <span className="text-foreground text-lg tracking-tight">
        Buku<span className="text-accent">Ku</span>
      </span>
    </Link>
  );
};

export default Brand;
