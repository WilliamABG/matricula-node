import express from "express";
import {
  getAlumnos,
  getAlumno,
  createAlumno,
  editAlumno,
  deleteAlumno,
} from "../controllers/alumnoController.js";
const router = express.Router();

router.get("/", getAlumnos);
router.get("/:id", getAlumno);
router.post("/", createAlumno);
router.put("/:id", editAlumno);
router.delete("/:id", deleteAlumno);

export default router;
