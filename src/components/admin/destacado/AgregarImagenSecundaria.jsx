"use client";
import { useState } from "react";

export default function AgregarImgagenSecundaria({estilo, setImagenSecundariaUrl}){

    const [ listaImg, setListaImg ] = useState([]);

    const agregarLista = ()=>{
        console.log(listaImg);
    }

    // tarea: se puede subir una imagen sola, y esta la opcion de subir varias a la vez, si se usan las dos opciones entonces hacer una funcion que agrupe los diferentes elementos en un solo array

    return(
        <div className={`${estilo} overflow-auto`}>
            <div className="flex justify-between mb-2">
                <p>Selecciona las imagenes secundarias:</p>
                <button onClick={agregarLista} className="bg-neutral-100 text-black px-1 ml-2 font-bold h-7 rounded-md text-sm">Opciones</button>
            </div>
            {
                /* Imagen secundaria */
            }
            <div>
                <input type="file" multiple onChange={(e)=> { 
                    setListaImg((prevList)=>{
                        return [...prevList, e.target.files[0]]})
                    }} />
            </div>
        </div>
    )
}