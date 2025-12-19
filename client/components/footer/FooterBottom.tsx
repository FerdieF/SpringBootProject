const FooterBottom = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-blue-100 sm:flex-row">
      <p>© {new Date().getFullYear()} BukuKu. All rights reserved.</p>
      <p>Solusi modern untuk pengalaman membaca.</p>
    </div>
  );
};

export default FooterBottom;
