import mongoose from "mongoose";
import { Schema } from "mongoose";

const destacados = new Schema({
    titulo: String,
    descripcion: String,
    precio: String,
    fondoIzquierda: String,
    listaDeColores: Array,
    listaDeTalles: Array,
    imagenUrl: String,
    imagenSecundariaUrl: Array
});

export default mongoose.models.destacados || mongoose.model("destacados", destacados);