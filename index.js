import express from "express";
import alumnoRoutes from "./routes/alumnoRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/alumnos", alumnoRoutes);

try {
  app.listen(PORT, () =>
    console.log(`Server Running on Port: http://localhost:${PORT}`)
  );
} catch (error) {
  console.log(`${error} did not connect`);
}
