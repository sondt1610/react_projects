PGDMP                         w            sanpham    11.2    11.2     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                        1262    16393    sanpham    DATABASE     �   CREATE DATABASE sanpham WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Vietnamese_Vietnam.1258' LC_CTYPE = 'Vietnamese_Vietnam.1258';
    DROP DATABASE sanpham;
             postgres    false            �            1259    16396    product_info    TABLE     |   CREATE TABLE public.product_info (
    product_price text,
    product_name text,
    id bigint NOT NULL,
    image text
);
     DROP TABLE public.product_info;
       public         postgres    false            �            1259    16394    product_info_id_seq    SEQUENCE     |   CREATE SEQUENCE public.product_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.product_info_id_seq;
       public       postgres    false    197                       0    0    product_info_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.product_info_id_seq OWNED BY public.product_info.id;
            public       postgres    false    196            }
           2604    16399    product_info id    DEFAULT     r   ALTER TABLE ONLY public.product_info ALTER COLUMN id SET DEFAULT nextval('public.product_info_id_seq'::regclass);
 >   ALTER TABLE public.product_info ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            �
          0    16396    product_info 
   TABLE DATA               N   COPY public.product_info (product_price, product_name, id, image) FROM stdin;
    public       postgres    false    197   �
                  0    0    product_info_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.product_info_id_seq', 9, true);
            public       postgres    false    196            
           2606    16404    product_info product_info_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.product_info
    ADD CONSTRAINT product_info_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.product_info DROP CONSTRAINT product_info_pkey;
       public         postgres    false    197            �
     x�͓�j�0�����$�|��=ˠ�I��X��e{��K	���n��c#��,D����+�V�j�y|����tE�g��?�89��	��h�I��|�L1E�! ���d�,IZLø�8���[0�$�:�����?���m����_��F�-3F9�,��Y7։Q�H�G�vg�ܣ \�ꫳ��V�����/~Y�Ja�]����OOmu^�����8��)�,��w�@�0��Kx�l��aV��$I� 4S1w     