--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6 (Ubuntu 15.6-1.pgdg23.10+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg23.10+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: abonnement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.abonnement (
    id_abonnement integer NOT NULL,
    nom_abonnement character(50) NOT NULL,
    type_abonnement character(50) NOT NULL,
    montant_abonnement numeric NOT NULL
);


ALTER TABLE public.abonnement OWNER TO postgres;

--
-- Name: abonnement_id_abonnement_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.abonnement_id_abonnement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abonnement_id_abonnement_seq OWNER TO postgres;

--
-- Name: abonnement_id_abonnement_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.abonnement_id_abonnement_seq OWNED BY public.abonnement.id_abonnement;


--
-- Name: affecter_client_ferme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affecter_client_ferme (
    id_client integer,
    id_entrainement_ferme integer
);

CREATE TABLE public.affecter_client_ouvert (
    id_client integer,
    id_entrainement_ouvert integer
);

ALTER TABLE public.affecter_client_ferme OWNER TO postgres;

--
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    address character varying(200),
    email character varying(100),
    password character varying(100),
    sex character(1),
    weight numeric(5,2),
    height numeric(5,2),
    motivation text,
    goal character varying(100),
    trainingtype character varying(100),
    phone character varying(10),
    birthdate date,
    registrationdate date,
    photo bytea
);


ALTER TABLE public.client OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.client_id_seq OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;


--
-- Name: entrainement_ferme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrainement_ferme (
    id_entrainement_ferme integer NOT NULL,
    id_salle integer NOT NULL,
    id_entraineur integer NOT NULL,
    date_session date NOT NULL,
    jour_de_la_semaine character(10),
    debut time without time zone,
    fin time without time zone,
    effectif integer,
    effectif_max integer NOT NULL,
    nom_session character(20)
);


ALTER TABLE public.entrainement_ferme OWNER TO postgres;

--
-- Name: entrainement_ferme_id_entrainement_ferme_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entrainement_ferme_id_entrainement_ferme_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entrainement_ferme_id_entrainement_ferme_seq OWNER TO postgres;

--
-- Name: entrainement_ferme_id_entrainement_ferme_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrainement_ferme_id_entrainement_ferme_seq OWNED BY public.entrainement_ferme.id_entrainement_ferme;


--
-- Name: entrainement_ouvert; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrainement_ouvert (
    id_entrainement_ouvert integer NOT NULL,
    id_salle integer NOT NULL,
    id_entraineur integer NOT NULL,
    date_session date NOT NULL,
    jour_de_la_semaine character(10) NOT NULL,
    debut time without time zone,
    fin time without time zone,
    nom_session character(20)
);


ALTER TABLE public.entrainement_ouvert OWNER TO postgres;

--
-- Name: entrainement_ouvert_id_entrainement_ouvert_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entrainement_ouvert_id_entrainement_ouvert_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entrainement_ouvert_id_entrainement_ouvert_seq OWNER TO postgres;

--
-- Name: entrainement_ouvert_id_entrainement_ouvert_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrainement_ouvert_id_entrainement_ouvert_seq OWNED BY public.entrainement_ouvert.id_entrainement_ouvert;


--
-- Name: entraineur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entraineur (
    id integer NOT NULL,
    nom character(50),
    prenom character(50),
    sexe character(1),
    photo bytea,
    adresse character(50),
    email character(50) NOT NULL,
    password character(30),
    etat character(1),
    phrase_accroche character(255)
);


ALTER TABLE public.entraineur OWNER TO postgres;

--
-- Name: entraineur_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entraineur_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entraineur_id_seq OWNER TO postgres;

--
-- Name: entraineur_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entraineur_id_seq OWNED BY public.entraineur.id;


--
-- Name: equipement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipement (
    id_equipement integer NOT NULL,
    id_type_equipement integer,
    nom_equipement character(50),
    etat_equipement character(20),
    disponibilite character(20),
    date_derniere_maintenance date
);


ALTER TABLE public.equipement OWNER TO postgres;

--
-- Name: equipement_id_equipement_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.equipement_id_equipement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.equipement_id_equipement_seq OWNER TO postgres;

--
-- Name: equipement_id_equipement_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.equipement_id_equipement_seq OWNED BY public.equipement.id_equipement;


--
-- Name: facture; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facture (
    id_facture integer NOT NULL,
    id_client integer,
    nom_facture character(30) NOT NULL,
    montant_facture numeric,
    date_limite_facture date,
    etat_facture character(1)
);


ALTER TABLE public.facture OWNER TO postgres;

--
-- Name: facture_id_facture_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facture_id_facture_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.facture_id_facture_seq OWNER TO postgres;

--
-- Name: facture_id_facture_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.facture_id_facture_seq OWNED BY public.facture.id_facture;


--
-- Name: gestionnaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gestionnaire (
    id integer NOT NULL,
    nom character varying(100),
    email character varying(100),
    password character varying(100),
    age integer
);


ALTER TABLE public.gestionnaire OWNER TO postgres;

--
-- Name: gestionnaire_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gestionnaire_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gestionnaire_id_seq OWNER TO postgres;

--
-- Name: gestionnaire_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gestionnaire_id_seq OWNED BY public.gestionnaire.id;


--
-- Name: paiement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paiement (
    id_paiement integer NOT NULL,
    id_facture integer,
    id_client integer,
    nom_paiement character(30),
    montant_paiement numeric,
    date_paiement date
);


ALTER TABLE public.paiement OWNER TO postgres;

--
-- Name: paiement_id_paiement_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paiement_id_paiement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.paiement_id_paiement_seq OWNER TO postgres;

--
-- Name: paiement_id_paiement_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paiement_id_paiement_seq OWNED BY public.paiement.id_paiement;


--
-- Name: rapport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rapport (
    id_rapport integer NOT NULL,
    nom_rapport character(20),
    date_rapport date,
    nombre_effectif_ferme integer,
    nombre_effectif_ouvert integer,
    effectif_total integer,
    nombre_instruments_abime integer,
    nombre_instruments_ajout integer,
    nombre_facture_genere integer,
    nombre_facture_paye integer,
    nombre_session_plein integer,
    nombre_session_vide integer,
    nombre_nouveau_client integer,
    nombre_client_parti integer
);


ALTER TABLE public.rapport OWNER TO postgres;

--
-- Name: rapport_id_rapport_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rapport_id_rapport_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rapport_id_rapport_seq OWNER TO postgres;

--
-- Name: rapport_id_rapport_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rapport_id_rapport_seq OWNED BY public.rapport.id_rapport;


--
-- Name: registre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.registre (
    idr integer NOT NULL,
    nom character varying(100),
    registre character varying(100)
);


ALTER TABLE public.registre OWNER TO postgres;

--
-- Name: registre_idr_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.registre_idr_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.registre_idr_seq OWNER TO postgres;

--
-- Name: registre_idr_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.registre_idr_seq OWNED BY public.registre.idr;


--
-- Name: salle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salle (
    id_salle integer NOT NULL,
    nom_salle character(20),
    etat character(1)
);


ALTER TABLE public.salle OWNER TO postgres;

--
-- Name: salle_id_salle_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.salle_id_salle_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.salle_id_salle_seq OWNER TO postgres;

--
-- Name: salle_id_salle_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.salle_id_salle_seq OWNED BY public.salle.id_salle;


--
-- Name: type_equipement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_equipement (
    id_type_equipement integer NOT NULL,
    nom_type_equipement character(50) NOT NULL,
    qte_equipement integer NOT NULL
);


ALTER TABLE public.type_equipement OWNER TO postgres;

--
-- Name: type_equipement_id_type_equipement_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_equipement_id_type_equipement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_equipement_id_type_equipement_seq OWNER TO postgres;

--
-- Name: type_equipement_id_type_equipement_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.type_equipement_id_type_equipement_seq OWNED BY public.type_equipement.id_type_equipement;


--
-- Name: abonnement id_abonnement; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.abonnement ALTER COLUMN id_abonnement SET DEFAULT nextval('public.abonnement_id_abonnement_seq'::regclass);


--
-- Name: client id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);


--
-- Name: entrainement_ferme id_entrainement_ferme; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrainement_ferme ALTER COLUMN id_entrainement_ferme SET DEFAULT nextval('public.entrainement_ferme_id_entrainement_ferme_seq'::regclass);


--
-- Name: entrainement_ouvert id_entrainement_ouvert; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrainement_ouvert ALTER COLUMN id_entrainement_ouvert SET DEFAULT nextval('public.entrainement_ouvert_id_entrainement_ouvert_seq'::regclass);


--
-- Name: entraineur id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entraineur ALTER COLUMN id SET DEFAULT nextval('public.entraineur_id_seq'::regclass);


--
-- Name: equipement id_equipement; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipement ALTER COLUMN id_equipement SET DEFAULT nextval('public.equipement_id_equipement_seq'::regclass);


--
-- Name: facture id_facture; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture ALTER COLUMN id_facture SET DEFAULT nextval('public.facture_id_facture_seq'::regclass);


--
-- Name: gestionnaire id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gestionnaire ALTER COLUMN id SET DEFAULT nextval('public.gestionnaire_id_seq'::regclass);


--
-- Name: paiement id_paiement; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paiement ALTER COLUMN id_paiement SET DEFAULT nextval('public.paiement_id_paiement_seq'::regclass);


--
-- Name: rapport id_rapport; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rapport ALTER COLUMN id_rapport SET DEFAULT nextval('public.rapport_id_rapport_seq'::regclass);


--
-- Name: registre idr; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registre ALTER COLUMN idr SET DEFAULT nextval('public.registre_idr_seq'::regclass);


--
-- Name: salle id_salle; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salle ALTER COLUMN id_salle SET DEFAULT nextval('public.salle_id_salle_seq'::regclass);


--
-- Name: type_equipement id_type_equipement; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_equipement ALTER COLUMN id_type_equipement SET DEFAULT nextval('public.type_equipement_id_type_equipement_seq'::regclass);


--
-- Data for Name: abonnement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.abonnement (id_abonnement, nom_abonnement, type_abonnement, montant_abonnement) FROM stdin;
1	Abonnement1                                       	Type1                                             	100.00
2	Abonnement2                                       	Type2                                             	200.00
3	Abonnement3                                       	Type3                                             	300.00
4	Abonnement4                                       	Type4                                             	400.00
\.


--
-- Data for Name: affecter_client_ferme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affecter_client_ferme (id_client, id_entrainement_ferme) FROM stdin;
1	1
2	2
3	3
3	4
2	5
1	6
1	7
1	8
1	3
1	20
3	\N
\.


--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client (id, firstname, lastname, address, email, password, sex, weight, height, motivation, goal, trainingtype, phone, birthdate, registrationdate, photo) FROM stdin;
1	John	Doe	123 Main St, City	a@a.aa	a	M	75.00	180.00	Stay fit and healthy	Lose weight	Cardio	1234567890	1990-01-15	2024-01-26	\N
2	Johny	Deep	1 Main St, City	johny.d@example.com	h_password	M	75.50	180.00	Stay fit and healthy	Lose weight	Cardio	1234567890	1990-01-15	2024-01-26	\N
3	J	Deep	1 Main St, City	johny.d@ele.com	h_pard	M	75.50	180.00	Stay fit and healthy	Lose weight	Cardio	1234567890	1990-01-15	2024-01-26	\N
\.


--
-- Data for Name: entrainement_ferme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrainement_ferme (id_entrainement_ferme, id_salle, id_entraineur, date_session, jour_de_la_semaine, debut, fin, effectif, effectif_max, nom_session) FROM stdin;
1	1	1	2024-01-28	Lundi     	06:00:00	08:00:00	10	30	Session 1           
2	2	2	2024-01-27	Mardi     	08:00:00	10:00:00	15	30	Session 2           
3	3	3	2024-01-26	Mercredi  	08:00:00	10:00:00	15	30	Session 3           
4	4	4	2024-01-25	Jeudi     	10:00:00	12:00:00	20	30	Session 4           
5	5	5	2024-01-24	Vendredi  	12:00:00	14:00:00	25	30	Session 5           
6	6	6	2024-01-23	Samedi    	14:00:00	16:00:00	15	30	Session 6           
7	7	7	2024-01-22	Dimanche  	16:00:00	18:00:00	20	30	Session 7           
8	8	8	2024-01-21	Lundi     	18:00:00	20:00:00	25	30	Session 8           
9	1	2	2024-01-20	Mardi     	20:00:00	22:00:00	15	30	Session 9           
10	1	10	2024-01-19	Mercredi  	06:00:00	08:00:00	20	30	Session 10          
11	2	2	2024-01-18	Mercredi  	20:00:00	22:00:00	25	30	Session 20          
12	2	1	2024-01-30	\N	08:00:00	10:00:00	0	10	jjjjj               
\.


--
-- Data for Name: entrainement_ouvert; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrainement_ouvert (id_entrainement_ouvert, id_salle, id_entraineur, date_session, jour_de_la_semaine, debut, fin, nom_session) FROM stdin;
1	1	1	2024-01-01	Lundi     	06:00:00	08:00:00	Session 1           
2	2	2	2024-01-02	Mardi     	08:00:00	10:00:00	Session 2           
3	3	3	2024-01-03	Mercredi  	10:00:00	12:00:00	Session 3           
4	4	4	2024-01-04	Jeudi     	12:00:00	14:00:00	Session 4           
5	5	5	2024-01-05	Vendredi  	14:00:00	16:00:00	Session 5           
6	6	6	2024-01-06	Samedi    	16:00:00	18:00:00	Session 6           
7	7	7	2024-01-07	Dimanche  	18:00:00	20:00:00	Session 7           
8	8	8	2024-01-08	Lundi     	20:00:00	22:00:00	Session 8           
9	9	9	2024-01-09	Mardi     	06:00:00	08:00:00	Session 9           
10	10	10	2024-01-10	Mercredi  	08:00:00	10:00:00	Session 10          
\.


--
-- Data for Name: entraineur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entraineur (id, nom, prenom, sexe, photo, adresse, email, password, etat, phrase_accroche) FROM stdin;
2	Nom2                                              	Prenom2                                           	F	\N	Adresse2                                          	email2@example.com                                	password2                     	E	Phrase2                                                                                                                                                                                                                                                        
3	Nom3                                              	Prenom3                                           	M	\N	Adresse3                                          	email3@example.com                                	password3                     	E	Phrase3                                                                                                                                                                                                                                                        
4	Nom4                                              	Prenom4                                           	F	\N	Adresse4                                          	email4@example.com                                	password4                     	E	Phrase4                                                                                                                                                                                                                                                        
5	Nom5                                              	Prenom5                                           	M	\N	Adresse5                                          	email5@example.com                                	password5                     	E	Phrase5                                                                                                                                                                                                                                                        
6	Nom6                                              	Prenom6                                           	F	\N	Adresse6                                          	email6@example.com                                	password6                     	E	Phrase6                                                                                                                                                                                                                                                        
7	Nom7                                              	Prenom7                                           	M	\N	Adresse7                                          	email7@example.com                                	password7                     	E	Phrase7                                                                                                                                                                                                                                                        
8	Nom8                                              	Prenom8                                           	F	\N	Adresse8                                          	email8@example.com                                	password8                     	E	Phrase8                                                                                                                                                                                                                                                        
9	Nom9                                              	Prenom9                                           	M	\N	Adresse9                                          	email9@example.com                                	password9                     	E	Phrase9                                                                                                                                                                                                                                                        
10	Nom10                                             	Prenom10                                          	F	\N	Adresse10                                         	email10@example.com                               	password10                    	E	Phrase10                                                                                                                                                                                                                                                       
1	Nom1                                              	Prenom1                                           	M	\N	Adresse1                                          	b@b.bb                                            	b                             	E	Phrase1                                                                                                                                                                                                                                                        
\.


--
-- Data for Name: equipement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.equipement (id_equipement, id_type_equipement, nom_equipement, etat_equipement, disponibilite, date_derniere_maintenance) FROM stdin;
1	1	Equipement1                                       	fonctionnel         	Disponible          	2024-01-01
2	1	Equipement2                                       	défectueux          	Non disponible      	2024-01-02
3	2	Equipement3                                       	fonctionnel         	Disponible          	2024-01-03
4	2	Equipement4                                       	défectueux          	Non disponible      	2024-01-04
5	1	Equipement5                                       	fonctionnel         	Disponible          	2024-01-05
6	2	Equipement6                                       	défectueux          	Non disponible      	2024-01-06
\.


--
-- Data for Name: facture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facture (id_facture, id_client, nom_facture, montant_facture, date_limite_facture, etat_facture) FROM stdin;
1	1	Facture A                     	500.00	2024-02-01	P
2	2	Facture B                     	750.00	2024-02-15	E
3	3	Facture C                     	1200.00	2024-03-01	P
4	1	Facture D                     	900.00	2024-02-10	E
5	2	Facture E                     	600.00	2024-03-15	P
6	3	Facture F                     	800.00	2024-03-20	E
\.


--
-- Data for Name: gestionnaire; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gestionnaire (id, nom, email, password, age) FROM stdin;
2	Nom2	email2@example.com	password2	51
3	Nom3	email3@example.com	password3	52
4	Nom4	email4@example.com	password4	53
5	Nom5	email5@example.com	password5	54
6	Nom6	email6@example.com	password6	55
1	Nom1	c@c.cc	c	50
\.


--
-- Data for Name: paiement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paiement (id_paiement, id_facture, id_client, nom_paiement, montant_paiement, date_paiement) FROM stdin;
1	1	1	Paiement A                    	200.00	2024-01-15
2	2	2	Paiement B                    	350.00	2024-02-20
3	3	3	Paiement C                    	500.00	2024-03-05
4	4	1	Paiement D                    	400.00	2024-02-25
5	5	2	Paiement E                    	300.00	2024-03-30
6	6	3	Paiement F                    	400.00	2024-03-25
7	4	1	qaaa                          	1234	2024-01-27
\.


--
-- Data for Name: rapport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rapport (id_rapport, nom_rapport, date_rapport, nombre_effectif_ferme, nombre_effectif_ouvert, effectif_total, nombre_instruments_abime, nombre_instruments_ajout, nombre_facture_genere, nombre_facture_paye, nombre_session_plein, nombre_session_vide, nombre_nouveau_client, nombre_client_parti) FROM stdin;
1	Rapport1            	2024-01-01	10	20	30	2	5	15	10	7	3	4	1
2	Rapport2            	2024-01-02	15	25	40	3	6	20	15	8	4	5	2
3	Rapport3            	2024-01-03	20	30	50	4	7	25	20	9	5	6	3
4	Rapport4            	2024-01-04	25	35	60	5	8	30	25	10	6	7	4
5	Rapport18           	2024-01-18	90	190	280	18	46	140	90	66	28	36	8
6	Rapport19           	2024-01-19	95	195	290	19	48	145	95	68	29	38	9
7	Rapport20           	2024-01-20	100	200	300	20	50	150	100	70	30	40	10
\.


--
-- Data for Name: registre; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.registre (idr, nom, registre) FROM stdin;
1	Nom1	Registre1
2	Nom2	Registre2
3	Nom3	Registre3
4	Nom4	Registre4
5	Nom5	Registre5
\.


--
-- Data for Name: salle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.salle (id_salle, nom_salle, etat) FROM stdin;
1	Salle 1             	A
2	Salle 2             	B
3	Salle 3             	C
4	Salle 4             	D
5	Salle 5             	E
6	Salle 6             	F
7	Salle 7             	G
8	Salle 8             	H
9	Salle 9             	I
10	Salle 10            	J
11	Salle 11            	K
12	Salle 12            	L
13	Salle 13            	M
14	Salle 14            	N
15	Salle 15            	O
16	Salle 16            	P
17	Salle 17            	Q
18	Salle 18            	R
19	Salle 19            	S
20	Salle 20            	T
21	Salle 21            	U
22	Salle 22            	V
23	Salle 23            	W
24	Salle 24            	X
25	Salle 25            	Y
26	Salle 26            	Z
27	Salle 27            	A
28	Salle 28            	B
29	Salle 29            	C
30	Salle 30            	D
\.


--
-- Data for Name: type_equipement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_equipement (id_type_equipement, nom_type_equipement, qte_equipement) FROM stdin;
1	Type1                                             	10
2	Type2                                             	20
\.


--
-- Name: abonnement_id_abonnement_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.abonnement_id_abonnement_seq', 4, true);


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 5, true);


--
-- Name: entrainement_ferme_id_entrainement_ferme_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrainement_ferme_id_entrainement_ferme_seq', 12, true);


--
-- Name: entrainement_ouvert_id_entrainement_ouvert_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrainement_ouvert_id_entrainement_ouvert_seq', 10, true);


--
-- Name: entraineur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entraineur_id_seq', 10, true);


--
-- Name: equipement_id_equipement_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.equipement_id_equipement_seq', 6, true);


--
-- Name: facture_id_facture_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facture_id_facture_seq', 6, true);


--
-- Name: gestionnaire_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gestionnaire_id_seq', 6, true);


--
-- Name: paiement_id_paiement_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paiement_id_paiement_seq', 7, true);


--
-- Name: rapport_id_rapport_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rapport_id_rapport_seq', 7, true);


--
-- Name: registre_idr_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.registre_idr_seq', 5, true);


--
-- Name: salle_id_salle_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.salle_id_salle_seq', 30, true);


--
-- Name: type_equipement_id_type_equipement_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_equipement_id_type_equipement_seq', 2, true);


--
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- Name: gestionnaire gestionnaire_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gestionnaire
    ADD CONSTRAINT gestionnaire_pkey PRIMARY KEY (id);


--
-- Name: abonnement pk_abonnement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.abonnement
    ADD CONSTRAINT pk_abonnement PRIMARY KEY (id_abonnement);


--
-- Name: entraineur pk_entraineur; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entraineur
    ADD CONSTRAINT pk_entraineur PRIMARY KEY (id);


--
-- Name: equipement pk_equipement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipement
    ADD CONSTRAINT pk_equipement PRIMARY KEY (id_equipement);


--
-- Name: facture pk_facture; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture
    ADD CONSTRAINT pk_facture PRIMARY KEY (id_facture);


--
-- Name: paiement pk_paiement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paiement
    ADD CONSTRAINT pk_paiement PRIMARY KEY (id_paiement);


--
-- Name: rapport pk_rapport; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rapport
    ADD CONSTRAINT pk_rapport PRIMARY KEY (id_rapport);


--
-- Name: salle pk_salle; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salle
    ADD CONSTRAINT pk_salle PRIMARY KEY (id_salle);


--
-- Name: type_equipement pk_type_equipement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_equipement
    ADD CONSTRAINT pk_type_equipement PRIMARY KEY (id_type_equipement);


--
-- Name: entrainement_ferme pkf_entrainement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrainement_ferme
    ADD CONSTRAINT pkf_entrainement PRIMARY KEY (id_entrainement_ferme);


--
-- Name: entrainement_ouvert pko_entrainement; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrainement_ouvert
    ADD CONSTRAINT pko_entrainement PRIMARY KEY (id_entrainement_ouvert);


--
-- Name: registre registre_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registre
    ADD CONSTRAINT registre_pkey PRIMARY KEY (idr);


--
-- Name: facture fk_facture_client; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture
    ADD CONSTRAINT fk_facture_client FOREIGN KEY (id_client) REFERENCES public.client(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

