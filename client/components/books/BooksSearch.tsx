import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BooksSearch = () => {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <Input placeholder="Cari judul buku, penulis..." className="h-10" />

      <Button variant="default" className="h-10 rounded-xl">
        Cari
      </Button>
    </div>
  );
};

export default BooksSearch;
