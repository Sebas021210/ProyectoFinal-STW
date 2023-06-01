import React from "react";
import { useNavigate } from 'react-router-dom';
import './styles/header.css';

function Header() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    };

    const handleClickSobreMi = () => {
        navigate('/sobreMi');
    };

    const handleClickProyectos = () => {
        navigate('/proyectos');
    };

    return (
        <header className="header">
            <nav>
                <ul className="button-list">
                    <li>
                        <button className="nav-button" onClick={handleClickHome}>Inicio</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={handleClickSobreMi}>Sobre mi</button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={handleClickProyectos}>Proyectos</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
