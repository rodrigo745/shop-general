"use client";
import { useState } from "react";

export default function AgregarImagen({estilo, setImagenUrl}){
    
    const [ file, setFile ] = useState(null);

    return(
        <form className={`${estilo} flex justify-between`}
            onSubmit={async(e)=> {
                e.preventDefault();

                const formData = new FormData();
                formData.append("file", file);
                
                const response = await fetch("/api/destacadosImg", { method: "POST", body: formData })
                const data = await response.json();
                setImagenUrl(data.url);
            }}>
            <input type="file" onChange={(e)=> {setFile(e.target.files[0])}} />
            <button className="bg-neutral-100 text-black px-4 font-bold h-7 rounded-md">Subir</button>
        </form>
    )
}