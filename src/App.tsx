import React, { useEffect } from 'react';
import './App.css';

import discordLogo from './assets/images/discord2.png';
import githubLogo from './assets/images/github.png';

function App() {
    useEffect(() => {
        document.title = "gremble.dev"
    }, []);
        
    return (
        <div className = "app">
            <h1 className = "title">gremble.dev</h1>
            
            <div className = "main">
                <div className = "socials">
                    <div className = "social">
                        <p className = "social-link">Discord</p>
                        <img src = {discordLogo} className = "social-logo" />
                    </div>
                    <div className = "social">
                        <a href = "https://github.com/gremble0" className = "social-link" target = "_blank">Github</a>
                        <img src = {githubLogo} className = "social-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
