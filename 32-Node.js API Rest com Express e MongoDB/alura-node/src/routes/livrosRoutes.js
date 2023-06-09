import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router(); //usando o Router() do express()

router
    .get('/livros',LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .get('/livros/:id',LivroController.listarLivroPorId)
    .post('/livros', LivroController.cadastrarLivros)
    .put('/livros/:id', LivroController.atualizarLivros)
    .delete('/livros/:id', LivroController.excluirLivro)

export default router;  //vai ser chamado no app.js 