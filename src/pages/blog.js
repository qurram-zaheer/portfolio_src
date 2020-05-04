import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import BlogSection from "../components/blog"

const BlogPage = () => {
    return (
        <Layout>
            <Seo description="Qurram's blog" title="Blog" />
            <BlogSection />
        </Layout>
    )
}

export default BlogPage
