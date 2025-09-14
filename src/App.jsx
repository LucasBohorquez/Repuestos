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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
