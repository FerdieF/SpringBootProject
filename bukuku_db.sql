--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: bahasa_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.bahasa_enum AS ENUM (
    'inggris',
    'indonesia'
);


ALTER TYPE public.bahasa_enum OWNER TO postgres;

--
-- Name: genre_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.genre_enum AS ENUM (
    'self_improvement',
    'sejarah',
    'horor',
    'psikologi'
);


ALTER TYPE public.genre_enum OWNER TO postgres;

--
-- Name: status_buku_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status_buku_enum AS ENUM (
    'available',
    'out_of_stock'
);


ALTER TYPE public.status_buku_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: buku; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buku (
    id_buku integer NOT NULL,
    judul_buku character varying(255) NOT NULL,
    genre public.genre_enum,
    tahun_rilis integer,
    penulis character varying(255),
    penerbit character varying(255),
    bahasa public.bahasa_enum
);


ALTER TABLE public.buku OWNER TO postgres;

--
-- Name: buku_id_buku_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.buku_id_buku_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.buku_id_buku_seq OWNER TO postgres;

--
-- Name: buku_id_buku_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.buku_id_buku_seq OWNED BY public.buku.id_buku;


--
-- Name: jual_beli; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jual_beli (
    id_jual_beli integer NOT NULL,
    id_buku integer NOT NULL,
    harga numeric(12,2) NOT NULL,
    id_status integer NOT NULL
);


ALTER TABLE public.jual_beli OWNER TO postgres;

--
-- Name: jual_beli_id_jual_beli_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jual_beli_id_jual_beli_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.jual_beli_id_jual_beli_seq OWNER TO postgres;

--
-- Name: jual_beli_id_jual_beli_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jual_beli_id_jual_beli_seq OWNED BY public.jual_beli.id_jual_beli;


--
-- Name: status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status (
    id_status integer NOT NULL,
    id_buku integer NOT NULL,
    status_buku public.status_buku_enum NOT NULL
);


ALTER TABLE public.status OWNER TO postgres;

--
-- Name: status_id_status_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.status_id_status_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.status_id_status_seq OWNER TO postgres;

--
-- Name: status_id_status_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.status_id_status_seq OWNED BY public.status.id_status;


--
-- Name: buku id_buku; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buku ALTER COLUMN id_buku SET DEFAULT nextval('public.buku_id_buku_seq'::regclass);


--
-- Name: jual_beli id_jual_beli; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jual_beli ALTER COLUMN id_jual_beli SET DEFAULT nextval('public.jual_beli_id_jual_beli_seq'::regclass);


--
-- Name: status id_status; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status ALTER COLUMN id_status SET DEFAULT nextval('public.status_id_status_seq'::regclass);


--
-- Data for Name: buku; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.buku (id_buku, judul_buku, genre, tahun_rilis, penulis, penerbit, bahasa) FROM stdin;
\.


--
-- Data for Name: jual_beli; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jual_beli (id_jual_beli, id_buku, harga, id_status) FROM stdin;
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status (id_status, id_buku, status_buku) FROM stdin;
\.


--
-- Name: buku_id_buku_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.buku_id_buku_seq', 1, false);


--
-- Name: jual_beli_id_jual_beli_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jual_beli_id_jual_beli_seq', 1, false);


--
-- Name: status_id_status_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.status_id_status_seq', 1, false);


--
-- Name: buku buku_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buku
    ADD CONSTRAINT buku_pkey PRIMARY KEY (id_buku);


--
-- Name: jual_beli jual_beli_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jual_beli
    ADD CONSTRAINT jual_beli_pkey PRIMARY KEY (id_jual_beli);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id_status);


--
-- Name: jual_beli fk_jual_beli_buku; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jual_beli
    ADD CONSTRAINT fk_jual_beli_buku FOREIGN KEY (id_buku) REFERENCES public.buku(id_buku) ON DELETE CASCADE;


--
-- Name: jual_beli fk_jual_beli_status; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jual_beli
    ADD CONSTRAINT fk_jual_beli_status FOREIGN KEY (id_status) REFERENCES public.status(id_status) ON DELETE CASCADE;


--
-- Name: status fk_status_buku; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT fk_status_buku FOREIGN KEY (id_buku) REFERENCES public.buku(id_buku) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

