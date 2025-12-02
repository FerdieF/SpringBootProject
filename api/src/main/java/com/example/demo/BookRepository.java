package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Buku, Integer> {
    List<Buku> findByJudulBukuContainingIgnoreCase(String judul);
}
