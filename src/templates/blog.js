import React from "react"
import { graphql } from "gatsby"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "../assets/css/blog.module.scss"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = props => {
    return (
        <Layout>
            <div className={blogStyles.container}>
                <div>
                    <Link to="/blog">
                        <div className={blogStyles.back}>
                            <IoMdArrowBack />{" "}
                            <span style={{ textDecoration: "underline" }}>
                                GO BACK
                            </span>
                        </div>
                    </Link>
                </div>
                <h1 style={{ marginBottom: "0" }}>
                    {props.data.markdownRemark.frontmatter.title}
                </h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                ></div>
            </div>
        </Layout>
    )
}

export default Blog
