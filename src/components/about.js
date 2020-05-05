import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"
import { FaHeart } from "react-icons/fa"

import aboutStyles from "../assets/css/about.module.scss"

const AboutSection = () => {
    const skills = {
        languages: ["ES6+", "Python", "Rust", "Go", "C++"],
        frameworks: ["React", "Vue", "Django", "Qt", "PyTorch", "Express"],
    }
    const misc = [
        "Enjoy public speaking, and keeping audiences engaged",
        "Like reading and writing borderline nihilistic stuff",
        "Can speak English, Arabic and Urdu fluently",
    ]
    return (
        <div className={aboutStyles.container}>
            <div>
                <Link to="/">
                    <div
                        className={aboutStyles.back}
                        style={{ paddingLeft: "0" }}
                    >
                        <IoMdArrowBack />{" "}
                        <span style={{ textDecoration: "underline" }}>
                            GO BACK
                        </span>
                    </div>
                </Link>
            </div>
            <h1>About me</h1>
            <p className={aboutStyles.para}>
                I'm very intrigued by how humans evolved, specifically in terms
                of what the 'conscious' is, how creativity is born, and how one
                could implement these abstract concepts into computers.
                Artificial intelligence, in my opinion, should not be considered
                a seperate species, but the next stage of evolution of humanity.{" "}
                <br></br>
                <br></br>
                My love for programming began with webdev, and since then, it
                has only grown. I aim to create blazing fast websites with pixel
                perfect UIs, no advertisements, sponsored posts, affiliations or
                any other such noise. I love learning and playing around with
                new frameworks and languages.
            </p>

            <h2>Stuff I'm familiar with:</h2>
            <div className={aboutStyles.skills}>
                <div>
                    <ul>
                        {skills.languages.map(item => {
                            if (item === "Rust") {
                                return (
                                    <li className={aboutStyles.lang}>
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "black",
                                            }}
                                        >
                                            <FaHeart />{" "}
                                        </span>

                                        {item}
                                    </li>
                                )
                            }
                            return <li className={aboutStyles.lang}>{item}</li>
                        })}

                        {skills.frameworks.map(item => {
                            if (item === "Vue") {
                                return (
                                    <li className={aboutStyles.fw}>
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "red",
                                            }}
                                        >
                                            <FaHeart />{" "}
                                        </span>
                                        {item}
                                    </li>
                                )
                            }
                            return <li className={aboutStyles.fw}>{item}</li>
                        })}
                    </ul>
                </div>
                <br></br>
                <br></br>
                <div>
                    <h2>Misc.</h2>
                    <ul>
                        {misc.map(item => (
                            <li className={aboutStyles.misc}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
