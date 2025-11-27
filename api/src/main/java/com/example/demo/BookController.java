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
    public List<Book> getAll() {
        return bookService.getAllBooks();
    }

    // GET /api/books/{id}
    @GetMapping("/{id}")
    public Book getOne(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    // POST /api/books
    @PostMapping
    public ResponseEntity<Book> create(@RequestBody Book book) {
        Book saved = bookService.createBook(book);
        return ResponseEntity
                .created(URI.create("/api/books/" + saved.getId()))
                .body(saved);
    }

    // PUT /api/books/{id}
    @PutMapping("/{id}")
    public Book update(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    // DELETE /api/books/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }

    // GET /api/books/search?title=Clean
    @GetMapping("/search")
    public List<Book> search(@RequestParam String title) {
        return bookService.searchByTitle(title);
    }
}
