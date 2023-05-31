import React from "react";
import Header from "../components/header";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./styles/home.css";

function Home() {
    return (
        <div id="Home">
            <div id="Header">
                <Header />
            </div>
            <div className="bodyHome">
                <Stack>
                    <Avatar 
                        alt="Remy Sharp" 
                        src="https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg" 
                        sx={{ width: 200, height: 200 }}
                    />
                </Stack>
                <h1>Soy Sebastian Solorzano</h1>
            </div>
        </div>
    );
}

export default Home;
