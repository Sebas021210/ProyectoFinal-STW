# ProyectoFinal-STW

https://portafolio-stw-8ca0c.web.app/

## Descripcion de proyecto

Este proyecto tiene el proposito de crear un portafolio demostrando las tecnologías web que se conocen. Se utilizaran laboratorios y proyectos realizados durante este curso. El portafolio es su carta de presentación personal y profesional al solicitar trabajos en el área de web.

## Link documentación:

https://docs.google.com/document/d/18TMiOSKVgWNXUoi-oIjBp0ovaoQKwerhHbQvw3n-Oa4/edit?usp=sharing

## Features

- ⚛ **React** — 16.12.0
- 🚀 **Webpack**  — Hot Reloading, Code Splitting, Optimized Build
- 🛠 **Babel** — ES6 syntax, Airbnb & React/Recommended config
- 💅 **CSS** — Styled Components, CSS, Sass
- ✅  **Tests** — Jest, React Testing Library & Cypress

## Getting started

1. Clonar repositorio `https://github.com/Sebas021210/ProyectoFinal-STW`
2. Moverse al directorio: `cd portafolio`.<br />
3. Correr `npm install` para instalar dependencias.<br />
4. Correr `npm start` para ver la página.

## Commands

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`
- `npm run webpack`

## Estructura

- `portafolio` carpeta donde se encuentra la configuracion (package.json, webpack, babel)
- - `dist` carpeta donde se encuentra el proyecto creado por webpack 
- - `public` carpeta donde se encuentra el archivo .html del proyecto
- - `src` carpeta donde se encuentra los archivos .js y .css
- - - `componentes` carpeta donde se encuentran los componentes del proyecto
- - - `images` carpeta donde se encuentran las imagenes utilizadas en el proyecto
- - - `views` carpeta donde se encuentran las vistas utilizadas en el proyecto
- - - `App.js`
- - - `index.js`

### index.js

 ```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.css'
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  ```
  
### react-router-dom

 ```
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/sobreMi"} element={<SobreMi />} />
        <Route exact path={"/proyectos"} element={<Proyectos />} />
      </Routes>
    </Router>
  );
}
  ```
  
### Navegacion

```
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
  ```
  
# Sebastián José Solorzano Pérez 21826
