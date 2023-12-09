import { useState } from 'react'
import './App.css'
import { ListaTienda } from './components/ListaDeTiendas/ListaTienda'
import PoliticasUsuarios from './components/PoliticasUsuarios/PoliticasUsuarios'
import { Footer } from './components/Footer/FooterD'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PoliticasUsuarios></PoliticasUsuarios>
    <Footer></Footer>
    </>
  )
}

export default App
