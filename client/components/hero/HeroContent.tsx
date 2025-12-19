// components/hero/HeroContent.tsx
import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeroBadge />

      <h1 className="hero-content-heading">
        Temukan Buku Favoritmu
        <br />
        <span className="text-accent">Tanpa Ribet</span>
      </h1>

      <p className="hero-content-description">
        Jelajahi ribuan buku dari berbagai genre, temukan yang paling sesuai
        dengan minatmu, dan nikmati pengalaman membaca yang modern.
      </p>

      <HeroActions />
    </div>
  );
};

export default HeroContent;
