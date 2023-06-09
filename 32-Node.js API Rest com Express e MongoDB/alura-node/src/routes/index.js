import express from 'express'
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res)=>{ //essa rota da home, será feita aqui por ser simples
        res.status(200).send({titulo: "Curso node.js"})
    })

    app.use( //aqui colocar todas as rotas
        express.json(),
        livros,
        autores
    )
}

export default routes;