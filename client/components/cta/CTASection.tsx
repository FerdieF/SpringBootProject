// components/cta/CtaSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-section-container">
        <div className="cta-content-wrapper">
          {/* Content */}
          <h2 className="cta-content-heading">
            Temukan Buku Favoritmu di{" "}
            <span className="text-accent">BukuKu</span>
          </h2>

          <p className="cta-content-description">
            Jelajahi ribuan buku berkualitas, nikmati pengalaman belanja yang
            mudah, dan mulai petualangan membaca hari ini.
          </p>

          {/* Actions */}
          <div className="cta-content-actions-wrapper">
            <Button size="lg" asChild>
              <Link href="/books">
                Jelajahi Buku
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-accent border"
              asChild
            >
              <Link href="/top-sales">Lihat Buku Terlaris</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
