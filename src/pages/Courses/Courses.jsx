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
                <div className='form-center'>
                    <form className="" onSubmit={datos}>
                        
                        <div className="search__container">
        
                            <p className="search__title">
                                Encuentra lo que necesitas
                            </p>
                            <input className="search__input" type="text" placeholder="Busca tus cursos" onChange={cambiarState} />
            
                        </div>

                    </form>
                </div>

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