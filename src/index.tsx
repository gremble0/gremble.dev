import React from "react";
import ReactDOM from "react-dom/client";
import Socials from "./components/socials/socials";
import Projects from "./components/projects/projects";
import "./index.css";
import { ProjectProps } from "./components/projects/types";

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

    const projects: ProjectProps[] = [
        {
            projectName: "nattklar",
            imageSrc: "/assets/images/homescreen.png",
            url: "https://github.com/gremble0/nattklar",
            description: (
                <div className="project-description">
                    <p>Nattklar is a fully featured android application for stargazing I developed 
                       with a team of students. The main features of the app are:</p>
                    <ul>
                        <li>A home screen displaying the most relevant</li>
                        <li>An interactive map for looking up relevant data for any given location in norway</li>
                        <li>A database containing descriptions of many astronomical objects, with
                            images hand drawn by one of our team members, Henriette.</li>
                        <li>A news screen displaying recent stargazing events that updates whenever 
                            relevant news are broadcasted by some select news sources</li>
                    </ul>
                    <p>For this project i was largely in charge of implementing the home screen and
                       the interactive map, as well as managing large amounts of the documentation.
                       For more details about the project check out the <a href="https://github.com/gremble0/nattklar">
                       github!</a></p>
                </div>
            ),
        },
        {
            projectName: "gremblebot",
            imageSrc: "/assets/images/gremblebot.png",
            url: "https://github.com/gremble0/gremblebot",
            description: <p></p>,
        },
        {
            projectName: "cchat",
            imageSrc: "/assets/images/cchat.png",
            url: "https://github.com/gremble0/cchat",
            description: <p></p>,
        },
        {
            projectName: "gochat",
            imageSrc: "/assets/images/gochat.png",
            url: "https://github.com/gremble0/gochat",
            description: <p></p>,
        },
        {
            projectName: "snake",
            imageSrc: "/assets/images/snake.png",
            url: "https://github.com/gremble0/snake",
            description: <p></p>,
        },
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
