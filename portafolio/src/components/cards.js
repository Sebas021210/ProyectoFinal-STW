import React, { useState } from "react";
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
//import github from '../images/github.png';
//import link from '../images/link.png';

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
            <Modal.Footer>
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
            image: labCss
        },
        {
            title: "Laboratorio Chat",
            text: "El laboratorio consiste en realizar el diseño de un chat que servira para conectarse a un servidor en el que se podrá hacer uso de un chat en tiempo real.",
            image: labChat
        },
        {
            title: "Laboratorio Webpack and SASS/SCSS",
            text: "El laboratorio consiste en transformar una historia en la que se utilice JS, CSS, HTML, con el fin de crear un proyecto modular para poder aplicar Webpack.",
            image: Webpack
        },
        {
            title: "Laboratorio Webpack with Babel",
            text: "El laboratorio consiste en tener una fase final donde se muestre la configuración de los JS generados por medio de babel.",
            image: Babel
        },
        {
            title: "Laboratorio React",
            text: "El laboratorio consiste en realizar un juego de memoria en una grid de al menos 4x4 tarjetas. Las tarjetas deben voltearse cuando se hace clic.",
            image: labReact
        },
        {
            title: "Disney+ Clone",
            text: "El proyecto consiste en escoger una página web que admiren y crear una copia idéntica del estilo del sitio.",
            image: DisneyClone
        },
        {
            title: "Medicom",
            text: "El proyecto consiste en crear una página web que permita a los médicos y a los hospitales llevar un mejor control de los pacientes.",
            image: Medicom
        },
        {
            title: "TableTrek",
            text: "El proyecto consiste en crear una página web que permita a los usuarios buscar y reservar en los mejores restaurantes del país.",
            image: TableTrek
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
                                    height: '17rem',
                                    background: '#2C2E3A',
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
