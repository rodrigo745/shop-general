import Image from "next/image";
export default function VistaPrevDestacado(props){

    const { descripcion, titulo, precio, fondoIzquierda, 
            listaDeColores, listaDeTalles, imagenUrl,
            imagenSecundariaUrl } = props.datos;
    const { size, giro, x, y } = props.opcionesImg;
    

    return(
        <div className="h-[75vh] w-[70vw] bg-[#61493c] rounded-xl ">
            <h3 className={`text-[1vw] font-bold px-5 p-2 bg-white text-black rounded-t-xl`}>¡Producto destacado!</h3>
            <div className="flex flex-col md:flex md:flex-row w-full h-full bg-white rounded-b-xl overflow-hidden relative ">
                <div className={`flex flex-col justify-between md:pr-44 xl:pr-72 h-full rounded-b-xl md:w-[70%] px-5 ${!fondoIzquierda && "bg-cyan-700"}`} style={fondoIzquierda && {backgroundColor: fondoIzquierda}}>
                   <div>
                        <p className="mt-10 text-[2vw] font-bold">${precio ? precio : "00.00"}</p>
                        <p className="mt-3 text-[1.5vw] font-medium">{titulo ? titulo : "Titulo"}</p>
                        <p className="mt-3 text-[0.85vw]">{descripcion ? descripcion : "Descripción"}</p>
                        <div className="md:space-x-5 mt-5 mb-3 md:mb-0">
                            <button className="p-2 px-4 text-[0.7vw] mb-3 md:mb-0  bg-neutral-800 rounded-lg">Agregar al carrito</button>
                            <button className="p-2 px-4 text-[0.7vw]  bg-neutral-800 rounded-lg">Ver detalle</button>
                        </div>
                   </div>
                    {
                    imagenUrl &&
                        <Image className={`absolute mt-[10vh]`} src={imagenUrl} width={size ? size : 600} height={size ? size : 600} alt="Imagen principal" 
                        style={{ transform: `rotate(${giro}deg)`, right: `${x ? x : 20}%`, top: `${y}%`, width: `${ size ? (size/10) : (25) }vw`}}/>
                    }
                {
                    (listaDeTalles !== undefined && listaDeTalles.length > 0 ) &&
                        <div className="mb-10">
                            <p className="text-[0.9vw] font-medium">Talles disponibles</p>
                            <div className="flex flex-wrap ml-1">
                                {
                                    listaDeTalles.map((e, index)=> (
                                        <p key={index} className="text-[0.9vw] mr-6">{e}</p>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="flex justify-center w-[30%]">

                {
                    (listaDeColores !== undefined && listaDeColores.length > 0) &&
                    <div className={`bg-white text-center pt-2 text-black rounded-b-xl md:w-[100%]`}>
                        <p className="font-bold text-center">Colores disponibles</p>
                        <div className="flex justify-center flex-wrap pl-3">
                            {
                                listaDeColores.map((e,index)=> (
                                    <div key={index} className="w-8 h-8 mr-4 mt-3 shadow-md rounded-full" style={{backgroundColor: e}}></div>
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    imagenSecundariaUrl &&
                    <div className={`flex flex-col space-y-5 absolute h-full mr-10 right-0 mt-24  overflow-auto max-h-[45vh]
                        ${imagenSecundariaUrl.length < 4 && "place-content-center"}`}>
                        {
                            imagenSecundariaUrl.map((e, index)=> (
                                <div key={index} className="rounded-md shadow-md">
                                    <Image src={e} width={100} height={100} alt="producto"/>
                                </div>
                            ))
                        }
                    </div>
                }
                </div>
            </div>
        </div>
    )
}