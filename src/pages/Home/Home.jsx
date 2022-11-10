import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Home() {

  return (
    <>
        <Navbar/>
        <div class="article-container-cover">
            <div class="container-info-cover">
                <h1>¡Encuentra tu tema interes!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aliquam quis fuga beatae blanditiis assumenda.</p>
            </div>
        </div><br/>
        <Footer/>
    </>
  )
}

export default Home