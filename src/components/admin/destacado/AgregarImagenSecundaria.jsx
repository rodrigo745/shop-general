"use client";
import { useState } from "react";
import Image from "next/image";

export default function AgregarImgagenSecundaria({estilo, setImagenSecundariaUrl, imagenSecundariaUrl}){

    const [ listaImg, setListaImg ] = useState([]);

    const agregarLista = async()=>{
        // envio a cloud
        console.log(imagenSecundariaUrl)
    }

    // tarea: se puede subir una imagen sola, y esta la opcion de subir varias a la vez, si se usan las dos opciones entonces hacer una funcion que agrupe los diferentes elementos en un solo array

    return(
        <div className={`${estilo} overflow-auto`}>
            <div className="flex justify-between mb-2">
                <p>Selecciona las imagenes secundarias:</p>
                <button form="form-control" className="bg-neutral-100 text-black px-1 ml-2 font-bold h-7 rounded-md text-sm">Opciones</button>
            </div>
            {
                /* Imagen secundaria */
            }
            <form id="form-control" onSubmit={async(e)=>{
                e.preventDefault();
                const formData = new FormData();
                formData.append("file", listaImg);
                const response = await fetch("/api/destacadosImg", { method: "POST", body: formData })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                
                setImagenSecundariaUrl((prevList)=> {
                    if(imagenSecundariaUrl !== undefined){
                        return [ ...prevList, data.url ];
                    } else {
                        return [ data.url ];
                    }
                })
                console.log(imagenSecundariaUrl)
            }}>
                <input type="file" onChange={(e)=> { 
                    setListaImg(e.target.files[0])
                }} />
            </form>
            <div className="mt-3">
                <div className="flex space-x-5">
                    {
                        imagenSecundariaUrl !== undefined &&
                        imagenSecundariaUrl.map((e, index)=> (
                            <div key={index} className="border relative rounded-md  w-20 h-20">
                                <div className="w-full h-full animate-pulse absolute bg-white"></div>
                                <Image src={e} className="bg-contain w-full h-full" width={100} height={100} alt="producto" />
                                <button className="w-full h-full absolute bg-red-400 opacity-0 hover:opacity-100">x</button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}