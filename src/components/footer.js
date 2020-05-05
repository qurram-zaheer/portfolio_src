import React from "react"
import { FaHeart } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"

import footerStyles from "../assets/css/footer.module.scss"

const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <span
                style={{
                    fontSize: "1.3rem",
                    color: "#663399",
                    paddingLeft: "1rem",
                }}
            >
                <GrGatsbyjs />
            </span>
            <div>
                Made with{" "}
                <span
                    style={{
                        color: "red",
                        marginLeft: "4px",
                        marginRight: "4px",
                        fontSize: "1.1rem",
                    }}
                >
                    <FaHeart />
                </span>{" "}
                by Qurram
            </div>
        </div>
    )
}

export default Footer
