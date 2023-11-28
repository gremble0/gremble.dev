import React from "react";
import ReactDOM from "react-dom/client";
import Socials from "./components/socials/socials";
import Projects from "./components/projects/projects";
import "./index.css";
import { projects, socials } from "./constants";

function App() {
    document.title = "gremble.dev";

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
