import React from 'react'
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";

import Mainbody from '../components/MainBody/Mainbody';
import Registro from "../pages/Registro";
import InicioSesion from '../pages/Inicio-sesion';
import Home from '../pages/Home/Home'
import Courses from '../pages/Courses/Courses';
import { BuscarID } from '../components/BuscarID';

const  Rutas = () => {
  return (

    <Router>

        <Routes>
            <Route index path='/' element={<Mainbody/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/IniciarSesion" element={<InicioSesion/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Cursos' element={<Courses/>}/>
            <Route path="/:id" element={<BuscarID/>} />
        </Routes>

    </Router>
  )
}

export default Rutas