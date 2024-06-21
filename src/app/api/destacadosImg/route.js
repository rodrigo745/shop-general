import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

// Configuracion
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_USER, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});

export async function POST(request){
    const data = await request.formData();
    const image = data.get("file");

    if(!image){
        return NextResponse.json("No se ha subido ninguna imagen", { status: 400});
    } 
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const response = await new Promise((resolve, reject)=> {
        cloudinary.uploader.upload_stream({}, (err, result)=> {
            if(err){
                reject(err);
            }
            resolve(result);
        }).end(buffer);
    });

    return NextResponse.json({
        message: "imagen subida",
        url: response.secure_url,
    });
}



