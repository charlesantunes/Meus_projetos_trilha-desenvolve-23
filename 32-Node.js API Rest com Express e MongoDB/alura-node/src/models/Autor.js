import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false   //criado automaticamente no mongodb, solicitei pra não criar
    }
)

const autores = mongoose.model("autores", autorSchema);

export default autores;