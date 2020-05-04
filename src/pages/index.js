import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Brief from "../components/brief"
import Projects from "../components/projects"

const IndexPage = () => (
    <Layout>
        <Seo description="Qurram Zaheer's portfolio" title="Qurram Zaheer" />
        <Brief />
        <Projects />
    </Layout>
)

export default IndexPage
