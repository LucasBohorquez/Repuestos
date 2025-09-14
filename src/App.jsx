import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productos from './Productos'
import Olla_Presion from './pages/Olla_Presion'
import Ventiladores from './pages/Ventiladores'
import Estufa from './pages/Estufa'
import Lavadora from './pages/Lavadora'
import wasa from './assets/whatsapp-svgrepo-com.svg'

function App() {
  const [count, setCount] = useState(0)

  const enviarWhatsApp = () => {
    const numeroWhatsApp = '573153412730'; // sin el "+" y sin espacios
    const mensaje = encodeURIComponent(`Hola, necesito ayuda para encontrar el siguiente repuesto:`);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, '_blank');
  };

  return (
    <>
    <div onClick={enviarWhatsApp} className='cursor-pointer gap-2 fixed bg-black p-2 rounded-full text-white top-2 right-2 z-50 flex items-center'>
    <p className='text-[10px]'>No encuentra lo que quiere?</p>
    <img className='w-[20px]' src={wasa} alt="" />
    </div>
    <Routes>
        <Route path='/' element={<Productos />} />
         <Route path="/Olla-Presion" element={<Olla_Presion />} />
         <Route path="/Ventiladores" element={<Ventiladores />} />
         <Route path="/Estufas" element={<Estufa />} />
         <Route path="/Lavadoras" element={<Lavadora />} />
      </Routes>

    </>
  )
}

export default App
