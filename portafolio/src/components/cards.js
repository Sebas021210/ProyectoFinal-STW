import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
    const cardData = [
        {
            title: "Laboratorio CSS",
            text: "El laboratorio consiste en eligir una imagen y reproducirla utilizando únicamente html y css.",
        },
        {
            title: "Laboratorio Chat",
            text: "El laboratorio consiste en realizar el diseño de un chat que servira para conectarse a un servidor en el que se podrá hacer uso de un chat en tiempo real.",
        },
        {
            title: "Laboratorio Webpack and SASS/SCSS",
            text: "El laboratorio consiste en transformar una historia en la que se utilice JS, CSS, HTML, con el fin de crear un proyecto modular para poder aplicar Webpack.",
        },
        {
            title: "Laboratorio Webpack with Babel",
            text: "El laboratorio consiste en tener una fase final donde se muestre la configuración de los JS generados por medio de babel.",
        },
        {
            title: "Laboratorio React",
            text: "El laboratorio consiste en realizar un juego de memoria en una grid de al menos 4x4 tarjetas. Las tarjetas deben voltearse cuando se hace clic.",
        },
        {
            title: "Disney+ Clone",
            text: "El proyecto consiste en escoger una página web que admiren y crear una copia idéntica del estilo del sitio.",
        },
        {
            title: "Medicom",
            text: "El proyecto consiste en crear una página web que permita a los médicos y a los hospitales llevar un mejor control de los pacientes.",
        },
        {
            title: "TableTrek",
            text: "El proyecto consiste en crear una página web que permita a los usuarios buscar y reservar en los mejores restaurantes del país.",
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

    return (
        <div>
            {cardGroups.map((cardGroup, groupIndex) => (
                <Row key={groupIndex} className="mb-3">
                    {cardGroup.map((card, index) => (
                        <Col key={index} sm={6} md={4} lg={3}>
                            <Card style={{ width: '20rem', height: '17rem', background: '#2C2E3A', color: '#fff', marginBottom: '1rem' }}>
                                <Card.Header><Card.Title>{card.title}</Card.Title></Card.Header>
                                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted"><Button variant="primary" style={{ background: '#202435' }}>Más información</Button></Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default Cards;
