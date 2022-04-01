import React from 'react'

//styles
import '../style/Home.css'
//images
const Home = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <>
            <nav className='nav'>
                <div className='nav_container-menu' onClick={toTheTop}>
                    <h1>
                        Cristian Correa
                    </h1>
                </div>
            </nav>
            <section className='section'>
                <div className="home__content">
                    <div className="home__meta">
                        <h2 className="home__text pz__10">BIENVENIDOS A MI MUNDO, <br /> Hola, soy Cristian Correa<br />Desarrollador junior.</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home