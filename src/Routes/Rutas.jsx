import React from 'react'
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";

import Mainbody from '../components/Mainbody';
import Registro from "../pages/Registro";
import InicioSesion from '../pages/Inicio-sesion';

const  Rutas = () => {
  return (

    <Router>

        <Routes>
            <Route index path='/' element={<Mainbody/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/IniciarSesion" element={<InicioSesion/>}/>
        </Routes>

    </Router>
  )
}

export default Rutas