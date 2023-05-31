import React from "react";
import Header from "../components/header";
import "./styles/sobreMi.css";

function SobreMi() {
    return (
        <div id="sobreMi">
            <div id="Header">
                <Header />
            </div>
            <div className="bodySobreMi">
                <h1>Sobre Mi</h1>
                <h2>Sebastian Solorzano</h2>
            </div>
        </div>
    );

};

export default SobreMi;