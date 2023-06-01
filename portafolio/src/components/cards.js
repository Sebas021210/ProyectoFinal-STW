import React, { useState } from "react";
import Icon from '@mdi/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import labCss from '../images/labCSS.png';
import labChat from '../images/labChat.png';
import labReact from '../images/labReact.png';
import DisneyClone from '../images/Disney+.png';
import TableTrek from '../images/TableTrek.png';
import Medicom from '../images/Medicom.png';
import Webpack from '../images/Webpack.png';
import Babel from '../images/Babel.png';
import github from '../images/github.png';
import link from '../images/link.png';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiWebpack } from '@mdi/js';
import { mdiBabel } from '@mdi/js';
import { mdiVuetify } from '@mdi/js';
import { mdiSass } from '@mdi/js';
import "./styles/cards.css"

function MyVerticallyCenteredModal({ card, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {card.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ textAlign: 'center' }}>{card.text}</p>
                    <img src={card.image} alt="proyectImage" style={{ width: "700px", height: "auto" }} />
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <a href={card.githubLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><img src={github} style={{ width: "35px", height: "35px" }} alt="GitHub"></img></a>
                    <a href={card.link} target="_blank" rel="noopener noreferrer"><img src={link} style={{ width: "35px", height: "35px" }} alt="Link"></img></a>
                </div>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Cards() {
    const cardData = [
        {
            title: "Laboratorio CSS",
            text: "El laboratorio consiste en eligir una imagen y reproducirla utilizando únicamente html y css.",
            image: labCss,
            githubLink: "https://github.com/Sebas021210/LabCSS",
            link: "http://3.15.17.61:3162/",
            icons: [mdiLanguageHtml5, mdiLanguageCss3]
        },
        {
            title: "Laboratorio Chat",
            text: "El laboratorio consiste en realizar el diseño de un chat que servira para conectarse a un servidor en el que se podrá hacer uso de un chat en tiempo real.",
            image: labChat,
            githubLink: "https://github.com/Sebas021210/LabChat",
            link: "http://3.15.17.61:3160/",
            icons: [mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript]
        },
        {
            title: "Laboratorio Webpack and SASS/SCSS",
            text: "El laboratorio consiste en transformar una historia en la que se utilice JS, CSS, HTML, con el fin de crear un proyecto modular para poder aplicar Webpack.",
            image: Webpack,
            githubLink: "https://github.com/Sebas021210/Lab7SW/tree/main/Lab7STW",
            link: "",
            icons: [mdiLanguageHtml5, mdiSass, mdiLanguageJavascript, mdiWebpack]
        },
        {
            title: "Laboratorio Webpack with Babel",
            text: "El laboratorio consiste en tener una fase final donde se muestre la configuración de los JS generados por medio de babel.",
            image: Babel,
            githubLink: "https://github.com/Sebas021210/Lab7SW/tree/main/Lab8Babel/Lab7STW",
            link: "",
            icons: [mdiLanguageHtml5, mdiSass, mdiLanguageJavascript, mdiWebpack, mdiBabel]
        },
        {
            title: "Laboratorio React",
            text: "El laboratorio consiste en realizar un juego de memoria en una grid de al menos 4x4 tarjetas. Las tarjetas deben voltearse cuando se hace clic.",
            image: labReact,
            githubLink: "https://github.com/Sebas021210/Lab8-React",
            link: "https://stw-23-9ad4e.web.app/",
            icons: [mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiWebpack]
        },
        {
            title: "Disney+ Clone",
            text: "El proyecto consiste en escoger una página web que admiren y crear una copia idéntica del estilo del sitio.",
            image: DisneyClone,
            githubLink: "https://github.com/Sebas021210/Proyecto1-STW",
            link: "https://proyecto1-stw-8c95b.web.app/",
            icons: [mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiSass, mdiWebpack]
        },
        {
            title: "Medicom",
            text: "El proyecto consiste en crear una página web que permita a los médicos y a los hospitales llevar un mejor control de los pacientes.",
            image: Medicom,
            githubLink: "https://github.com/Jskenpo/MediCom",
            link: "",
            icons: [mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript]
        },
        {
            title: "TableTrek",
            text: "El proyecto consiste en crear una página web que permita a los usuarios buscar y reservar en los mejores restaurantes del país.",
            image: TableTrek,
            githubLink: "https://github.com/Teviets/TableTrek",
            link: "http://18.220.61.52/",
            icons: [mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiVuejs, mdiVuetify]
        },
    ];

    const chunkSize = 4;
    const cardGroups = cardData.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    const [modalShow, setModalShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setModalShow(true);
    };

    return (
        <div>
            {cardGroups.map((cardGroup, groupIndex) => (
                <Row key={groupIndex} className="mb-3">
                    {cardGroup.map((card, index) => (
                        <Col key={index} sm={6} md={4} lg={3}>
                            <Card
                                style={{
                                    width: '20rem',
                                    height: '19rem',
                                    background: '#323545',
                                    color: '#fff',
                                    marginBottom: '1rem'
                                }}
                                onClick={() => handleCardClick(card)}
                            >
                                <Card.Header><Card.Title>{card.title}</Card.Title></Card.Header>
                                <Card.Body
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        height: '100%'
                                    }}
                                >
                                    <Card.Text>{card.text}</Card.Text>
                                    <div className="icon-container">
                                        {card.icons.map((icon, iconIndex) => (
                                            <Icon key={iconIndex} path={icon} size={1} color="#fff" />
                                        ))}
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Button variant="primary" style={{ background: '#202435' }}>Más información</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
            {selectedCard && (
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    card={selectedCard}
                />
            )}
        </div>
    );
}

export default Cards;
