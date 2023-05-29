import app from "./src/app.js"

const port = process.env.PORT || 3000;

//mostrando a porta que está usando
app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})
