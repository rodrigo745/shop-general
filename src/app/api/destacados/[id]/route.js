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

export async function GET(){
    await connectMongo();
    const data = await destacado.find();
    const resp = JSON.parse(JSON.stringify(data));
    return NextResponse.json(resp);
}