"use client";
import { useState } from "react";
import Image from "next/image";

export default function AgregarImgagenSecundaria({estilo, setImagenSecundariaUrl, imagenSecundariaUrl}){

    const [ listaImg, setListaImg ] = useState([]);

    const eliminar = (e)=>{
        const nuevaLista = imagenSecundariaUrl.filter((item)=> item !== e.target.id);
        setImagenSecundariaUrl(nuevaLista);
    }

    return(
        <div className={`${estilo} overflow-auto`}>
            <div className="flex justify-between mb-2">
                <p>Selecciona las imagenes secundarias:</p>
                <button form="form-control" className="bg-neutral-100 text-black px-3 ml-2 font-bold h-7 rounded-md text-sm">Subir</button>
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
                <div className="flex flex-wrap w-full ">
                    {
                        imagenSecundariaUrl !== undefined &&
                        imagenSecundariaUrl.map((e, index)=> (
                            <div key={index} className="border mb-3 mr-5 relative rounded-md  w-20 h-20">
                                <div className="w-full h-full animate-pulse absolute bg-white z-10"></div>
                                <Image src={e} className="bg-contain absolute w-full h-full z-20" width={100} height={100} alt="producto" />
                                <button id={e} onClick={eliminar} className="w-full h-full bg-red-400 opacity-0 hover:opacity-100 rounded-md absolute z-30">x</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}