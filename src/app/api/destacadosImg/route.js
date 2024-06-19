import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({ 
    cloud_name: 'diu0ksiyr', 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET // Click 'View Credentials' below to copy your API secret
});


export async function POST(request){
    const data = await request.formData();
    const image = !data.get("file");

    if(image){
        return NextResponse.json("No se ha subido ninguna imagen", { status: 404});
    } 
    const bytes = image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return NextResponse.json("imagen subida");
}



