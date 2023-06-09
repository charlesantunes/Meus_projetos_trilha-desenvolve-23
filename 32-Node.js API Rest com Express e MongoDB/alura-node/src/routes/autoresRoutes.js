import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router(); //usando o Router() do express()

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutores)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;