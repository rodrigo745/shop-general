import { useState } from "react";

export default function Talles({ mostrar, getListaDeTalles, lista}){

    const [ talle, setTalle ] = useState();
    const [ valorTalle, setValorTalle ] = useState();
    const [ listaTalles, setListaTalles ] = useState(lista);
    const [ notiGuardado, setNotiGuardado ] = useState(false);

    const agregar = ()=>{
        setListaTalles((prevLista)=>{
            if(talle !== undefined ){
                if(Array.isArray(prevLista)){
                    return [...prevLista, talle];
                } else {
                    return [talle];
                }
            } else{
                if(listaTalles == undefined){
                } else {
                    return [...prevLista];
                }
            }
        });
        setValorTalle("");
        setValorTalle();
        // Limpiar el campo de texto
    }

    const eliminar = (e)=>{
        const seleccion = e.target.id;
        const eliminado = listaTalles.filter((eliminar, index)=> index != seleccion)
        setListaTalles(eliminado);
    }

    const guardar = async()=>{
        getListaDeTalles(listaTalles);
        setNotiGuardado(true);
        await new Promise((resolve)=> setTimeout(resolve, 2000));
        setNotiGuardado(false);
    }

    const getTalle = (e)=>{setTalle(e.target.value)}

    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 bottom-0 right-0 left-0 mx-auto">
            <div className="w-[100vw] bg-black opacity-75 h-[100vh] absolute top-0 bottom-0 right-0 left-0 mx-auto "></div>
            <div className="w-[90vw] md:w-[40vw] h-[70vh] overflow-auto absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto 
                bg-white rounded-lg shadow-xl text-neutral-900 flex flex-col justify-between">
                <div>
                    <h4 className="text-center font-bold text-xl mt-4">Talles</h4>
                    {/* Contenido */}
                    <div className="px-5 mt-3 space-y-4">
                        <p>Escribe y agrega los talles disponibles</p>
                        <input onChange={getTalle} type="text" value={valorTalle} placeholder="(Ej: XL, M, 30, 40, 20cm, 1,5m)" className="h-8 px-3 rounded-md bg-slate-300" />
                        <button onClick={agregar} className="bg-slate-700 p-1 ml-3 px-4 text-white rounded-md">Agregar</button>
                        <p>Lista de talles seleccionados</p>
                        <div className="flex flex-wrap w-full">
                            {
                                listaTalles !== undefined &&
                                listaTalles.map((e, index)=> (
                                    <div key={index} className="flex flex-col mr-4 items-center justify-center border p-3 rounded-md hover:bg-slate-200 cursor-pointer relative mb-3">
                                        <div onClick={eliminar} id={index} className="opacity-0 hover:opacity-100 transition absolute bg-red-700 text-white w-full h-full text-center pt-3 font-bold rounded-md">x</div>
                                        <p className="font-bold text-lg">{e}</p>
                                    </div>
                                ))
                            }

                        </div>
                        {
                            notiGuardado &&
                            <div className=" bg-green-800 p-2 px-4 text-white absolute rounded-md top-0 right-0 mx-auto mr-4 w-32 h-10 text-center animate-pulse">Guardado</div>
                        }
                    </div>
                </div>
                <div className="flex justify-end space-x-5 m-4">
                    <button id="talle" onClick={mostrar} className="bg-slate-700 text-white w-32 p-2 rounded-md">Cerrar</button>
                    <button onClick={guardar} className="bg-green-800 text-white w-32 p-2 rounded-md">Guardar</button>
                </div>
            </div>
        </div>
    )
}