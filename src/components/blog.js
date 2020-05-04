import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { IoMdArrowBack } from "react-icons/io"

import blogStyles from "../assets/css/blog.module.scss"

const BlogSection = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <div className={blogStyles.container}>
            <div>
                <Link to="/">
                    <div
                        className={blogStyles.back}
                        style={{ paddingLeft: "0" }}
                    >
                        <IoMdArrowBack />{" "}
                        <span style={{ textDecoration: "underline" }}>
                            GO BACK
                        </span>
                    </div>
                </Link>
            </div>
            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(item => {
                    console.log(data)
                    return (
                        <li key={item.node.fields.slug}>
                            <Link to={`/blog/${item.node.fields.slug}`}>
                                <h2>{item.node.frontmatter.title}</h2>
                                <p
                                    style={{
                                        fontSize: "0.8rem",
                                        fontStyle: "italic",
                                        fontFamily: "Segoe UI",
                                        marginTop: "0.5rem",
                                    }}
                                >
                                    {item.node.frontmatter.date}
                                </p>
                                <p>{item.node.excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogSection
