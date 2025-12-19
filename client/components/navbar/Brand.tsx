"use client";

const Brand = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="flex cursor-pointer items-center gap-2 font-semibold"
      onClick={scrollToTop}
    >
      <span className="text-foreground text-lg tracking-tight">
        Buku<span className="text-accent">Ku</span>
      </span>
    </button>
  );
};

export default Brand;
