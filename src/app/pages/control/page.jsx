

export default function Control(){
    return(
        <div className="fondoCli2 md:mt-5">
            <div className="flex flex-col md:flex md:flex-row md:items-center justify-between">
                <h3 className="font-bold md:text-xl">Productos destacados</h3>
                <div className="flex flex-col md:flex md:flex-row md:space-x-5 h-10 ">
                    <button className="text-sm px-2 border-2 rounded-lg mt-3 md:mt-0  flex items-center justify-center hover:bg-[#DBD2CD] hover:text-black transition">Agregar producto <span className="text-3xl ml-2">+</span></button>
                    <input type="search" placeholder="Buscar..." className="fondoCli2 p-1.5 px-2 mt-4 md:mt-0 placeholder:text-white text-white border-2 rounded-lg" />
                </div>
            </div>
        </div>
    )
}