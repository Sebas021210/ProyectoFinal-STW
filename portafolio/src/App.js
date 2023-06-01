import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/home";
import SobreMi from "./views/sobreMi";
import Proyectos from "./views/proyectos";
import "./App.css";

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

export default App;
