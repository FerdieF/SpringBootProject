import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const FooterSocial = () => {
  return (
    <div>
      <h4 className="text-accent-foreground text-sm font-semibold">
        Ikuti Kami
      </h4>
      <div className="mt-4 flex gap-4 text-blue-100">
        <Link
          href="#"
          aria-label="Instagram"
          className="hover:text-accent-foreground transition"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          aria-label="Twitter"
          className="hover:text-accent-foreground transition"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          aria-label="Facebook"
          className="hover:text-accent-foreground transition"
        >
          <Facebook className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
