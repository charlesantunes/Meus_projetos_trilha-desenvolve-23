import mongoose from "mongoose";

mongoose.connect("mongodb+srv://charlesantunes:220106@charlesdb.sovmfi2.mongodb.net/CharlesDB"); //apaguei o <password> e coloquei minha senha do db, apaguei p ?retryWrites=true&w=majority e coloquei o nome do meu DATABASE.

let db = mongoose.connection;

export default db;