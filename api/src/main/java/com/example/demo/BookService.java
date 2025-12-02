package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    // constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Buku> getAllBooks() {
        return bookRepository.findAll();
    }

    public Buku getBookById(Integer id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }

    public Buku createBook(Buku book) {
        return bookRepository.save(book);
    }

    public Buku updateBook(Integer id, Buku bukuBaru) {
        Buku existing = getBookById(id);

        existing.setJudulBuku(bukuBaru.getJudulBuku());
        existing.setPenulis(bukuBaru.getPenulis());
        existing.setGenre(bukuBaru.getGenre());
        existing.setPenerbit(bukuBaru.getPenerbit());
        existing.setTahunRilis(bukuBaru.getTahunRilis());
        existing.setBahasa(bukuBaru.getBahasa());

        return bookRepository.save(existing);
    }

    public void deleteBook(Integer id) {
        bookRepository.deleteById(id);
    }

    public List<Buku> searchByTitle(String judul) {
        return bookRepository.findByJudulBukuContainingIgnoreCase(judul);
    }
}
