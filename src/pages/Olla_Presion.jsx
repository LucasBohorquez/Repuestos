import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Empaque from '../assets/olla_presion.jpg';


function Olla_Presion() {
      const [search, setSearch] = useState("");
    

    const productos = [
        {
          nombre: 'Empaque Olla de presion',
          imagen: Empaque,
          descripcion: 'Empaque de alta calidad para ollas de presión, asegurando un sellado perfecto.'
        }
      ];
      const productosFiltrados = search === ""
    ? productos
    : productos.filter((p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
    <div className='flex gap-4 justify-center p-4 text-3xl'>
        <Link to='/'>Volver</Link>
    </div>
    <div className='flex justify-center'>
      <input type="text" placeholder="Buscar producto..." value={search} onChange={(e) => setSearch(e.target.value)} className="border rounded p-2  w-[295px] mb-4"/>
    </div>
    <div className="flex flex-wrap gap-4 p-4 justify-center">


      {productosFiltrados.map((producto, index) => (
        <div
          key={index}
          onClick={() => enviarWhatsApp(producto.nombre)}
          className="p-2 mb-4 flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
        >
          <a href="#">
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={producto.imagen}
              alt={producto.nombre}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-sm font-bold">{producto.nombre}</h5>
            </a>
            <p className="text-gray-500 text-xs">{producto.descripcion}</p>
            <button
              onClick={() => enviarWhatsApp(producto.nombre)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Mas información
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Olla_Presion