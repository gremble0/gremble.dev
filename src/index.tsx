import React from "react";
import ReactDOM from "react-dom/client";
import Socials from "./components/socials/socials";
import Projects from "./components/projects/projects";
import "./index.css";

function App() {
    document.title = "gremble.dev";

    const socials = [
        {
            socialName: "linkedin",
            imageSrc: "/assets/images/linkedin.png",
            url: "https://www.linkedin.com/in/herman-stornes-537308273"
        },
        {
            socialName: "discord",
            imageSrc: "/assets/images/discord.png",
            url: ""
        },
        {
            socialName: "github",
            imageSrc: "/assets/images/github.png",
            url: "https://github.com/gremble0"
        }
    ]

    const projects = [
        {
            projectName: "nattklar",
            imageSrc: "/assets/images/homescreen.png",
            url: "https://github.com/gremble0/nattklar"
        },
        {
            projectName: "gremblebot",
            imageSrc: "/assets/images/gremblebot.png",
            url: "https://github.com/gremble0/gremblebot"
        },
        {
            projectName: "snake",
            imageSrc: "/assets/images/snake.png",
            url: "https://github.com/gremble0/snake"
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
            
            <Projects items={projects} />

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
