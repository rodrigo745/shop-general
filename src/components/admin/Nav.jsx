export default function Nav() {
    return(
        <nav className="fondoCli flex justify-between p-3 md:p-4 md:px-10 fixed w-full z-50">
            <div className="font-bold">
                <h3 className="textoCol2">Tienda <span className="text-neutral-900">Quinteros</span></h3>    
            </div>
            {/* PC */}
            <div className="hidden md:flex">
                <ul className="flex gap-x-10">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Mi carrito</li>
                </ul>
            </div>
            {/* Movil */}
            <div className="md:hidden">
                <button className="rotate-90 font-bold">|||</button>
            </div>            
        </nav>
    )
}