// Operaciones http
import connectMongo from "@/libs/mongooseDb";
import destacado from "@/models/destacado";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({ 
    cloud_name: 'diu0ksiyr', 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET // Click 'View Credentials' below to copy your API secret
});

export async function POST(request){
    await connectMongo();
    const res = await request.json();
    const data = await destacado.create(res);

    return NextResponse.json(data);
}