import mongoose from "mongoose";

// Base de datos

export default async function connectMongo(){
    await mongoose.connect(process.env.MONGODB);
}