import React from "react"
import GitHubButton from "react-github-btn"
import { FaLink } from "react-icons/fa"

import projectsStyles from "../assets/css/projects.module.scss"

import covImg from "../assets/images/projects/covindia.gif"
import pokeImg from "../assets/images/projects/poketwo.gif"
import qfImg from "../assets/images/projects/qfd.gif"
import gtImg from "../assets/images/projects/gtfcm.png"

const Projects = () => {
    const projectList = [
        {
            name: "Covindia",
            img: covImg,
            url: "covindia.com",
            flavor:
                "Real time district wise tracker for the Corona virus spread in India. Caddy, Flask and gunicorn on the backend with Travis CI. Implemented load balancing and reverse proxies for scalability",
            repo: "https://github.com/covindia/CovIndia-Website",
            link: true,
        },
        {
            name: "PokeTwo",
            img: pokeImg,
            url: "",
            flavor:
                "Multiplayer pokemon battle simulator, built using websockets. Using Docker for scalability, and a player AI trained with Q learning",
            repo: "https://gitlab.com/poketwo",
            link: true,
        },
        {
            name: "qFeedbacker",
            img: qfImg,
            url: "protected-plains-18708.herokuapp.com",
            flavor:
                "Batch email survey webapp, powered by stripe for payments, Google OAuth and webhooks for collecting surveys.",
            repo: "https://github.com/qurram-zaheer/qfeedbacker",
            category: "Start-up Sprint, E-Summit @ MEC 2020",
            link: true,
        },
        {
            name: "Game Theory based expert system for blast furnace",
            img: gtImg,
            flavor:
                "Design and implementation of a blast furnace using multi agent game theory. Clustering for agents done using Fuzzy C Means.",
            repo: "https://github.com/qurram-zaheer/gt-fcm",
        },
    ]
    return (
        <div className={projectsStyles.container}>
            <h2 className={projectsStyles.heading}>Some stuff I've made: </h2>
            {projectList.map(project => (
                <div className={projectsStyles.project} key={project.name}>
                    <div className={projectsStyles.img}>
                        <img src={project.img} alt={project.name}></img>
                    </div>
                    <div className={projectsStyles.rightHalf}>
                        <div className={projectsStyles.desc}>
                            <h3 className={projectsStyles.title}>
                                <a href={project.url}>{project.name}</a>
                                {project.link ? (
                                    <FaLink
                                        className={projectsStyles.linkIco}
                                    />
                                ) : null}
                            </h3>
                            <p className={projectsStyles.category}>
                                {project.category}
                            </p>
                            <p>{project.flavor}</p>
                        </div>
                        <div className={projectsStyles.links}>
                            <GitHubButton
                                href={project.repo}
                                data-size="large"
                                aria-label="Watch qurram-zaheer/gt-fcm on GitHub"
                            >
                                Source
                            </GitHubButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
