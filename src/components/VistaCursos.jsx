import { Link } from "react-router-dom"

const VistaCursos = (props) => {
    const {nombre,anio,imagen,id} = props
    return(
        <Link to={id}>
            <div className="card">
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{anio}</p>
                    <p href="#" className="btn btn-primary">Go somewhere</p>
                </div>
            </div>  
        </Link>
    )
}

export default VistaCursos


