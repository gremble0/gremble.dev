import { ProjectProps } from "./components/projects/types"
import { SocialProps } from "./components/socials/types";

const projects: ProjectProps[] = [
    {
        projectName: "nattklar",
        imageSrc: "/assets/images/homescreen.png",
        url: "https://github.com/gremble0/nattklar",
        description: (
            <div className="project-description">
                <p>Nattklar is a fully featured <b>android application</b> for stargazing I developed with a team of students. In terms of frameworks and technologies used to develop nattklar it was written in <b>Kotlin</b> with <b>Jetpack Compose</b></p>
                <p>The main features of the app are:</p>
                <ul>
                    <li>A home screen displaying the most relevant</li>
                    <li>An interactive map for looking up relevant data for any given location in norway</li>
                    <li>A database containing descriptions of many astronomical objects, with
                        images hand drawn by one of our team members, Henriette.</li>
                    <li>A news screen displaying recent stargazing events that updates whenever
                        relevant news are broadcasted by some select news sources</li>
                </ul>
                <p>For this project i was largely in charge of implementing the home screen and the interactive map, as well as managing large amounts of the <b>documentation</b></p>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/nattklar">github page</a></p>
            </div>
        ),
    },
    {
        projectName: "kebab-lang",
        imageSrc: "/assets/images/kebab.png",
        url: "https://github.com/gremble0/kebab",
        description: (
            <div className="project-description">
                <p>Kebab is a a <b>strongly typed</b>, <b>functional programming language</b>. I developed it from scratch in <b>C</b> using no external libraries except <a href="https://github.com/gremble0/nonstdlib">nonstdlib</a> which I started developing before kebab, but much of this library's development happened in parallel with the programming language as I saw the requirements unfold. See the section for nonstdlib for more information about that project.</p>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/kebab">github page</a></p>
            </div>
        ),
    },
    {
        projectName: "nonstdlib",
        imageSrc: "/assets/images/nonstdlib.png",
        url: "https://github.com/gremble0/nonstdlib",
        description: (
            <div className="project-description">
                <p>Nonstdlib is a library for <b>C</b> that focuses on implementing some useful <b>datastructures and algorithms</b> that are absent from the C standard library. Its development is supported by SonarCloud's <b>static analysis tools</b> to ensure consistent interfaces, detecting possible memory leaks, etc.</p>
                <p>Here are the modules currently implemented in this library</p>
                <ul>
                    <li><b>nhashtable.h</b>: An implementation of the hashtable datastructure - associate a key with some given value with. O(1) insertion complexity, O(1) lookup complexity.</li>
                    <li><b>nerror.h</b>: Contains some functions for handling typical errors and printing more useful debug information. Also has a custom assert macro that uses nonstdlib's error handling on error</li>
                    <li><b>nlinked_list.h</b>: An implementation of the linked list datastructure - specifically a doubly ended linked list. O(1) insertion complexity, O(n) lookup complexity.</li>
                    <li><b>nlist.h</b>: An implementation of the dynamic array datastructure - something akin to ArrayLists in java or lists in python. O(1) insertion complexity, O(1) lookup complexity.</li>
                    <li><b>narray.h</b>: Some handy utilities for managing builtin C arrays.</li>
                    <li><b>nstring.h</b>: Simple string interface that saves the length of strings instead of relying on nullbytes, as well as some handy utilities for managing strings.</li>
                    <li><b>nsort.h</b>: Some sorting algorithms for builtin C arrays.</li>
                </ul>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/nonstdlib">github page</a></p>
            </div>
        ),
    },
    {
        projectName: "gremblebot",
        imageSrc: "/assets/images/gremblebot.png",
        url: "https://github.com/gremble0/gremblebot",
        description: (
            <div className="project-description">
                <p>Gremblebot is a multiplatform bot project that was one of my first larger projects. The bot operates on twitch, and discord, where it has differing functionalities.</p>
                <p>On twitch the bot focuses on having some fun commands for user interaction as well as providing logging (also with some fun commands to for example get a random message from a given user) through a <b>mysql database</b>.</p>
                <p>On discord the bot focuses on providing music streaming functionality using the <b>YoutubeDL</b> api and allowing users to queue and skip videos.</p>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/gremblebot">github page</a></p>
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
                <p>Cchat uses <b>Raylib</b> to display the GUI and the standard <b>C</b> library to maintain separate <b>threads</b> for the different components of the program as well as communicating with the server over a <b>TCP</b> connection</p>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/cchat">github page</a></p>
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
                <p>Similar to gremblebot gochat also logs information about users and messages that connect to the server with a <b>postgres database</b>.</p>
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/gochat">github page</a></p>
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
                <p>For a more detailed description see the <b>README.md</b> in the projects <a href="https://github.com/gremble0/snake">github page</a></p>
            </div>
        ),
    },
]

const socials: SocialProps[] = [
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

export { projects, socials };
