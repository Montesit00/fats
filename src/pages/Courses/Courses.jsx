import {useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import VistaCursos from '../../components/VistaCursos'

function Courses() {
    
    const [pelis, setPelis] = useState([])

    const [busqueda, setBusqueda] = useState("")

        const datos = e =>{
            e.preventDefault()
            fetch(`http://www.omdbapi.com/?apikey=67a6157f&s=${busqueda}`)
            .then(response => response.json())
            .then(data => {
                
                const {Search} = data
                setPelis(Search)
                
                })
            
        }

        const cambiarState = e =>{
            setBusqueda(e.target.value)
        
        }

  return (
    <>
        <Navbar/>
            <div className="">
            
                <form className="form-input" onSubmit={datos}>
                    <input type="text" placeholder="Busca tus cursos" onChange={cambiarState} />
                    <button type="submit" className='btn btn-sm btn-dark'>Buscar</button>
                </form>

                <div className="resultados">
                        {pelis.length === 0 ? 
                    <p className="NoRes"></p>
                    : pelis.map( peli =>{
                        return( 
                        <VistaCursos key={peli.imdbID} id={peli.imdbID} nombre={peli.Title} anio={peli.Year} imagen={peli.Poster} />
                    )})}
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Courses