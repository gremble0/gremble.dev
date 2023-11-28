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
                    <p>Nattklar is a fully featured <b>android application</b> for stargazing I developed 
                       with a team of students. In terms of frameworks and technologies used to develop nattklar
                       it was written in <b>Kotlin</b> with <b>Jetpack Compose</b></p>
                    <p>The main features of the app are:</p>
                    <ul>
                        <li>A home screen displaying the most relevant</li>
                        <li>An interactive map for looking up relevant data for any given location in norway</li>
                        <li>A database containing descriptions of many astronomical objects, with
                            images hand drawn by one of our team members, Henriette.</li>
                        <li>A news screen displaying recent stargazing events that updates whenever 
                            relevant news are broadcasted by some select news sources</li>
                    </ul>
                    <p>For this project i was largely in charge of implementing the home screen and
                       the interactive map, as well as managing large amounts of the <b>documentation</b>.
                       For more details about the project check out the <a href="https://github.com/gremble0/nattklar">
                       github!</a></p>
                </div>
            ),
        },
        {
            projectName: "gremblebot",
            imageSrc: "/assets/images/gremblebot.png",
            url: "https://github.com/gremble0/gremblebot",
            description: (
                <div className="project-description">
                    <p>Gremblebot is a multiplatform bot project that was one of my first larger projects.
                       The bot operates on twitch, and discord, where it has differing functionalities.</p>
                    <p>On twitch the bot focuses on having some fun commands for user interaction as well
                       as providing logging (also with some fun commands to for example get a random message
                       from a given user) through a <b>mysql database</b>.</p>
                    <p>On discord the bot focuses on providing music streaming functionality using the
                       <b>YoutubeDL</b> api and allowing users to queue and skip videos.</p>
                </div>
            ),
        },
        {
            projectName: "cchat",
            imageSrc: "/assets/images/cchat.png",
            url: "https://github.com/gremble0/cchat",
            description: (
                <div className="project-description">
                    <p>Cchat is the GUI client for its sister project Gochat - the server application for Cchat.</p>
                    <p>Cchat uses <b>Raylib</b> to display the GUI and the standard <b>C</b> library to maintain 
                        separate <b>threads</b> for the different components of the program as well as
                        communicating with the server over a <b>TCP</b> connection</p>
                </div>
            ),
        },
        {
            projectName: "gochat",
            imageSrc: "/assets/images/gochat.png",
            url: "https://github.com/gremble0/gochat",
            description: (
                <div className="project-description">
                    <p>Gochat is the server application for its sister project Cchat - the GUI client for Gochat</p>
                    <p>As the creative name implies gochat is written in <b>Go</b></p>
                    <p>Similar to gremblebot gochat also logs information about users and messages that connect
                       to the server with a <b>postgres database</b>.</p>
                </div>
            ),
        },
        {
            projectName: "snake",
            imageSrc: "/assets/images/snake.png",
            url: "https://github.com/gremble0/snake",
            description: (
                <div className="project-description">
                    <p>This project is a GUI implementation of the classic Snake game written in <b>Java</b></p>
                </div>
            ),
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
