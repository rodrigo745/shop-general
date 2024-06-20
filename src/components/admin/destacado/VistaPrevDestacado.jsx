import Image from "next/image";
export default function VistaPrevDestacado(props){

    const { descripcion, titulo, precio, fondoIzquierda, 
            listaDeColores, listaDeTalles } = props.datos;

    

    return(
        <div className="h-[85%] w-full bg-[#61493c] rounded-xl">
            <h3 className={`text-xl font-bold px-5 p-2 bg-white text-black rounded-t-xl`}>¡Producto destacado!</h3>
            <div className="flex flex-col md:flex md:flex-row w-full h-full bg-white rounded-b-xl">
                <div className={`flex flex-col justify-between overflow-auto md:pr-44 xl:pr-72 h-full rounded-b-xl md:w-[70%] px-5 ${!fondoIzquierda && "bg-cyan-700"}`} style={fondoIzquierda && {backgroundColor: fondoIzquierda}}>
                   <div>
                        <p className="mt-10 text-4xl font-bold">${precio ? precio : "00.00"}</p>
                        <p className="mt-3 text-2xl font-medium">{titulo ? titulo : "Titulo"}</p>
                        <p className="mt-3">{descripcion ? descripcion : "Descripción"}</p>
                        <div className="md:space-x-5 mt-5 mb-3 md:mb-0">
                            <button className="p-2 px-4 text-sm mb-3 md:mb-0  bg-neutral-800 rounded-lg">Agregar al carrito</button>
                            <button className="p-2 px-4 text-sm  bg-neutral-800 rounded-lg">Ver detalle</button>
                        </div>
                   </div>
                   
                   
                   {
                    props.imgPrincipal &&
                        <Image className="absolute right-0 mt-52 mr-[17%]" src={props.imgPrincipal} width={350} height={350} style={{width: "auto", height: "auto"}} alt="Imagen principal" />
                   }
                {
                        (listaDeTalles !== undefined && listaDeTalles.length > 0 ) &&
                        <div className="mb-10">
                            <p className="text-lg font-medium">Talles disponibles</p>
                            <div className="flex flex-wrap ml-1">
                                {
                                    listaDeTalles.map((e, index)=> (
                                        <p key={index} className="text-lg mr-6">{e}</p>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
                {
                    (listaDeColores !== undefined && listaDeColores.length > 0) &&
                    <div className={`bg-white text-center pt-2 text-black rounded-b-xl md:w-[30%]`}>
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
            </div>
        </div>
    )
}