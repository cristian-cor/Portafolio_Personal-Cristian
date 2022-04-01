import React from 'react'
//images
import rick from '../images/rickAndMorty.jpg'
import clonGoogle from '../images/clonGoogle.jpg'
import colorPicekt from '../images/colorPicekt.jpg'
import proximamente from '../images/proximamente.jpg'
import todoApp from '../images/todoApp.jpg'

//styles
import '../style/Portfolio.css'
const Portfolio = () => {
  return (
    <section className='section_portfolio'>
      <div className='section_portfolio-title'>
        <h2 className='text-center service-title mt-5'>
          My Latest Project
        </h2>
        <p className='text-center service-subtitle m-3'>
          There are many variations of passages of Lorem Ipsum available,<br />
          but the majority have suffered alteration.
        </p>
      </div>
      <section className='portfolio_container-card1'>
      {/* Rick-and-morty */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={rick} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/Rick-and-morty" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/Rick-and-morty/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
          {/* clongGoogle */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={clonGoogle} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/clongGoogle.github.io" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://startling-palmier-e41cee.netlify.app/" target="blank" className="project__btn">Git-Hub Pages</a>
                          </div>
          </div>
          {/* APP-COLOR */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={colorPicekt} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/APP-COLOR" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/APP-COLOR/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
          {/* to-do-app */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={todoApp} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/to-do-app" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/to-do-app/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
          {/* Formulario */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={proximamente} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/Formulario" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/Formulario/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
          {/* calculadora-de-figuras-geometricas */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={proximamente} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="/" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/calculadora-de-figuras-geometricas/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
      </section>
      <section className='portfolio_container-card1'>
      {/* register-user */}
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={proximamente} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor/register-user-CSS-HTML" target="blank" className="project__btn">Git-Hub</a>
              <a href="https://cristian-cor.github.io/register-user-CSS-HTML/" target="blank" className="project__btn">Git-Hub Pages</a>
            </div>
          </div>
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={proximamente} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor" target="blank" className="project__btn">Git-Hub</a>
            </div>
          </div>
          <div className='container_card'>
            <div className='container_img'>
              <figure>
                <img src={proximamente} alt='projects' />
              </figure>
            </div>
            <div className='container_info'>
              <a href="https://github.com/cristian-cor" target="blank" className="project__btn">Git-Hub</a>
            </div>
          </div>
      </section>
    </section>

  )
}

export default Portfolio