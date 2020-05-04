import { Link } from "gatsby"
import React from "react"
import Switch from "react-switch"

import headerStyles from "../assets/css/header.module.scss"
import sunIcon from "../assets/images/sun-icon.svg"
import moonIcon from "../assets/images/moon-icon.svg"

const Header = ({ siteTitle, theme }) => (
    <header className={headerStyles.navbar}>
        <div className={headerStyles.logo}>
            <h2>
                <Link
                    className={headerStyles.navLinks}
                    to="/"
                    style={{ fontFamily: "Megrim", padding: "1rem" }}
                >
                    {"<q/z>"}
                </Link>
            </h2>
        </div>
        <div className={headerStyles.navList}>
            <ul>
                {" "}
                <Link className={headerStyles.navLinks} to="/about">
                    <li>About</li>
                </Link>
                <Link className={headerStyles.navLinks} to="/blog">
                    <li>Blog</li>
                </Link>
                <a
                    className={headerStyles.navLinks}
                    href="https://drive.google.com/file/d/1FC9lnsUga42SlwWcX_9PoFWxCfEHeSt7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li>CV</li>
                </a>
            </ul>
            <div className={headerStyles.switch}>
                <Switch
                    onChange={() =>
                        theme.updateTheme(
                            theme.name === "light" ? "dark" : "light"
                        )
                    }
                    checked={theme.name === "dark"}
                    onColor="#333"
                    offColor="#fffed9"
                    offHandleColor="#333"
                    checkedIcon={<img src={moonIcon} alt="moon"></img>}
                    uncheckedIcon={<img src={sunIcon} alt="sun"></img>}
                    boxShadow="0 0 2px 3px #B38CD9"
                    activeBoxShadow="0 0 2px 3px #dfb3e6"
                ></Switch>
            </div>
        </div>
    </header>
)

export default Header
