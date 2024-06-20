"use client";
import { useState } from "react";

export default function AgregarImagen({estilo, setImagenUrl, setSizeImg}){
    
    const [ file, setFile ] = useState(null);
    const [ opciones, setOpciones ] = useState(false);
    const mostrar = ()=>{
        opciones ? setOpciones(false) : setOpciones(true);
    }

    return(
        <div className={`${estilo}`}>
            <div className="flex">
                <form className={`flex justify-between`}
                    onSubmit={async(e)=> {
                        e.preventDefault();

                        const formData = new FormData();
                        formData.append("file", file);
                        
                        const response = await fetch("/api/destacadosImg", { method: "POST", body: formData })
                        const data = await response.json();
                        setImagenUrl(data.url);
                    }}>
                    <input type="file" onChange={(e)=> {setFile(e.target.files[0])}} />
                    <button className="bg-neutral-100 text-black px-3 font-bold h-7 rounded-md">Subir</button>
                </form>
                <button onClick={mostrar} className="bg-neutral-100 text-black px-1 ml-2 font-bold h-7 rounded-md">Opciones</button>
            </div>
            {
                opciones &&
                <div className="mt-3">
                    <div className="flex">
                        <p className="pt-1">Tamaño: </p>
                        <input type="number"
                        onChange={(e)=> setSizeImg(e.target.value)} className="rounded-md p-1 px-3 bg-[#50382C] ml-3 w-[25%]"/>
                        <p className="pt-1 ml-1">px</p>
                    </div>
                </div>
            }
        </div>
    )
}