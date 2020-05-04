import React from "react"
import { FaTwitch, FaRegHandPeace } from "react-icons/fa"
import { DiRust, DiJavascript1, DiPython } from "react-icons/di"
import { RiArrowRightUpLine } from "react-icons/ri"

import briefStyles from "../assets/css/brief.module.scss"
import profilePic from "../assets/images/profile.jpg"
import { Link } from "gatsby"

const Brief = () => {
    return (
        <div className={briefStyles.container}>
            <div className={briefStyles.leftHalf}>
                <h1>
                    Hi, I'm Qurram! <FaRegHandPeace></FaRegHandPeace>
                </h1>
                <h4>CS undergrad | Hardware geek</h4>
                <div className={briefStyles.mobDeets}>
                    <div>
                        <Link to="/about">
                            About
                            <RiArrowRightUpLine />
                        </Link>
                    </div>
                    <div>
                        <Link to="/blog">
                            Blog
                            <RiArrowRightUpLine />
                        </Link>
                    </div>
                </div>
                <p>
                    I am currently pursuing my Bachelors at Mahindra Ecole
                    Centrale.
                    <br></br>
                    I'm currently working under Dr. Arya K. Bhattacharya on the
                    implementation of a Game theory based expert system for an
                    industrial reactor.
                    <br></br>\ (•◡•) /<br></br>
                    <Link to="/about" style={{ fontWeight: "600" }}>
                        Read more
                    </Link>
                </p>
                <div className={briefStyles.skills}>
                    <ul>
                        <li>
                            <DiJavascript1 />
                        </li>
                        <li>
                            <DiPython />
                        </li>
                        <li>
                            <DiRust />
                        </li>
                    </ul>
                </div>
                <div className={briefStyles.contact}>
                    <p>
                        <a href="https://twitter.com/Decoherence17">Twitter</a>{" "}
                        /{" "}
                        <a href="https://www.linkedin.com/in/qurram-zaheer-aa08051a0/">
                            Linkedin
                        </a>
                    </p>
                </div>
            </div>
            <div className={briefStyles.rightHalf}>
                <div className={briefStyles.card}>
                    <div className={briefStyles.imgContainer}>
                        <img
                            src={profilePic}
                            className={briefStyles.profile}
                            alt="Qurram Zaheer"
                        ></img>
                    </div>
                    <div className={briefStyles.profileFlavor}>
                        <h3>
                            Find me on{" "}
                            <a
                                href="github.com/qurram-zaheer"
                                style={{ color: "white" }}
                            >
                                Github!
                            </a>
                        </h3>
                        <div>
                            <p>
                                I love streaming Overwatch, you're welcome to
                                join in and chill on my Twitch
                            </p>
                            <div className={briefStyles.twitchContainer}>
                                <FaTwitch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brief
