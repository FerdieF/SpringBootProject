package com.example.demo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "buku")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Buku {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_buku")
    private Long idBuku;

    @Column(name = "judul_buku", nullable = false)
    private String judulBuku;

    @Enumerated(EnumType.STRING)
    @Column(name = "genre")
    private Genre genre;

    @Column(name = "tahun_rilis")
    private Integer tahunRilis;

    @Column(name = "penulis")
    private String penulis;

    @Column(name = "penerbit")
    private String penerbit;

    @Enumerated(EnumType.STRING)
    @Column(name = "bahasa")
    private Bahasa bahasa;
}
