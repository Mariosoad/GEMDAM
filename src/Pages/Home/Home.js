import React from 'react'
import './home.css'

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* HERO */}
      <div className='container-hero flex-row'>
        <div className="child-container">
          <div>
            <h1 className="tittle-hero">CREAMOS MUNDOS Y EXPERIENCIAS ÚNICAS</h1>
          </div>
          <div>
            <h2 className="subtittle-hero">
              Creamos soluciones útiles, creativas e innovadoras que resuelvan
              todo tipo de problemas y se ajusten a tus requisitos
            </h2>
            <div>
              <button>ARROW</button>
            </div>
          </div>
        </div>
        <div className="child-container">
          <div>
            <img src="https://res.cloudinary.com/deushkfkk/image/upload/v1665329874/GEMDAM/dragonnnn_qips8r.png" />
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      {/* SEPARADOR */}
      <div className='container-separate'>
        <div>
          <h3 className='tittle-separate'>"Darle significado a las cosas más pequeñas construye siempre los mejores resultados."</h3>
        </div>
      </div>

      {/* AUGMENTED REALITY */}
      {/* AUGMENTED REALITY */}
      <div className='container-augmented flex-row-augmented'>
        <div className='container-augmented-izq'>
          <h3 className='tittle-augmented'>AUGMENTED REALITY</h3>
        </div>
        <div className='container-augmented-der'>
          <img width="100%" height="100%" src="https://res.cloudinary.com/deushkfkk/image/upload/v1665340857/GEMDAM/img1_dhsg0b.jpg" />
        </div>
      </div>

      <div className='container-augmented flex-row-augmented'>
        <div className='container-augmented-izq-2'>
          <img className='img-augmented' width="100%" height="100%" src="https://res.cloudinary.com/deushkfkk/image/upload/v1665340857/GEMDAM/img2_i3s1r2.jpg" />
        </div>
        <div className='container-augmented-der-2'>
          <div>
            <p>- Une el mundo físico con el mundo digital.</p>
            <p>- Amplía las posibilidades de los dispositivos.</p>
            <p>- Potencia y se conjuga con nuevas tecnologías.</p>
            <p>- Otorga flexibilidad y soluciones innovadoras.</p>
            <p>- Intensifica experiencias mixtas.</p>
          </div>
        </div>
      </div>

      <div className='container-virtual flex-row'>
        <div className='container-augmented-izq'>
          <h3 className='tittle-augmented'>VIRTUAL REALITY</h3>
        </div>
        <div className='child-container'>

        </div>
      </div>

      <div className='container-gallery'>
        <div className='child-container-gallery'>
          <div className='child-container-img'>
            <img className='tam-img-gallery' width="100%" src="https://res.cloudinary.com/deushkfkk/image/upload/v1665340857/GEMDAM/img3_ozjt8p.jpg" />
          </div>
          <div className='child-container-img'>
            <img className='tam-img-gallery' width="100%" src="https://res.cloudinary.com/deushkfkk/image/upload/v1665340857/GEMDAM/img3_ozjt8p.jpg" />
          </div>
          <div className='child-container-img'>
            <img className='tam-img-gallery' width="100%" src="https://res.cloudinary.com/deushkfkk/image/upload/v1665340857/GEMDAM/img3_ozjt8p.jpg" />
          </div>
        </div>
      </div>

    </>
  )
}
