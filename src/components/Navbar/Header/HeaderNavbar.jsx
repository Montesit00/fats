import React from "react";

const HeaderNavbar = () => {
    return(
        <>
            <div className="log">
                <img src="" alt=""></img>
            </div>
            <div className="button-buscar">
               <input type="text" placeholder="Buscar" required/>
                    <div className="btn-buscar">
                        <i className="fas fa-search icon"></i>
                    </div>
            </div>
        </>
    )
}

export default HeaderNavbar;