// Operaciones http
import connectMongo from "@/libs/mongooseDb";
import destacado from "@/models/destacado";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectMongo();
    const res = await request.json();
    const data = await destacado.create(res);

    
    return NextResponse.json(data);
}