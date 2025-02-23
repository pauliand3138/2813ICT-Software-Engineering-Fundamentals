PGDMP     *    %            	    {            forestHealthDB    15.4    15.4     &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    16398    forestHealthDB    DATABASE     �   CREATE DATABASE "forestHealthDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
     DROP DATABASE "forestHealthDB";
                postgres    false            �            1259    16454    burn_severity    TABLE     m   CREATE TABLE public.burn_severity (
    burnsevid integer NOT NULL,
    burnsevdesc character varying(25)
);
 !   DROP TABLE public.burn_severity;
       public         heap    postgres    false            �            1259    16413    citizen_scientist    TABLE     �   CREATE TABLE public.citizen_scientist (
    userid character varying(255) NOT NULL,
    password character varying(255),
    gender character varying(10),
    dateofbirth character varying(255),
    name character varying(100)
);
 %   DROP TABLE public.citizen_scientist;
       public         heap    postgres    false            �            1259    16459    form    TABLE       CREATE TABLE public.form (
    formid character varying(255) NOT NULL,
    location character varying(255),
    date character varying(255),
    landscapeid integer,
    vegtypeid integer,
    vegstageid integer,
    burnsevid integer,
    userid character varying(255)
);
    DROP TABLE public.form;
       public         heap    postgres    false            �            1259    16439 	   landscape    TABLE     m   CREATE TABLE public.landscape (
    landscapeid integer NOT NULL,
    landscapedesc character varying(25)
);
    DROP TABLE public.landscape;
       public         heap    postgres    false            �            1259    16466    research_staff    TABLE     �   CREATE TABLE public.research_staff (
    staffid character varying(255) NOT NULL,
    password character varying(255),
    name character varying(30),
    isadmin boolean
);
 "   DROP TABLE public.research_staff;
       public         heap    postgres    false            �            1259    16444    vegetation_stage    TABLE     r   CREATE TABLE public.vegetation_stage (
    vegstageid integer NOT NULL,
    vegstagedesc character varying(25)
);
 $   DROP TABLE public.vegetation_stage;
       public         heap    postgres    false            �            1259    16449    vegetation_type    TABLE     o   CREATE TABLE public.vegetation_type (
    vegtypeid integer NOT NULL,
    vegtypedesc character varying(25)
);
 #   DROP TABLE public.vegetation_type;
       public         heap    postgres    false            !          0    16454    burn_severity 
   TABLE DATA           ?   COPY public.burn_severity (burnsevid, burnsevdesc) FROM stdin;
    public          postgres    false    218   ]#                 0    16413    citizen_scientist 
   TABLE DATA           X   COPY public.citizen_scientist (userid, password, gender, dateofbirth, name) FROM stdin;
    public          postgres    false    214   �#       "          0    16459    form 
   TABLE DATA           m   COPY public.form (formid, location, date, landscapeid, vegtypeid, vegstageid, burnsevid, userid) FROM stdin;
    public          postgres    false    219   �$                 0    16439 	   landscape 
   TABLE DATA           ?   COPY public.landscape (landscapeid, landscapedesc) FROM stdin;
    public          postgres    false    215   �%       #          0    16466    research_staff 
   TABLE DATA           J   COPY public.research_staff (staffid, password, name, isadmin) FROM stdin;
    public          postgres    false    220   T&                 0    16444    vegetation_stage 
   TABLE DATA           D   COPY public.vegetation_stage (vegstageid, vegstagedesc) FROM stdin;
    public          postgres    false    216   �'                  0    16449    vegetation_type 
   TABLE DATA           A   COPY public.vegetation_type (vegtypeid, vegtypedesc) FROM stdin;
    public          postgres    false    217   (       �           2606    16458     burn_severity burn_severity_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.burn_severity
    ADD CONSTRAINT burn_severity_pkey PRIMARY KEY (burnsevid);
 J   ALTER TABLE ONLY public.burn_severity DROP CONSTRAINT burn_severity_pkey;
       public            postgres    false    218            }           2606    16419 (   citizen_scientist citizen_scientist_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.citizen_scientist
    ADD CONSTRAINT citizen_scientist_pkey PRIMARY KEY (userid);
 R   ALTER TABLE ONLY public.citizen_scientist DROP CONSTRAINT citizen_scientist_pkey;
       public            postgres    false    214            �           2606    16465    form form_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_pkey PRIMARY KEY (formid);
 8   ALTER TABLE ONLY public.form DROP CONSTRAINT form_pkey;
       public            postgres    false    219                       2606    16443    landscape landscape_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.landscape
    ADD CONSTRAINT landscape_pkey PRIMARY KEY (landscapeid);
 B   ALTER TABLE ONLY public.landscape DROP CONSTRAINT landscape_pkey;
       public            postgres    false    215            �           2606    16472 "   research_staff research_staff_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.research_staff
    ADD CONSTRAINT research_staff_pkey PRIMARY KEY (staffid);
 L   ALTER TABLE ONLY public.research_staff DROP CONSTRAINT research_staff_pkey;
       public            postgres    false    220            �           2606    16448 &   vegetation_stage vegetation_stage_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.vegetation_stage
    ADD CONSTRAINT vegetation_stage_pkey PRIMARY KEY (vegstageid);
 P   ALTER TABLE ONLY public.vegetation_stage DROP CONSTRAINT vegetation_stage_pkey;
       public            postgres    false    216            �           2606    16453 $   vegetation_type vegetation_type_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.vegetation_type
    ADD CONSTRAINT vegetation_type_pkey PRIMARY KEY (vegtypeid);
 N   ALTER TABLE ONLY public.vegetation_type DROP CONSTRAINT vegetation_type_pkey;
       public            postgres    false    217            �           2606    16540    form fk_form_burn_severity    FK CONSTRAINT     �   ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk_form_burn_severity FOREIGN KEY (burnsevid) REFERENCES public.burn_severity(burnsevid);
 D   ALTER TABLE ONLY public.form DROP CONSTRAINT fk_form_burn_severity;
       public          postgres    false    219    218    3205            �           2606    16520    form fk_form_citizen_scientist    FK CONSTRAINT     �   ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk_form_citizen_scientist FOREIGN KEY (userid) REFERENCES public.citizen_scientist(userid);
 H   ALTER TABLE ONLY public.form DROP CONSTRAINT fk_form_citizen_scientist;
       public          postgres    false    3197    219    214            �           2606    16525    form fk_form_landscape    FK CONSTRAINT     �   ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk_form_landscape FOREIGN KEY (landscapeid) REFERENCES public.landscape(landscapeid);
 @   ALTER TABLE ONLY public.form DROP CONSTRAINT fk_form_landscape;
       public          postgres    false    3199    219    215            �           2606    16530    form fk_form_vegetation_stage    FK CONSTRAINT     �   ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk_form_vegetation_stage FOREIGN KEY (vegstageid) REFERENCES public.vegetation_stage(vegstageid);
 G   ALTER TABLE ONLY public.form DROP CONSTRAINT fk_form_vegetation_stage;
       public          postgres    false    219    3201    216            �           2606    16535    form fk_form_vegetation_type    FK CONSTRAINT     �   ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk_form_vegetation_type FOREIGN KEY (vegtypeid) REFERENCES public.vegetation_type(vegtypeid);
 F   ALTER TABLE ONLY public.form DROP CONSTRAINT fk_form_vegetation_type;
       public          postgres    false    219    217    3203            !   9   x�3��K*-�+�2���/�2���OI-J,I�2���L��2�t�()J�M����� f��         �   x�e�=S�0 ��9�X��GS�Ėִ�R�"�K@��K�J8�_/\���{a�tt�i�j0�Ұ�3U��"����I@� W�.^�<Д�8�Լ߻�+��׀2Y9���M��ن���dCN���υ�x�5���j:"�D(�o�Ɠ6�{��Y>����� ��a�"
�Z��N���L�Չض�G�(V�����WQ~��!b}��j�n��4�Fș/&���Նo���|]N      "   N  x�m�INC1 �uz�^�ș��H��q�T��V����@�,g�yHK�l�U $�P)4(���)61ϧ�Q]���~����8t��9cMíO��q\^�~�r������9@(ҡ�ƀVID2�$�3ϛ��v���Ѹ����J�J�S�	'������VxZ?��t�a-���#��b���3DG舣Ѩ`��>g)�����Y��e�o3�|��Fk�^B��2G{Ȫ�"�:ysw�U]&�������z���`� ����a��[uE�y��'/t���컪����ȍ5h,�c.��{�7�_^Dϖ�z�Z�>��C         E   x�3�t�I,Q�W�K)�2�ҹ�8�2S�S���99\Ɯ�9��\&�a�99��@q�Ҝ�J�=... ~$�      #   e  x�=��r�0 @�5|E�A�.�PAA� B��<�Z�����?p��MZ}
�E6S��O�.��˯����A~��,xj6��sZ���C��s�?ȋЋ%�)yR�)�쎼%�'�t��&�֭�ͷhA����yU7o ��h��#�H�ݟ���檵t�1{�z�!���:(�x��ߠ�:	UYO��B��,�7��+����;G�9nvf��:��R���F+'�;Eˠw6��-YDua�`��������ey�X79Ȁ��F�kv�p,&���M	�h�GZ���� ����?��Ag�C�q(��S%Rl�eoڭ���s��m�8�+��� �~,~H�(~*�V         C   x�3���I�2��M,)-J�2�JM/�//��2��ͬHM�2�tK-W()JM-V((J-N�+����� �c          G   x�3�tK-�S�/R�H-J�2�t/J,.��2��(*MJ��2�J��K�/J-.�2��,H,�L������ f��     