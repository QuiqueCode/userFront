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
import About from './components/Blog/About';
import Categorias from './components/Categorias/Categorias';
import { Products } from './components/Body/Products/Products';
import { Index } from './components/Body/Index/Index';
import Tecnologia from './components/Categorias/Tecnologia';
import Ropa from './components/Categorias/Ropa';
import Casa from './components/Categorias/Casa';
import { Preguntas } from './components/chino/preguntasFrecuentes';

function App() {
  return (
     <Router>
      <>
        <div className="wrapper">
          <Header />
          <Routes>
           
          <Route path='/' element={<Index></Index>}/>
          <Route path='/products' element={<Products></Products>}/>

          <Route path='/listaTiendas' element={<ListaTienda></ListaTienda>}/>
          <Route path='/politicas' element={<PoliticasUsuarios></PoliticasUsuarios>}/>
          <Route path='/serVendedor' element={<SerVendedor></SerVendedor>}/>
          <Route path='/carrito' element={<CarritoCompras></CarritoCompras>}/>
          <Route path='/pago' element={<Checkout></Checkout>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/categorias' element={<Categorias/>} />
          <Route path='/tecnologia' element={<Tecnologia/>} />
          <Route path='/ropa' element={<Ropa/>} />
          <Route path='/casa' element={<Casa/>} />
          <Route path='/preguntas' element={<Preguntas></Preguntas>} />
          </Routes>
          
        </div>
        <Footer/>
        
      </>
    </Router>
  )
}

export default App