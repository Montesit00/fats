import React from "react";

import FooterNabvar from "./Header/FooterNabvar";
import HeaderNavbar from "./Header/HeaderNavbar";
import MainNavbar from "./Header/MainNavbar";


const Navbar = () => {
    return(
       <div className="nav navbar-expand-lg ">
            <HeaderNavbar/>
            <MainNavbar/>
            <FooterNabvar/>
       </div>
    )
}

export default Navbar