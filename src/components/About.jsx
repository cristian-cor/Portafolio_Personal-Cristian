import React from 'react'
//stiles
import '../style/About.css'
const About = () => {
    return (
        <>
            <div className='section_about'>
                <section className=''>
                    <figure className='section_container-img'>
                        <img src='https://i.ibb.co/MsWZNXk/user.jpg' alt='card' />
                    </figure>
                </section>
                <div className='section_about-info'>

                    <div className='section_about-aboutMe'>
                        <h2>Déjame decirte algo sobre mí...</h2>
                        <p>
                            Soy un joven de 22 años con muchos sueños que alcanzar y objetivos por cumplir,  carismatico, innovador, optimista y muy creativo.
                        </p>
                        <br />
                        <p>
                            Actualmente me encuentro estudiando Ingeniería de Sistemas en la Universidad de la Costa de manera presencia.
                        </p>
                        <br />
                        <p>
                            Mi pasión como desarrollador web y software empezó a mediados de julio del año 2021, cuando aún nos encontrábamos confinados por la pandemia causada por el Covid-19 mi desempeño y capacidad creativa e innovadora la expreso a través del desarrollo y la programación.
                        </p>
                        <br />
                        <p>
                            Dentro de mis objetivos, se encuentra el mejorar cada día en todos los aspectos de mi vida, para ser un ejemplo que impacte a mi familia como núcleo inicial y que ello se expanda a la sociedad, sirviendo de inspiración para aquellos que alguna vez estuvieron enfocados y han perdido su camino.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About