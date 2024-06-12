export default function ProductoDestacado(){
    return(
        <div className="md:mt-5">
            <h3 className="font-bold md:text-xl">Agregar producto destacado</h3>
            <div className="flex flex-col md:flex md:flex-row justify-between md:space-x-16 mt-4">
                <div className="md:w-[40%] xl:w-[30%]">
                    <input type="text" placeholder="Nombre" className="fondoCli2 p-1.5 px-2 placeholder:text-white text-white w-full border-2 rounded-lg" />
                </div>
                <div className="md:w-[60%] xl:w-[70%] mt-10 md:mt-0">B</div>
            </div>
        </div>
    )
}