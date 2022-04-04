import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import '../style/Portfolio.css'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
];

const Portfolio = () => {

  return (
    <Carousel className='mt-5' itemsToShow={1} breakPoints={breakPoints}>
      <Item className='item'>
      <div className='container_card mt-5'>
            <div className='container_img'>
              <figure>
              <img src='https://i.ibb.co/t4p6Kj3/rick-And-Morty.png' alt='Rick and Morty' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/Rick-and-morty" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/Rick-and-morty/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/jW14SsN/Google-Clone.png' alt='Google Clone' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/clongGoogle.github.io" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://startling-palmier-e41cee.netlify.app/" target="blank" className="project__btn">Pagina</a>
                          </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/j4HfHh5/color-app.png' alt='color app' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/APP-COLOR" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/APP-COLOR/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/b35psRW/todoapp.png' alt='todo app' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/to-do-app" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/to-do-app/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/1XDBDYm/Formulario.png' alt='Formulario' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/Formulario" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/Formulario/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/FWx2X9K/calculadora.png' alt='calculadora' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="/" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/calculadora-de-figuras-geometricas/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/Rj69nSy/registro.png' alt='registro' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/register-user-CSS-HTML" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/register-user-CSS-HTML/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/gzxPLzW/bici.png' alt='bici' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/pagina-de-bicicleta" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/pagina-de-bicicleta/" target="blank" className="project__btn">Pagina</a>
            </div>
          </div>
      </Item>
      <Item>
      <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src='https://i.ibb.co/Wygj6Nk/maus.png' alt='mouse' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/pagina-estatica" target="blank" className="project__btn">Git-Hub</a>
            </div>
          </div>
      </Item>
    </Carousel>
  )

}

export default Portfolio