import { useState, useEffect } from "react";

export default function ProductoRelacionado({mostrar, datos}){
    
    const [ nuevosDatos, setNuevosDatos ] = useState([]);

    const mostrarDatos = async()=>{
        const productos = await datos();
        setNuevosDatos(productos) 
    }
    useEffect(()=> {
        mostrarDatos()
    }, [datos])
    
    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 bottom-0 right-0 left-0 mx-auto">
            <div className="w-[100vw] bg-black opacity-75 h-[100vh] absolute top-0 bottom-0 right-0 left-0 mx-auto "></div>
            <div className="w-[90vw] md:w-[40vw] h-[70vh] overflow-auto absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto 
                bg-white rounded-lg shadow-xl text-neutral-900 flex flex-col justify-between">
                <div>
                    <h4 className="text-center font-bold text-xl mt-4">Productos relacionados</h4>
                    <div className="mt-4 px-4">
                        <p>Seleccione los productos relacionados con el artículo actual</p>
                        <div className="mt-3 flex justify-between">
                            <div className="flex space-x-4">
                                <p className="pt-3 cursor-pointer">Productos: 20</p>
                                <p className="pt-3 cursor-pointer">Seleccionados: 0</p>
                            </div>
                            <input type="search" placeholder="Buscar..." className="p-2 px-4 rounded-md bg-slate-300" />
                        </div>
                        <div className="flex flex-wrap">
                                {
                                    nuevosDatos.map((e, index)=> (
                                        <div  key={index} className="border px-2 flex flex-col items-center w-20 h-28 rounded-md">
                                            <p>{e.titulo}</p>
                                            <p>${e.precio}</p>
                                        </div>
                                    ))
                                }
                        </div>

                    </div>
                </div>
                <div className="flex justify-end space-x-5 m-4">
                    <button id="producto" onClick={mostrar} className="bg-slate-700 text-white w-32 p-2 rounded-md">Cerrar</button>
                    <button  className="bg-green-800 text-white w-32 p-2 rounded-md">Guardar</button>
                </div>
            </div>
        </div>
    )
}