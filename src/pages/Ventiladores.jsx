import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import aspas from '../assets/6aspas.jpg';
import aspas1 from '../assets/4aspas.jpg';
import tapa from '../assets/ventilador.jpg';


function Ventiladores() {
    const [search, setSearch] = useState("");
    

    const productos = [
        {
          nombre: '6 Aspas Ventilador',
          imagen: aspas,
          descripcion: 'Helices de ventilador de 6 aspas para una mejor circulación del aire.'
        },
        {
          nombre: '4 Aspas Ventilador',
          imagen: aspas1,
          descripcion: 'Helices de ventilador de 4 aspas para una mejor circulación del aire.'
        },
        {
          nombre: 'Tapa Ventilador',
          imagen: tapa,
          descripcion: 'Tapa para ventilador, protege y mejora la estética del mismo.'
        }
      ];
    
      const productosFiltrados = search === ""
        ? productos
        : productos.filter((p) =>
          p.nombre.toLowerCase().startsWith(search.toLowerCase())
        );

  return (
    <>
     <div className='flex gap-4 justify-center p-4'>
            <Link to='/'>Volver</Link>
        </div>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full max-w-xs mb-4"
        />
        <div className="flex flex-wrap gap-4 p-4">
    
    
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
                  Read more
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

export default Ventiladores