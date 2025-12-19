import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h4 className="text-accent-foreground text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-blue-100">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-accent-foreground transition hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
