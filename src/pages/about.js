import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import AboutSection from "../components/about"

const AboutPage = () => {
    return (
        <Layout>
            <Seo description="About Qurram" title="About"></Seo>
            <AboutSection />
        </Layout>
    )
}

export default AboutPage
