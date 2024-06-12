// Componentes
import Nav from "@/components/admin/Nav"

export default function LayoutControl({children}){
    return(
        <div className="fondoCli2 w-screen h-screen">
            <Nav/>
            <div className="pt-16 px-3 md:px-10">
                {children}
            </div>
        </div>
    )
}