export default function Nav() {
    return(
        <nav className="fondoCli2 flex justify-between p-3 md:p-4 fixed w-full z-50">
            <div className="font-bold">
                <h3>Tiesdsdnda <span className="textoCol">Quinteros</span></h3>    
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
                <button className="rotate-90">|||</button>
            </div>            
        </nav>
    )
}