import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Empaque from '../src/assets/olla_presion.jpg';
import aspas from '../src/assets/6aspas.jpg';
import estufa from '../src/assets/estufa.jpg';
import lavadora from '../src/assets/lavadora.jpg';


function Productos() {
  const [search, setSearch] = useState("");

  const enviarWhatsApp = (producto) => {
    const numeroWhatsApp = '573153412730'; // sin el "+" y sin espacios
    const mensaje = encodeURIComponent(`Hola, más información sobre ${producto}`);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, '_blank');
  };

  const productos = [
    {
      nombre: 'Olla de presion',
      imagen: Empaque,
      descripcion: 'Bujias de alta calidad para un mejor rendimiento del motor.'
    },
    {
      nombre: 'Ventiladores',
      imagen: aspas,
      descripcion: 'Helices de ventilador para una mejor circulación del aire.'
    },
    {
      nombre: 'Estufas',
      imagen: estufa,
      descripcion: 'Repuestos para estufas de alta calidad.'
    },
    {
      nombre: 'Lavadoras',
      imagen: lavadora,
      descripcion: 'Repuestos para lavadoras de alta calidad.'
    }
  ];

  const productosFiltrados = search === ""
    ? productos
    : productos.filter((p) =>
      p.nombre.toLowerCase().startsWith(search.toLowerCase())
    );

  return (
  <>
  <div className='flex flex-wrap gap-4 justify-center py-4'>
  <Link to='/Olla-Presion'>Olla de presion</Link>
  <Link to='/Ventiladores'>Ventiladores</Link>
  <Link to='/Estufas'>Estufa</Link>
  <Link to='/Lavadoras'>Lavadora</Link>
  </div>
    <input type="text" placeholder="Buscar producto..." value={search} onChange={(e) => setSearch(e.target.value)} className="border rounded p-2  w-[295px] mb-4"/>
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
  );
}

export default Productos;
