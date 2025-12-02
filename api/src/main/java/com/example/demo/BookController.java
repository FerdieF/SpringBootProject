package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    // constructor injection
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // simple test
    @GetMapping("/ping")
    public String ping() {
        return "books ping OK";
    }

    // GET /api/books
    @GetMapping
    public List<Buku> getAll() {
        return bookService.getAllBooks();
    }

    // GET /api/books/{id}
    @GetMapping("/{id}")
    public Buku getOne(@PathVariable Integer id) {
        return bookService.getBookById(id);
    }

    // POST /api/books
    @PostMapping
    public ResponseEntity<Buku> create(@RequestBody Buku book) {
        Buku saved = bookService.createBook(book);
        return ResponseEntity
                .created(URI.create("/api/books/" + saved.getIdBuku()))
                .body(saved);
    }

    // PUT /api/books/{id}
    @PutMapping("/{id}")
    public Buku update(@PathVariable Integer id, @RequestBody Buku book) {
        return bookService.updateBook(id, book);
    }

    // DELETE /api/books/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }

    // GET /api/books/search?title=Clean
    @GetMapping("/search")
    public List<Buku> search(@RequestParam String title) {
        return bookService.searchByTitle(title);
    }
}
