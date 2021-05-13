CREATE DATABASE dbnode;
CREATE TABLE alumnos (
  alumno_id SERIAL PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  apellido VARCHAR(30) NOT NULL,
  correo VARCHAR(30) NOT NULL,
  telefono INT NOT NULL
);