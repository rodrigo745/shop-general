export default function Colores(props){
    return(
        <div className="w-[100vw] h-[100vh] fixed top-0 bottom-0 right-0 left-0 mx-auto">
            <div className="w-[100vw] bg-black opacity-75 h-[100vh] absolute top-0 bottom-0 right-0 left-0 mx-auto "></div>
            <div className="w-[90vw] md:w-[40vw] h-[70vh] absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto 
                bg-white rounded-lg shadow-xl text-neutral-900 flex flex-col justify-between">
                <div>
                    <h4 className="text-center font-bold text-xl mt-4">Colores</h4>

                </div>
                <div className="flex justify-end space-x-5 m-4">
                    <button id="color" onClick={props.mostrar} className="bg-slate-700 text-white w-32 p-2 rounded-md">Cancelar</button>
                    <button className="bg-green-800 text-white w-32 p-2 rounded-md">Guardar</button>
                </div>
            </div>
        </div>
    )
}