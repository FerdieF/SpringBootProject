import { BookOpen } from "lucide-react";

const FooterBrand = () => {
  return (
    <div>
      <div className="footer-brand-brand-container">
        <BookOpen className="h-6 w-6" />
        BukuKu
      </div>
      <p className="footer-brand-description">
        Platform terpercaya untuk menemukan dan membeli buku favoritmu dengan
        mudah, cepat, dan aman.
      </p>
    </div>
  );
};

export default FooterBrand;
