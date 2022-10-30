import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route} from 'react-router-dom'
/* import './App.css' */

import Container from './components/Container'
import Navbar from './components/Navbar'
import Mainbody from './components/Mainbody'

//Pages
import Registro from './pages/registro/Registro'
import Rutas from './router/rutas'

function App() {

  return (
    <>
    <Container>


        <Rutas/>
        
      <Mainbody/>
    </Container>
    </>
  )
}

export default App
