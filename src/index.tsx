import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Socials from './socials';

function openInNewTab(url: string) {
    window.open(url, "_blank", "noreferrer")
}

function discordOnClick() {
    navigator.clipboard.writeText("gremble");
}

function App() {
    document.title = "gremble.dev";

    const socials = [
        {
            socialName: "linkedin",
            imageSrc: "/linkedin.png",//`${imagePath}/linkedin.png`,
            url: "https://www.linkedin.com/in/herman-stornes-537308273"
        },
        {
            socialName: "discord",
            imageSrc: "/discord.png", //`${imagePath}/discord.png`,
            url: "https://www.linkedin.com/in/herman-stornes-537308273"
        },
        {
            socialName: "github",
            imageSrc: "/github.png", //`${imagePath}/github.png`,
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




            // <div className = "socials">
            //     <h1 className = "title-socials">Contact me</h1>
            //     <div className = "linkedin social" onClick = { () => openInNewTab("https://www.linkedin.com/in/herman-stornes-537308273") }>
            //         <p className = "social-link">Linkedin</p>
            //         <img src = { require("./assets/images/linkedin.png") } className = "social-logo" />
            //     </div>
            //     <div className = "discord social" onClick = { () => discordOnClick() }>
            //         <p className = "social-link">Discord: gremble <a className = "nerdfont">󱓥</a></p>
            //         <img src = { require("./assets/images/discord.png") } className = "social-logo" />
            //     </div>
            //     <div className = "github social" onClick = { () => openInNewTab("https://github.com/gremble0") }>
            //         <p className = "social-link">Github</p>
            //         <img src = { require("./assets/images/github.png") } className = "social-logo" />
            //     </div>
            // </div>
