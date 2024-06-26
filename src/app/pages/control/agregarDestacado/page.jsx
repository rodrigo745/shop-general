"use client";
import { useState, useEffect, useRef } from "react";

// Componentes 
import VistaPrevDestacado from "@/components/admin/destacado/VistaPrevDestacado";
import Colores from "@/components/admin/destacado/Colores";
import Talles from "@/components/admin/destacado/Talles";
import AgregarImagen from "@/components/admin/destacado/AgregarImagen";
import AgregarImgagenSecundaria from "@/components/admin/destacado/AgregarImagenSecundaria";
import ProductoRelacionado from "@/components/admin/destacado/ProductoRelacionado";

export default function ProductoDestacado(){
    const inputColorRef = useRef(null);
    const [ titulo, setTitulo ] = useState();
    const [ descripcion, setDescripcion ] = useState();
    const [ precio, setPrecio ] = useState();
    const [ fondoIzquierda, setFondoIzquierda] = useState();
    const [ listaDeColores, setListaDeColores ] = useState([]);
    const [ listaDeTalles, setListaDeTalles ] = useState([]);
    const [ imagenUrl, setImagenUrl ] = useState();
    const [ opcionesImg, setOpcionesImg ] = useState({
        size: 350,
        giro: 0,
    });
    const [ imagenSecundariaUrl, setImagenSecundariaUrl ] = useState();


    // envio a la base de datos
    const [ listaDatos, setListaDatos ] = useState([]);
    
    const getTitulo = (e)=>{setTitulo(e.target.value)}
    const getDescripcion = (e)=>{setDescripcion(e.target.value)}
    const getPrecio = (e)=>{setPrecio(e.target.value)}
    const getFondoIzquierda = (e)=>{setFondoIzquierda(e.target.value);}
    

    function getListaDeColores(lista){ 
        setListaDeColores(lista);
    }
    function getListaDeTalles(lista){
        setListaDeTalles(lista);
    }

    useEffect(()=>{
        setListaDatos({
            titulo: titulo, 
            descripcion: descripcion, 
            precio: precio,
            fondoIzquierda: fondoIzquierda,
            listaDeColores: listaDeColores,
            listaDeTalles: listaDeTalles,
            imagenUrl: imagenUrl,
            imagenSecundariaUrl: imagenSecundariaUrl
        })

    }, [titulo, descripcion, precio, fondoIzquierda, 
        listaDeColores, listaDeTalles, imagenUrl, imagenSecundariaUrl])

    const handleClick = (event) => {
        // Simular el click en el input de color
        inputColorRef.current.click();
    };

    const agregarDatos = async()=>{
        const subida = await fetch("/api/destacados/sd", {
            method: "POST",
            body: JSON.stringify(listaDatos),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    // modals
    const [ mostrarColor, setMostrarColor ] = useState(false);
    const [ mostrarTalle, setMostrarTalle ] = useState(false);
    const [ mostrarProducto, setMostrarProducto ] = useState(false);

    const mostrar = (e)=>{ 
        switch(e.target.id){
            case "color": mostrarColor ? setMostrarColor(false) : setMostrarColor(true);
            break;
            case "talle": mostrarTalle ? setMostrarTalle(false) : setMostrarTalle(true);
            break;
            case "producto": mostrarProducto ? setMostrarProducto(false) : setMostrarProducto(true);
            break;
        }
    }
    

    // obtengo los datos de productos relacionados
    const obtenerDatosProductos = async()=>{
        const datos = await fetch("/api/destacados/as")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parseamos la respuesta como JSON
        })
        .then(data => {
          return data; // Mostramos los datos en la consola
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
        return datos;
    }

    return(
        <div className="md:mt-5  min-w-screen w-full ">
            <h3 className={`font-bold md:text-xl ${mostrarColor && "blur-sm"}`}>Agregar producto destacado</h3>
            <div className={`flex flex-col md:flex md:flex-row mt-4 ${mostrarColor && "blur-sm"}`}>
                <div className="md:w-[20vw] xl:w-[22vw] space-y-5 mr-10">
                    <input type="text" placeholder="Titulo" onChange={getTitulo} className={estiloInput} />
                    <textarea onChange={getDescripcion} className={`${estiloInput} resize-none h-32`} placeholder="Descripción" />
                    <input type="text" placeholder="Precio" onChange={getPrecio} className={estiloInput} />
                    
                    <div className="flex space-x-4">
                        
                        <button onClick={handleClick} className={estiloInput}>Fondo Izquierda<input type="color" onChange={getFondoIzquierda} value={fondoIzquierda ? fondoIzquierda : `#0891b2`} className="w-5 h-5 rounded-full border bg-transparent p-0 ml-2" ref={inputColorRef} /></button>
                        <button className={estiloInput}>Fondo Derecha</button>
                    </div>
                    <div className="flex space-x-4">
                        <button onClick={mostrar} id="color" className={estiloInput}>Colores</button>
                        <button onClick={mostrar} id="talle" className={estiloInput}>Talles</button>
                    </div>
                    <div className={estiloInput}>
                        <button onClick={mostrar} id="producto">Productos relacionados</button>
                    </div>
                    <AgregarImagen estilo={estiloInput} setImagenUrl={setImagenUrl} setOpcionesImg={setOpcionesImg}/>
                    <AgregarImgagenSecundaria estilo={estiloInput} imagenSecundariaUrl={imagenSecundariaUrl} setImagenSecundariaUrl={setImagenSecundariaUrl}/>
                    <button onClick={agregarDatos} className="fondoCli p-2 text-white font-bold w-full border-2 rounded-lg">Agregar</button>
                </div>
                <div className="mt-10 md:mt-0">
                    <VistaPrevDestacado datos={listaDatos} opcionesImg={opcionesImg}/>
                </div>
            </div>
            {/* Modals */}
            {mostrarColor && <Colores mostrar={mostrar} getListaDeColores={getListaDeColores} lista={listaDeColores}/>}
            {mostrarTalle && <Talles mostrar={mostrar} getListaDeTalles={getListaDeTalles} lista={listaDeTalles} />}
            {mostrarProducto && <ProductoRelacionado mostrar={mostrar} datos={obtenerDatosProductos}/>}
        </div>
    )
}

const estiloInput = "fondoCli2Input p-2 px-3 placeholder:text-white text-white w-full border-2 rounded-lg";