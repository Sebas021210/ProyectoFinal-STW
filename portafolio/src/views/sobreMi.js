import React from "react";
import Icon from '@mdi/react';
import img3 from "../images/img3.JPG";
import { mdiLanguagePython } from '@mdi/js';
import { mdiLanguageJava } from '@mdi/js';
import { mdiLanguageC } from '@mdi/js';
import { mdiLanguageCpp } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageTypescript } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiAngular } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiWebpack } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { mdiAws } from '@mdi/js';
import { mdiFirebase } from '@mdi/js';
import { mdiNpm } from '@mdi/js';
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
                                Mi nombre es Sebastián José Solorzano Pérez, tengo 21 años. Actualmente estoy cursando el cuarto año de
                                Ingeniería en ciencias de la computación y tecnologías de la información en la Universidad del Valle de Guatemala.
                                Lo que más me gusta en la carrera es diseñar aplicaciones web, Mi objetivo es poder obtener experiencia, contribuir 
                                con mis conocimientos y habilidades para alcanzar las metas establecidas por la institución que me brinde la oportunidad 
                                de laborar. 
                            </p>
                            <p>
                                Tengo habilidades en lenguajes de programación como Java, C++, Python, javaScript, Visual Basic, Kotlin. Conocimientos en 
                                bases de datos no relacionales y SQL. Desarrollo web utilizando HTML, CSS y frameworks como React, Angular, Vue y ambientes 
                                de ejecución como Node y webpack. Dominio de herramientas y tecnologías relacionadas con la computación como AWS y Firebase.
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
                                    <Icon path={mdiLanguageC} size={1.5} color="white" />
                                    <p>C</p>
                                </span>
                                <span>
                                    <Icon path={mdiLanguageCpp} size={1.5} color="white" />
                                    <p>CPP</p>
                                </span>


                                <span>
                                    <Icon path={mdiNodejs} size={1.5} color="white" />
                                    <p>Nodejs</p>
                                </span>
                                <span>
                                    <Icon path={mdiNpm} size={1.5} color="white" />
                                    <p>NPM</p>
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
                                    <Icon path={mdiLanguageTypescript} size={1.5} color="white" />
                                    <p>Typescript</p>
                                </span>
                                <span>
                                    <Icon path={mdiReact} size={1.5} color="white" />
                                    <p>React</p>
                                </span>
                                <span>
                                    <Icon path={mdiAngular} size={1.5} color="white" />
                                    <p>Angular</p>
                                </span>

                                <span>
                                    <Icon path={mdiVuejs} size={1.5} color="white" />
                                    <p>Vuejs</p>
                                </span>
                                <span>
                                    <Icon path={mdiWebpack} size={1.5} color="white" />
                                    <p>Webpack</p>
                                </span>
                                <span>
                                    <Icon path={mdiAws} size={1.5} color="white" />
                                    <p>AWS</p>
                                </span>
                                <span>
                                    <Icon path={mdiFirebase} size={1.5} color="white" />
                                    <p>Firebase</p>
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
