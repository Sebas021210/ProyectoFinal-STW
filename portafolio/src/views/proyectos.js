import React from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import "./styles/proyectos.css";

function Proyectos() {
    return (
        <div id="Proyectos">
            <div id="Header">
                <Header />
            </div>
            <div className="bodyProyectos">
                <Cards />
            </div>
        </div>
    );
}

export default Proyectos;
