import React from "react";
import Header from "../components/header";
import "./styles/contacto.css";

function Contacto() {
    return (
        <div id="Contacto">
            <div id="Header">
                <Header />
            </div>
            <div className="bodyContacto">
                <h1>Contacto</h1>
                <h2>celular</h2>
                <h2>correo</h2>
                <h2>linkedin</h2>
            </div>
        </div>
    );
}

export default Contacto;
