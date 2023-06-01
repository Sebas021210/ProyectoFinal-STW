import React from "react";
import Icon from '@mdi/react';
import img3 from "../images/img3.JPG";
import { mdiLanguagePython } from '@mdi/js';
import { mdiLanguageJava } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageKotlin } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiWebpack } from '@mdi/js';
import { mdiBabel } from '@mdi/js';
import { mdiVuetify } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { mdiAws } from '@mdi/js';
import { mdiFirebase } from '@mdi/js';
import { mdiNpm } from '@mdi/js';
import { mdiSass } from '@mdi/js';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Header from "../components/header";
import "./styles/sobreMi.css";

function SobreMi() {
    return (
        <div id="sobreMi">
            <div id="Header">
                <Header />
            </div>
            <div className="bodySobreMi">
                <div className="principal">
                    <div className="imagen">
                        <Stack>
                            <Avatar
                                alt="Remy Sharp"
                                src={img3}
                                sx={{ width: 200, height: 200 }}
                            />
                        </Stack>
                    </div>
                    <div className="texto">
                        <h1>Sebastián Solorzano</h1>
                        <h5>Estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información</h5>
                    </div>
                </div>
                <div className="informacion">
                    <div className="left-column">
                        <div className="AboutMe">
                            <h5>Sobre mi</h5>
                            <p>
                                Mi nombre es Sebastián José Solorzano Pérez, tengo 20 años. Actualmente estoy cursando el tercer año de
                                Ingeniería en ciencias de la computación y tecnologías de la información en la Universidad del Valle de Guatemala.
                                Lo que más me gusta en la carrera es diseñar páginas web, por lo que la clase de Sistemas y Tecnologías Web
                                me ayudo mucho a reforzar varios temas que ya tenía un poco de conocimiento y a aprender nuevos frameworks.
                                Mis hobbies son ver futbol, jugar videojuegos y salir con mis amigos.
                            </p>
                            <p>
                                Estudie Bachillerato en ciencias y letras con orientación en computación en el Colegio San José de los Infantes, 
                                en el que pude aprender lo básico sobre HTML y CSS. Desde un principio me gusto la creación de páginas web, 
                                por lo que seguí aprendiendo de estos temas viendo videos y haciendo tareas. Ya estudiando en la Universidad del Valle de Guatemala 
                                puede seguir aprendiendo cada vez más sobre la creación de páginas web.
                            </p>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="Skills">
                            <h5>Habilidades</h5>
                            <div className="habilidades">
                                <span>
                                    <Icon path={mdiLanguagePython} size={1.5} color="white" />
                                    <p>Python</p>
                                </span>
                                <span>
                                    <Icon path={mdiLanguageJava} size={1.5} color="white" />
                                    <p>Java</p>
                                </span>
                                <span>
                                    <Icon path={mdiLanguageKotlin} size={1.5} color="white" />
                                    <p>Kotlin</p>
                                </span>
                                <span>
                                    <Icon path={mdiNodejs} size={1.5} color="white" />
                                    <p>Nodejs</p>
                                </span>


                                <span>
                                    <Icon path={mdiLanguageHtml5} size={1.5} color="white" />
                                    <p>HTML</p>
                                </span>
                                <span>
                                    <Icon path={mdiLanguageCss3} size={1.5} color="white" />
                                    <p>CSS</p>
                                </span>

                                <span>
                                    <Icon path={mdiLanguageJavascript} size={1.5} color="white" />
                                    <p>Javascript</p>
                                </span>
                                <span>
                                    <Icon path={mdiReact} size={1.5} color="white" />
                                    <p>React</p>
                                </span>

                                <span>
                                    <Icon path={mdiWebpack} size={1.5} color="white" />
                                    <p>Webpack</p>
                                </span>
                                <span>
                                    <Icon path={mdiBabel} size={1.5} color="white" />
                                    <p>Babel</p>
                                </span>
                                <span>
                                    <Icon path={mdiVuejs} size={1.5} color="white" />
                                    <p>Vuejs</p>
                                </span>
                                <span>
                                    <Icon path={mdiVuetify} size={1.5} color="white" />
                                    <p>Vuetify</p>
                                </span>

                                <span>
                                    <Icon path={mdiAws} size={1.5} color="white" />
                                    <p>AWS</p>
                                </span>
                                <span>
                                    <Icon path={mdiFirebase} size={1.5} color="white" />
                                    <p>Firebase</p>
                                </span>
                                <span>
                                    <Icon path={mdiNpm} size={1.5} color="white" />
                                    <p>NPM</p>
                                </span>
                                <span>
                                    <Icon path={mdiSass} size={1.5} color="white" />
                                    <p>SASS</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
