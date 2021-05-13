import express from "express";
import { pool } from "../database/db.js";

const router = express.Router();

export const getAlumnos = async (req, res) => {
  try {
    const listalumnos = await pool.query("SELECT * FROM alumnos");
    res.status(200).json(listalumnos.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await pool.query(
      "SELECT * FROM alumnos WHERE alumno_id = $1",
      [id]
    );
    res.status(200).json(alumno.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAlumno = async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono } = req.body;

    await pool.query(
      "INSERT INTO alumnos(nombre, apellido, correo, telefono) VALUES ($1, $2, $3, $4)",
      [nombre, apellido, correo, telefono]
    );
    res.json("Se han guardado los datos correctamente");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, correo, telefono } = req.body;

    const updateAlumno = await pool.query(
      "UPDATE alumnos SET nombre = $1, apellido= $2, correo = $3, telefono = $4 WHERE alumno_id = $5",
      [nombre, apellido, correo, telefono, id]
    );
    res.json("Se han guardado los datos correctamente");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM alumnos WHERE alumno_id = $1", [id]);
    res.json(`Se ha borrado el alumno con id ${id}`);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
