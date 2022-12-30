<<<<<<< HEAD


create database gestor_tareas;
use gestor_tareas;


create table tareas (
    id int(10) auto_increment not null primary key,
    nombreTarea varchar (300),
    descripcion text,
    fecha_creacion date,
    fecha_limite date
=======


create database gestor_tareas;
use gestor_tareas;


create table tareas (
    id int(10) auto_increment not null primary key,
    nombreTarea varchar (300),
    descripcion text,
    fecha_creacion date,
    fecha_limite date
>>>>>>> e912da27b976730187c24747432680bcba95686e
);