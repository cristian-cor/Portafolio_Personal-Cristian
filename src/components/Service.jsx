import React from 'react'
//styles
import '../style/Service.css'
//images
const Service = () => {
    return (
        <>
            <section>
                <div className='section_service-title'>
                    <h2 className='mb-5 text-center service-title mt-5'>
                        Formación academica
                    </h2>
                </div>
                <section className='section_container-card1'>
                    <div className="coll-3">
                        <div className="section_service-box ">
                            <div className="icon">
                                <img
                                    className='img_platzi'
                                    src="https://www.amvo.org.mx/wp-content/uploads/2021/04/logo-platzi-2.png"
                                    alt="Platzi"
                                />
                            </div>
                            <div className="container__card">
                                <h1 className="service__text">Platzi</h1>
                                <p className='card-info'>
                                    Platzi es una plataforma de educación Online, la cual tengo acceso a más de 600 cursos en diferentes áreas de aprendizaje:
                                </p>
                                <ul claseName='ul'>
                                    <li>Desarrollo e ingeniería.</li>
                                    <li>Diseño y UX.</li>
                                    <li>Marketing.</li>
                                    <li>Negocios y emprendimiento.</li>
                                    <li>Producción audiovisual.</li>
                                    <li>Crecimiento profesional.</li>
                                </ul>
                                <p className='card-info'>
                                Mi enfoque siempre ha sido el DESARROLLO e INGENIERIA, y cuento con mas de 23 certificados en el área de Desarrollo web y software, así mismo con mas de 750 horas de estudio.
                               </p>
                            </div>
                        </div>
                    </div>
<br/>
                    <div className="coll-3 ">
                        <div className="section__service-box ">
                            <div className="icon">
                                <img
                                    className='dh'
                                    src="https://images.prismic.io/dh-frontend/89cccff9-e798-47d2-8193-36cf1019a3b5_DigitalHouse_Logo_White.png?auto=compress,format"
                                    alt="Digital House"
                                />
                            </div>
                            <div className="container__card">
                                <h1 className="service__text DH">Digital House</h1>
                                <p className='card-info'>
                                    Digital House es una organización edtech que potencia al ecosistema tecnológico empoderando a futuros creadores del mundo digital.
                                </p>
                                <br />
                                <p className='card-info'>
                                    Digital House ofrece formación 100% remota en programación, experiencia del usuario, datos y marketing digital a través de cursos intensivos, capacitaciones a empresas y programas con escuelas.</p>
                                <br />
                                <p className='card-info'>
                                    En esta academia me encuentro cursando el progrma de Desarrollador Web Full Stak, la cual tiene una duración de 6,5 meses donde estaré estudiano de manera intemsiva HTML, CSS, JAVASCRIPT, REACT.JS y NODE.JS.
                                    <br />
                                    Con el objetivo de que salga con los conocimientos necesario para enfrentarme en el mundo laboral
                                </p>
                            </div>
                        </div>
                    </div>
<br/>
                    <div className="coll-3">
                        <div className="section__service-box ">
                            <div className="icon">
                                <img
                                    className='cuc'
                                    src="https://cuc.edu.co//images/jem/events/logouniversidaddelacostacuc_1386847920.png"
                                    alt="Universidad cuc"
                                />
                            </div>
                            <div className="container__card">
                                <h1 className="service__text CUC">Universidad de la Costa</h1>
                                <p className='card-info'>
                                    Me gusta todo lo relacionado con las nuevas tecnologías.
                                </p >
                                <br/>
                                <p className='card-info'>  Escogí ingeniería de sistemas por bastantes factores que me convencieron:</p>
                                <br />
                                <ul >
                                    <li>
                                        Decidí estudiar ingeniería de sistemas porque no solo me llama la atención la tecnología si no también me llama la atención la forma como la tecnología facilita problemas que se nos presentan a diario.
                                    </li>
                                    <li>
                                        La segunda razón por la que escogí estudiar ingeniería de sistemas es por la alta tasa de empleo que se presenta para esta carrera.
                                    </li>
                                    <li>
                                        Por ultimo, pero no menos importante, es de tipo social ya que mi amigo y conocidos estudiaron la misma carrera y se les ve un futuro seguro tanto económico, social y familiar como académico.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Service