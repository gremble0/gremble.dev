import React from 'react';
import ReactDOM from 'react-dom/client';
import Socials from './socials';
import './index.css';

function openInNewTab(url: string) {
    window.open(url, "_blank", "noreferrer")
}

function App() {
    document.title = "gremble.dev";

    const socials = [
        {
            socialName: "linkedin",
            imageSrc: "/linkedin.png",
            url: "https://www.linkedin.com/in/herman-stornes-537308273"
        },
        {
            socialName: "discord",
            imageSrc: "/discord.png",
            url: ""
        },
        {
            socialName: "github",
            imageSrc: "/github.png",
            url: "https://github.com/gremble0"
        }
    ]

    return (
        <div className = "app">
            <div className = "title-wrapper">
                <h2>Hi, I'm</h2>
                <h1 className = "title-name">gremble</h1>
                <p>Software Engineer</p>
            </div>

            <Socials items={socials} />
            

            <div className = "projects">
                <h1 className = "title-projects">My projects</h1>
                <div className = "projects-list">
                    <div className = "nattklar">
                        <h2 className = "project" onClick = { () => openInNewTab("https://github.com/gremble0/nattklar") }>Nattklar <a className = "nerdfont"></a></h2>
                        <img src = { require("./assets/images/homescreen.png") } />
                    </div>
                    <div className = "gremblebot">
                        <h2 className = "project" onClick = { () => openInNewTab("https://github.com/gremble0/gremblebot") }>Gremblebot <a className = "nerdfont"></a></h2>
                        <img src = { require("./assets/images/gremblebot.png")} />
                    </div>
                    <div className = "snake">
                        <h2 className = "project" onClick = { () => openInNewTab("https://github.com/gremble0/snake") }>Snake <a className = "nerdfont"></a></h2>
                        <img src = { require("./assets/images/snake.png") } />
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
