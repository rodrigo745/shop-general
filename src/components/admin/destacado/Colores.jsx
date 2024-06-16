import { useState } from "react"


export default function Colores(props){

    const [ color, setColor ] = useState();
    const [ listaColores, setListaColores ] = useState([]);

    const agregar = ()=>{
        setListaColores((prevLista)=>{
            if(color !== undefined ){
                return [...prevLista, color];
            }
        });
    }

    const eliminar = (e)=>{
        const seleccion = e.target.id;
        console.log(seleccion);
    }

    const getColor = (e)=>{setColor(e.target.value)}


    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 bottom-0 right-0 left-0 mx-auto">
            <div className="w-[100vw] bg-black opacity-75 h-[100vh] absolute top-0 bottom-0 right-0 left-0 mx-auto "></div>
            <div className="w-[90vw] md:w-[40vw] h-[70vh] absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto 
                bg-white rounded-lg shadow-xl text-neutral-900 flex flex-col justify-between">
                <div>
                    <h4 className="text-center font-bold text-xl mt-4">Colores</h4>
                    {/* Contenido */}
                    <div className="px-5 mt-3 space-y-4">
                        <p>Selecciona y agrega los colores disponibles</p>
                        <input onChange={getColor} type="color" className="h-8 mr-3 p-1" />
                        <input type="text" value={color ? color : "#000000"} className="h-8 px-3 rounded-md bg-slate-300" />
                        <button onClick={agregar} className="bg-slate-700 p-1 ml-3 px-4 text-white rounded-md">Agregar</button>
                        <p>Lista de colores seleccionados</p>
                        <div className="flex space-x-5">
                            {
                                listaColores.map((e, index)=> (
                                    <div key={index} className="flex flex-col items-center justify-center border p-2 rounded-md hover:bg-slate-200 cursor-pointer relative">
                                        <div onClick={eliminar} id={index} className="opacity-0 hover:opacity-100 transition absolute bg-red-700 text-white w-full h-full text-center pt-6 rounded-md">Eliminar</div>
                                        <div className={`rounded-full mb-2 w-8 h-8 shadow-md`} style={{backgroundColor: e}}></div>
                                        <p>{e}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-end space-x-5 m-4">
                    <button id="color" onClick={props.mostrar} className="bg-slate-700 text-white w-32 p-2 rounded-md">Cancelar</button>
                    <button className="bg-green-800 text-white w-32 p-2 rounded-md">Guardar</button>
                </div>
            </div>
        </div>
    )
}