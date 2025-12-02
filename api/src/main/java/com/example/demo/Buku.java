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
    private Integer idBuku;

    @Column(name = "judul_buku")
    private String judulBuku;

    @Enumerated(EnumType.STRING)
    private Genre genre;

    @Column(name = "tahun_rilis")
    private Integer tahunRilis;

    private String penulis;
    private String penerbit;

    @Enumerated(EnumType.STRING)
    private Bahasa bahasa;

    public enum Genre {
        self_improvement, sejarah, horor, psikologi
    }

    public enum Bahasa {
        inggris, indonesia
    }
}
