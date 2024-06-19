"use client";

export default function AgregarImagen({estilo}){
    return(
        <form className={`${estilo} flex justify-between`}
            onSubmit={async(e)=> {
                e.preventDefault();
                const response = await fetch("api/destacadosImg", { method: "POST" })
                const data = await response.json();
                console.log(data)
            }}>
            <input type="file" onChange={(e)=> {console.log(e.target.files[0])}} />
            <button className="bg-neutral-100 text-black px-4 font-bold h-7 rounded-md">Subir</button>
        </form>
    )
}