/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.modifyBabelrc = ({ babelrc }) => ({
    ...babelrc,
    plugins: babelrc.plugins.concat([
        'transform-regenerator',
        'transform-runtime',
    ]),
})

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allWordpressPage {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `)
            .then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                const pageTemplate = path.resolve(`./src/templates/page.js`)
                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: edge.node.slug !== 'home' ? `/${edge.node.slug}/` : '/',
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })
            })
            .then(() => {
                
                graphql(`
                    {
                        allWordpressPost {
                            edges {
                                node {
                                    id
                                    slug
                                }
                            }
                        }
                    }
                `)
                    .then(result => {
                            if (result.errors) {
                                reject(result.errors)
                            }

                            const postTemplate = path.resolve(`./src/templates/post.js`)
                            _.each(result.data.allWordpressPost.edges, edge => {
                                createPage({
                                    path: `/blog/${edge.node.slug}/`,
                                    component: slash(postTemplate),
                                    context: {
                                        id: edge.node.id,
                                    },
                                })
                            })
                            resolve()
                        })
                })              
                
            
    })
}
