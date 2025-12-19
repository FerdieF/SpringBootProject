import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content-grid">
          <FooterBrand />
          <FooterLinks
            title="Eksplor"
            links={[
              { label: "Semua Buku", href: "/books" },
              { label: "Buku Terlaris", href: "/top-sales" },
              { label: "Buku Baru", href: "/new-arrivals" },
              { label: "Genre", href: "/genres" },
            ]}
          />
          <FooterLinks
            title="Perusahaan"
            links={[
              { label: "Tentang Kami", href: "/about" },
              { label: "Karir", href: "/careers" },
              { label: "Kontak", href: "/contact" },
              { label: "Kebijakan Privasi", href: "/privacy" },
            ]}
          />
          <FooterSocial />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
