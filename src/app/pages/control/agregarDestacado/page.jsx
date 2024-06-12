export default function ProductoDestacado(){
    return(
        <div className="md:mt-5">
            <h3 className="font-bold md:text-xl">Agregar producto destacado</h3>
            <div className="flex flex-col md:flex md:flex-row justify-between md:space-x-16 mt-4">
                <div className="md:w-[40%] xl:w-[30%] space-y-3">
                    <input type="text" placeholder="Nombre" className={estiloInput} />
                    <textarea className={`${estiloInput} resize-none h-32`} placeholder="Descripción" />
                    <input type="text" placeholder="Precio" className={estiloInput} />
                    
                    <div className="flex space-x-4">
                        <button className={estiloInput}>Fondo Izquierda</button>
                        <button className={estiloInput}>Fondo Derecha</button>
                    </div>
                    <div className="flex space-x-4">
                        <button className={estiloInput}>Colores</button>
                        <button className={estiloInput}>Talles</button>
                    </div>
                    <input type="text" placeholder="Productos relacionados" className={estiloInput} />
                    <input type="text" placeholder="Cargar imagen principal" className={estiloInput} />
                    <input type="text" placeholder="Cargar imagenes secundaria" className={estiloInput} />
                    <button className={estiloInput}>Agregar</button>
                </div>
                <div className="md:w-[60%] xl:w-[70%] mt-10 md:mt-0">B</div>
            </div>
        </div>
    )
}

const estiloInput = "fondoCli2 p-1.5 px-2 placeholder:text-white text-white w-full border-2 rounded-lg";