import React from "react";
import Navbar from "./Navbar";


const Mainbody = () => {
    return(
        <>
            <Navbar/>
        <main>
            <div className="cover">
                <div className="textoInformacion">
                        <h1>CursosYa, Formosa y el Politecnico</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus tempora aspernatur nostrum temporibus porro ullam quod eveniet qui iure delectus facere mollitia neque ex est, quia dolorum illum nemo.</p>
                    <div className="btnCover">
                        <input type="button" value="Leer más" className="btnReadMoreCover"></input>
                    </div>
                </div>
                <div className="mediaCover">
                    <video src="galeria/animacion_cover.webm" autoPlay loop muted preload="auto"></video>
                </div>
            </div>

            <div className="containerBanner">
                <div className="banner">
                    <div className="bannerIconHeart">
                        <img src="galeria/heart_notify.png"  id="iconHeart" alt=""></img>
                    </div>
                    <div className="bannerIconFire">
                        <img src="galeria/fire-dynamic-color.png" id="iconFire" alt=""></img>
                    </div>
                    <div className="bannerText">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <a href="">Leer Más</a>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Mainbody