import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

export const BuscarID = () => {
    const { id } = useParams();
    
    const [datPels, setdetPels] = useState({})
    const datos= () =>{
        fetch(`http://www.omdbapi.com/?apikey=67a6157f&i=${id}`)
        .then(response => response.json())
        .then(data => {
            
            setdetPels(data)
            })
    }
        useEffect(() => {
            datos()
    }, )
        const {Actors,Country,Title,Poster,Director,Plot,Runtime}= datPels
            return (
                <div>
                    <div>
                        <div className="hero">
                        <div className="hero-body">
                        <p className="title">
                        {Title}({Runtime})
                        </p>
                        <p className="subtitle">
                            Director: {Director}
                        </p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <img src={Poster}/>
                    </div>
                    <p className="title is-1 is-spaced">Pais: {Country}</p>
                    <p className="title is-1 is-spaced">{Actors}</p>
                    
                    <div className="content is-normal">
                        {Plot}
                    </div>
                </div>
    )
}
