// components/hero/HeroActions.tsx
import Link from "next/link";

const HeroActions = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/books"
        className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-xl px-6 py-3 text-sm font-medium shadow"
      >
        Eksplor Buku
      </Link>

      <Link
        href="/genres"
        className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        Eksplor Genre
      </Link>
    </div>
  );
};

export default HeroActions;
