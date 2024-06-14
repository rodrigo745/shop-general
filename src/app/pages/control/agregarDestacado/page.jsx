"use client";
import { useState, useEffect, useRef } from "react";
import VistaPrevDestacado from "@/components/admin/VistaPrevDestacado";

export default function ProductoDestacado(){
    const inputColorRef = useRef(null);
    const [ titulo, setTitulo ] = useState();
    const [ descripcion, setDescripcion ] = useState();
    const [ precio, setPrecio ] = useState();
    const [ fondoIzquierda, setFondoIzquierda] = useState();
    const [ listaDatos, setListaDatos ] = useState([]);

    const getTitulo = (e)=>{setTitulo(e.target.value)}
    const getDescripcion = (e)=>{setDescripcion(e.target.value)}
    const getPrecio = (e)=>{setPrecio(e.target.value)}
    const getFondoIzquierda = (e)=>{setFondoIzquierda(e.target.value);}
    
    useEffect(()=>{
        setListaDatos({
            titulo: titulo, 
            descripcion: descripcion, 
            precio: precio,
            fondoIzquierda: fondoIzquierda
        })
    }, [titulo, descripcion, precio, fondoIzquierda])


    const handleClick = (event) => {
        // Simular el clic en el input de color
        inputColorRef.current.click();
      };

    return(
        <div className="md:mt-5  min-w-screen w-full ">
            <h3 className="font-bold md:text-xl">Agregar producto destacado</h3>
            <div className="flex flex-col md:flex md:flex-row justify-between md:space-x-16 mt-4">
                <div className="md:w-[40%] xl:w-[30%] space-y-5">
                    <input type="text" placeholder="Titulo" onChange={getTitulo} className={estiloInput} />
                    <textarea onChange={getDescripcion} className={`${estiloInput} resize-none h-32`} placeholder="Descripción" />
                    <input type="text" placeholder="Precio" onChange={getPrecio} className={estiloInput} />
                    
                    <div className="flex space-x-4">
                        
                        <button onClick={handleClick} className={estiloInput}>Fondo Izquierda<input type="color" onChange={getFondoIzquierda} value={fondoIzquierda ? fondoIzquierda : `#0891b2`} className="w-5 h-5 rounded-full border bg-transparent p-0 ml-2" ref={inputColorRef} /></button>
                        <button className={estiloInput}>Fondo Derecha</button>
                    </div>
                    <div className="flex space-x-4">
                        <button className={estiloInput}>Colores</button>
                        <button className={estiloInput}>Talles</button>
                    </div>
                    <input type="text" placeholder="Productos relacionados" className={estiloInput} />
                    <input type="text" placeholder="Cargar imagen principal" className={estiloInput} />
                    <input type="text" placeholder="Cargar imagenes secundarias" className={estiloInput} />
                    <button className="fondoCli p-2 text-white font-bold w-full border-2 rounded-lg">Agregar</button>
                </div>
                <div className="md:w-[60%] xl:w-[70%] h-full md:h-[740px] mt-10 md:mt-0">
                    <VistaPrevDestacado datos={listaDatos}/>
                </div>
            </div>
        </div>
    )
}

const estiloInput = "fondoCli2Input p-2 px-3 placeholder:text-white text-white w-full border-2 rounded-lg";