// Componentes
import Nav from "@/components/admin/Nav"

export default function LayoutControl({children}){
    return(
        <div className="fondoCli2 min-w-screen min-h-screen w-full h-full">
            <Nav/>
            <div className="pt-16 px-3 md:px-10">
                {children}
            </div>
        </div>
    )
}