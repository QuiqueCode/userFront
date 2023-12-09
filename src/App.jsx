import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer/FooterD'

function App() {
  return (
     <Router>
      <>
        <div className="wrapper">
          <Header />
          <Routes>
           
          </Routes>
          
        </div>
        <Footer/>
        <Routes>

          
        </Routes>
      </>
    </Router>
  )
}

export default App