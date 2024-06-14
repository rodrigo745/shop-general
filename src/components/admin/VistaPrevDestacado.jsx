export default function VistaPrevDestacado(props){

    const { descripcion, titulo, precio } = props.datos;

    return(
        <div className="xl:h-[640px] lg:h-[240px]  w-full bg-[#61493c] rounded-xl">
            <h3 className={`text-xl font-bold px-5 p-2 bg-white text-black rounded-t-xl`}>¡Producto destacado!</h3>
            <div className="flex flex-col md:flex md:flex-row w-full h-full bg-white rounded-b-xl">
                <div className={`flex flex-col justify-between bg-cyan-700 h-full rounded-b-xl md:w-[70%] px-5`}>
                   <div>
                        <p className="mt-10 text-4xl font-bold">${precio ? precio : "00.00"}</p>
                        <p className="mt-3 text-2xl font-medium">{titulo ? titulo : "Titulo"}</p>
                        <p className="mt-3">{descripcion ? descripcion : "Descripción"}</p>
                        <div className="md:space-x-5 mt-5 mb-3 md:mb-0">
                            <button className="p-2 px-4 text-sm mb-3 md:mb-0  bg-neutral-800 rounded-lg">Agregar al carrito</button>
                            <button className="p-2 px-4 text-sm  bg-neutral-800 rounded-lg">Ver detalle</button>
                        </div>
                   </div>
                   <div>
                        <p className="mb-10">Talles disponibles</p>
                   </div>
                </div>
                <div className={`bg-white text-center pt-2 text-black rounded-b-xl md:w-[30%]`}>
                    <p className="font-medium">Colores disponibles</p>
                </div>
            </div>
        </div>
    )
}