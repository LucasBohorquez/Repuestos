import React from 'react';

function Productos() {

  const enviarWhatsApp = (producto) => {
    const numeroWhatsApp = '573153412730'; // sin el "+" y sin espacios
    const mensaje = encodeURIComponent(`Hola, más información sobre ${producto}`);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, '_blank');

  };

  const productos = [{
    nombre: 'Bujias',
    imagen: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1427031692695482162/original/dc0d94ba-e62f-4276-9744-520ace5025d7.jpeg?im_w=1200',
    precio: '$10',
    descripcion: 'Bujias de alta calidad para un mejor rendimiento del motor.'
  }, {
    nombre: 'Aceite',
    imagen: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1427031692695482162/original/dc0d94ba-e62f-4276-9744-520ace5025d7.jpeg?im_w=1200',
    precio: '$20',
    descripcion: 'Aceite sintético para una mayor protección del motor.'
  }, {
    nombre: 'Filtros',
    imagen: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1427031692695482162/original/dc0d94ba-e62f-4276-9744-520ace5025d7.jpeg?im_w=1200',
    precio: '$15',
    descripcion: 'Filtros de aire y aceite para mantener tu motor limpio.'
  }, {
    nombre: 'Correas',
    imagen: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1427031692695482162/original/dc0d94ba-e62f-4276-9744-520ace5025d7.jpeg?im_w=1200',
    precio: '$25',
    descripcion: 'Correas de distribución y accesorios para un funcionamiento óptimo.'
  }];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {productos.map((producto, index) => (
        <div key={index} onClick={() => enviarWhatsApp(producto.nombre)} className="p-2 mb-4 flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
    <a href="#">
        <img className="my-2 w-full h-40 object-cover" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1427031692695482162/original/dc0d94ba-e62f-4276-9744-520ace5025d7.jpeg?im_w=1200" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-sm font-bold">{producto.nombre}</h5>
        </a>
        <p className="text-gray-500 text-xs">{producto.descripcion}</p>
        <button onClick={() => enviarWhatsApp(producto.nombre)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</div>
      ))}
    </div>
  );
}

export default Productos;
