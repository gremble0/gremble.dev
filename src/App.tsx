import './App.css';

import discordLogo from './assets/images/discord2.png';
import githubLogo from './assets/images/github.png';
import linkedinLogo from './assets/images/linkedin.png'

function openInNewTab(url: string) {
    window.open(url, "_blank", "noreferrer")
}

function discordOnClick() {
    navigator.clipboard.writeText("gremble");
}

export default function App() {
    document.title = "gremble.dev";

    return (
        <div className = "app">
            <div className = "title-wrapper">
                <h2>Hi, I'm</h2>
                <h1 className = "title-name">gremble</h1>
                <p>Software Engineer</p>
            </div>
            
            <div className = "socials">
                <h1 className = "title-socials">Contact me</h1>
                <div className = "linkedin social" onClick = { () => openInNewTab("https://www.linkedin.com/in/herman-stornes-537308273") }>
                    <p className = "social-link">Linkedin</p>
                    <img src = {linkedinLogo} className = "social-logo" />
                </div>
                <div className = "discord social" onClick = { () => discordOnClick() }>
                    <p className = "social-link">Discord: gremble <a className = "nerdfont">󱓥</a></p>
                    <img src = {discordLogo} className = "social-logo" />
                </div>
                <div className = "github social" onClick = { () => openInNewTab("https://github.com/gremble0") }>
                    <p className = "social-link">Github</p>
                    <img src = {githubLogo} className = "social-logo" />
                </div>
            </div>

            <div className = "projects">
            </div>
        </div>
    );
}
