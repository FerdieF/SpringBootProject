import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
