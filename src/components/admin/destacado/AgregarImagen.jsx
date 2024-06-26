"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function AgregarImagen({estilo, setImagenUrl, setOpcionesImg}){
    
    const [ file, setFile ] = useState(null);
    const [ opciones, setOpciones ] = useState(false);

    const [ size, setSize ] = useState();
    const [ giro, setGiro ] = useState();
    const [ x, setX ] = useState();
    const [ y, setY ] = useState();

    // guardar los dos de arriba en el setOpcionesImg
    useEffect(()=>{
        setOpcionesImg({
            size: size,
            giro: giro,
            x: x,
            y: y
        })
    },[size, giro, x, y]);

    const mostrar = ()=>{
        opciones ? setOpciones(false) : setOpciones(true);
    }

    return(
        <div className={`${estilo} overflow-auto`}>
            <div className="flex justify-between mb-2">
                <p>Selecciona la imagen principal:</p>
                <button onClick={mostrar} className="bg-neutral-100 text-black px-1 ml-2 font-bold h-7 rounded-md text-sm">Opciones</button>
            </div>
            <div className="flex">
                <form className={`flex w-full justify-between mt-1`}
                    onSubmit={async(e)=> {
                        e.preventDefault();

                        const formData = new FormData();
                        formData.append("file", file);
                        const response = await fetch("/api/destacadosImg", { method: "POST", body: formData })
                        console.log(response);
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        const data = await response.json();
                        setImagenUrl(data.url);
                    }}> 
                    <input type="file" onChange={(e)=> {setFile(e.target.files[0])}} />
                    <button className="bg-neutral-100 text-black px-3 font-bold h-7 rounded-md text-sm">Subir</button>
                </form>
                
            </div>
            {
                opciones &&
                <div className="mt-3 flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex">
                            <p className="pt-1">Tamaño: </p>
                            <input type="number" placeholder="300" min="200" max="1500"
                            onChange={(e)=> setSize(e.target.value)} className="rounded-md p-1 px-3 bg-[#50382C] ml-3 w-[80px]"/>
                            <p className="pt-1 ml-1">px</p>
                        </div>
                        <div className="flex md:ml-10">
                            <p className="pt-1">Girar: </p>
                            <input type="number" placeholder="0"
                            onChange={(e)=> setGiro(e.target.value)} className="rounded-md p-1 px-3 bg-[#50382C] ml-3 w-[65px]"/>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex">
                            <p className="pt-1">X: </p>
                            <input type="number" placeholder="0"
                            onChange={(e)=> setX(e.target.value)} className="rounded-md p-1 px-3 bg-[#50382C] ml-3 w-[65px]"/>
                        </div>
                        <div className="flex md:ml-10">
                            <p className="pt-1">Y: </p>
                            <input type="number" placeholder="0"
                            onChange={(e)=> setY(e.target.value)} className="rounded-md p-1 px-3 bg-[#50382C] ml-3 w-[65px]"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}