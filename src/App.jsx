import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer/FooterD'
import { ListaTienda } from './components/ListaDeTiendas/ListaTienda';
import PoliticasUsuarios from './components/PoliticasUsuarios/PoliticasUsuarios';
import SerVendedor from './components/Become-vendor/become-vendor';
import CarritoCompras from './components/CarritoCompras/CarritoCompras';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
     <Router>
      <>
        <div className="wrapper">
          <Header />
          <Routes>
           

          <Route path='/listaTiendas' element={<ListaTienda></ListaTienda>}/>
          <Route path='/politicas' element={<PoliticasUsuarios></PoliticasUsuarios>}/>
          <Route path='/serVendedor' element={<SerVendedor></SerVendedor>}/>
          <Route path='/carrito' element={<CarritoCompras></CarritoCompras>}/>
          <Route path='/pago' element={<Checkout></Checkout>}/>
          </Routes>
          
        </div>
        <Footer/>
      </>
    </Router>
  )
}

export default App