import React, { useEffect, useState } from 'react';
import './App.css';

import discordLogo from './assets/images/discord.png';
import githubLogo from './assets/images/github.png';
import twitchLogo from './assets/images/twitch.png';

function App() {
    document.title = "gremble.dev";

    useEffect(() => {
        const linkToSocial = (url: string) => {
            window.location.href = url;
        };

        const githubDiv = document.querySelector(".github") as HTMLDivElement;
        const twitchDiv = document.querySelector(".twitch") as HTMLDivElement;

        githubDiv.addEventListener("click", function() {
            linkToSocial("https://github.com/gremble0");
        });
        twitchDiv.addEventListener("click", function() {
            linkToSocial("https://twitch.tv/gremble");
        });
    }, []);

    return (
        <div className = "app">
            <h1 className = "title">gremble.dev</h1>
            
            <div className = "socials">
                <div className = "discord social">
                    <p className = "social-link">Discord gremble:1534</p>
                    <img src = {discordLogo} className = "social-logo" />
                </div>
                <div className = "github social">
                    <p className = "social-link">Github</p>
                    <img src = {githubLogo} className = "social-logo" />
                </div>
                <div className = "twitch social">
                    <p className = "social-link">Twitch</p>
                    <img src = {twitchLogo} className = "social-logo" />
                </div>
            </div>
        </div>
    );
}

export default App;
