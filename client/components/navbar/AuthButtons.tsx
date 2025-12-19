// components/navbar/AuthButtons.tsx
import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Link
        href="/sign-in"
        className="text-foreground rounded-lg border bg-slate-50 px-4 py-2 text-sm font-medium hover:bg-slate-100"
      >
        Masuk
      </Link>

      <Link
        href="/sign-up"
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-4 py-2 text-sm font-medium shadow-md transition"
      >
        Daftar
      </Link>
    </div>
  );
};

export default AuthButtons;
