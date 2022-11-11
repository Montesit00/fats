import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'



function Home() {

  return (
    <>
      <Navbar/>
        <div className="article-container-cover">
            <div className="container-info-cover">
                <h1>¡Encuentra tu tema de interes!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aliquam quis fuga beatae blanditiis assumenda.</p>
            </div>
        </div><br/>

        <div className="container-post">

          <h2>Categorías principales</h2><hr/>

          <input type="radio" id="TODOS" name="categories" value="TODOS" defaultChecked/>
          <input type="radio" id="MUSICA" name="categories" value="MUSICA"/>
          <input type="radio" id="COCINA" name="categories" value="COCINA"/>
          <input type="radio" id="IDIOMAS" name="categories" value="IDIOMAS"/>
          <input type="radio" id="PROGRAMACION" name="categories" value="PROGRAMACION"/>
          <input type="radio" id="ARTE" name="categories" value="ARTE"/>
          <input type="radio" id="DISEÑO" name="categories" value="DISEÑO"/>

          <div className="container-category">
              <label htmlFor="TODOS">TODOS</label>
              <label htmlFor="MUSICA">MÚSICA</label>
              <label htmlFor="COCINA">COCINA</label>
              <label htmlFor="IDIOMAS">IDIOMAS</label>
              <label htmlFor="PROGRAMACION">PROGRAMACIÓN</label>
              <label htmlFor="ARTE">ARTE</label>
              <label htmlFor="DISEÑO">DISEÑO</label>
          </div>
        </div>

        <div className="posts">

            <div className="post" data-category="PROGRAMACION">

                <div className="ctn-img">
                    <img src="galeria/programacion2.jpg" alt=""/>
                </div>
                <h2>Como puedes crear una paginas webs | HTML - CSS - JS</h2>
                <span>30 Enero 2020 - 7:02 am</span>
                <ul className="ctn-tag">
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JS</li>
                </ul>
                <a href="#"><button>Leer más</button></a>

            </div>

            <div class="post" data-category="MUSICA">

                <div class="ctn-img"><img src="galeria/Guitarra.jpg" alt=""/></div>
                <h2>Aprende a tocar la Guitarra</h2>
                <span>26 febrero 2020 - 1:32 am</span>
                <ul class="ctn-tag">
                    <li>MUSICA</li>
                </ul>
                <a href="#"><button>Leer más</button></a>

            </div>

            <div class="post" data-category="DISEÑO">

                <div class="ctn-img"><img src="galeria/AdobePhotoshop.jpg" alt=""/></div>
                <h2>Aprende a diseñar desde Adobe Photoshop</h2>
                <span>26 Marzo 2020 - 1:32 am</span>
                <ul class="ctn-tag">
                    <li>DISEÑO</li>
                </ul>
                <a href="#"><button>Leer más</button></a>

            </div>
        </div>
      <Footer/>
    </>
  )
}

export default Home