

create database gestor_tareas;
use gestor_tareas;


create table tareas (
    id int(10) auto_increment not null primary key,
    nombreTarea varchar (300),
    descripcion text,
    fecha_creacion date,
    fecha_limite date
);

alter table tareas add clase varchar (20);


create table tareasEliminadas  (
    id int(10) auto_increment not null primary key,
    clase varchar(20),

    fecha_creacion date, 
    fecha_limite_establecida date,
    fecha_cierre date,

    vida_de_tarea varchar(30),
    calificacion int(1),
    tarea_completa varchar(2),
    cumplido_bajo_fecha_limite varchar(2),

    comentario text
);