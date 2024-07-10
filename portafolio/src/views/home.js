import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import programming from "../images/Programming-amico.png";
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiCodeTags } from '@mdi/js';
import "./styles/home.css";

function Home() {
    const navigate = useNavigate();

    const handleClickProyectos = () => {
        navigate('/proyectos');
    };

    return (
        <div id="Home">
            <div id="Header">
                <Header />
            </div>
            <div className="bodyHome">
                <div className="textoPrincipal">
                    <h1>Hola, soy Sebastián</h1>
                    <h6>¡Bienvenido a mi portafolio! Aquí podrás encontrar una variedad de proyectos en los que he trabajado. Cada proyecto refleja mi dedicación a la creación de aplicaciones web, utilizando tecnologías modernas. Además, en este portafolio encontrarás una página dedicada a hablar sobre mí, mis conocimientos y cómo puedes ponerte en contacto conmigo. ¡Espero que mis proyectos te resulten interesantes y que disfrutes explorándolos!</h6>
                    <div className="contactos">
                        <a href="https://github.com/Sebas021210" target="_blank" rel="noopener noreferrer"><Icon path={mdiGithub} size={2} color="white"/></a>
                        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-jos%C3%A9-solorzano-p%C3%A9rez-7544b9205/" target="_blank" rel="noopener noreferrer"><Icon path={mdiLinkedin} size={2} color="white"/></a>
                        <a href="https://www.instagram.com/sebass.sp/" target="_blank" rel="noopener noreferrer"><Icon path={mdiInstagram} size={2} color="white"/></a>
                        <button onClick={handleClickProyectos} style={{ background: "none", border: "none", padding: 0, outline: "none" }}><Icon path={mdiCodeTags} size={2} color="white"/></button>
                    </div>
                </div>
                <div className="imageProgramming">
                    <img src={programming} alt="programming"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
