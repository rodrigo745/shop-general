import { GET } from "@/app/api/destacados/[id]/route";

export default async function verDatos(){
    const datos = await GET();
    return datos;
}