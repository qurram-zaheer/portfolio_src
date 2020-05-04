/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import "../assets/css/index.scss"

import Header from "./header"

import { ThemeContext } from "./ThemeContext"

const themes = {
    light: {
        foreground: "#363636",
        background: "#ffffff",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
}

const ThemedLayout = styled.div`
    color: ${props => themes[props.theme.name].foreground};
    background-color: ${props => themes[props.theme.name].background};
    transition: all 0.4s ease;
    min-height: 100vh;
    & a {
        color: ${props =>
            props.theme.name === "dark" ? "#B38CD9" : "inherit"};
    }

    & p {
        font-weight: ${props =>
            props.theme.name === "dark" ? "600" : "inherit"};
    }
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <ThemeContext.Consumer>
            {theme => (
                <ThemedLayout theme={theme}>
                    <Header
                        siteTitle={data.site.siteMetadata.title}
                        theme={theme}
                    />
                    {children}
                </ThemedLayout>
            )}
        </ThemeContext.Consumer>
    )
}

export default Layout
