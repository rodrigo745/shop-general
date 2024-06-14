import mongoose from "mongoose";
import { Schema } from "mongoose";

const destacado = new Schema({
    titulo: String,
    descripcion: String,
    precio: String,
    fondoIzquierda: String
});

export default mongoose.models.destacado || mongoose.model("destacado", destacado);