import React, { Component } from "react";
import styled from 'styled-components';

class blog extends Component {
    render() {
        // const siteMetadata = this.props.data.site.siteMetadata
        const {posts} = this.props.data.allWordpressPost;

        console.log(posts);

        return (
            <Container>
                <h1>Blog</h1>
                <div>
                    {
                        posts.map(item => {
                            let {post} = item;
                            return (
                                <div className="blog-post" key={`post-${post.slug}`}>
                                    <h3>{post.title}</h3>
                                    <p>{post.date}</p>
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />      
                                    <a href={`/blog/${post.slug}`}>Read More</a>                              
                                </div>
                            )
                        })
                    }
                </div>                
            </Container>
        )
    }
}

export default blog

const Container = styled.div`
    .blog-post {
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        a {
            display: block;
            padding: 10px;
            background-color:#e26f5b;
            width: 150px;
            color: #fff;
            font-family: sans-serif;
            margin: 10px 0;
            border-radius: 5px;
            text-align: center;
            align-self: flex-end;
        }
    }
`

export const pageQuery = graphql`
    query allPosts{
        allWordpressPost(sort: {fields: [date], order: DESC}) {
            posts: edges {
                post: node {
                    title
                    content
                    slug
                    excerpt
                    date(formatString: "DD, MMMM YYYY")
                }
            }
        }
    }
`