export default function VistaPrevDestacado(){
    return(
        <div className="w-full h-full bg-[#61493c] rounded-xl">
            <h3 className={`text-xl font-bold px-5 p-2 bg-white text-black rounded-t-xl`}>¡Producto destacado!</h3>
            <div className="flex flex-col md:flex md:flex-row w-full h-full bg-white rounded-b-xl">
                <div className={`flex flex-col justify-between bg-cyan-700 h-full rounded-b-xl md:w-[70%] px-5`}>
                   <div>
                        <p className="mt-10 text-4xl font-bold">$45.10</p>
                        <p className="mt-3 text-2xl font-medium">Nombre</p>
                        <p className="mt-3">Descripcion</p>
                        <div className="space-x-5 mt-5">
                            <button className="p-2 px-4 text-sm  bg-neutral-800 rounded-lg">Agregar al carrito</button>
                            <button className="p-2 px-4 text-sm  bg-neutral-800 rounded-lg">Ver detalle</button>
                        </div>
                   </div>
                   <div>
                        <p className="mb-10">Talles disponibles</p>
                   </div>
                </div>
                <div className={`bg-white h-full rounded-b-xl w-[30%]`}>
s
                </div>
            </div>
        </div>
    )
}